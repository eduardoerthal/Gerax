import re
import logging
from fastapi import APIRouter, BackgroundTasks, HTTPException
from pydantic import BaseModel, EmailStr, Field

from src.db import get_connection
from src.excel import salvar_em_excel
from src.email_service import enviar_emails

logger = logging.getLogger(__name__)
router = APIRouter()


class Contato(BaseModel):
    nome: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    telefone: str = Field(..., min_length=1, max_length=20)
    empresa: str = Field(..., min_length=1, max_length=100)
    cnpj: str | None = Field(default=None, max_length=18)
    mensagem: str = Field(..., min_length=1, max_length=5000)
    website: str | None = ""


@router.post("/contato")
def criar_contato(dados: Contato, background_tasks: BackgroundTasks):
    if dados.website:
        logger.warning("Honeypot acionado, ignorando submissão")
        return {"ok": True}

    if not dados.nome.strip():
        raise HTTPException(status_code=400, detail="Nome obrigatório")

    telefone_limpo = re.sub(r"\D", "", dados.telefone)
    if len(telefone_limpo) not in [10, 11, 12, 13]:
        raise HTTPException(status_code=400, detail="Telefone inválido")

    if not dados.empresa.strip():
        raise HTTPException(status_code=400, detail="Empresa obrigatória")

    if not dados.mensagem.strip():
        raise HTTPException(status_code=400, detail="Mensagem obrigatória")

    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contatos (nome, email, telefone, empresa, cnpj, mensagem) VALUES (%s, %s, %s, %s, %s, %s)",
            (
                dados.nome,
                dados.email,
                dados.telefone,
                dados.empresa,
                dados.cnpj,
                dados.mensagem,
            ),
        )
        conn.commit()
    except Exception:
        logger.exception("Erro ao salvar contato no banco de dados")
        raise HTTPException(status_code=500, detail="Erro ao salvar mensagem. Tente novamente.")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

    try:
        salvar_em_excel(dados)
    except Exception:
        logger.exception("Erro ao salvar contato no Excel (não bloqueia o envio)")

    background_tasks.add_task(enviar_emails, dados)

    return {"ok": True}
