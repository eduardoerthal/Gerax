from fastapi import APIRouter, HTTPException
from src.db import get_connection
from pydantic import BaseModel
import re
from src.excel import salvar_em_excel

router = APIRouter()

class Contato(BaseModel):
    nome: str
    email: str
    telefone: str
    empresa: str
    cnpj: str | None = None
    mensagem: str

@router.post("/contato")
def criar_contato(dados: Contato):
    #VALIDAÇÃO DOS CAMPOS
    if not dados.nome.strip():
        raise HTTPException(status_code=400, detail="Nome obrigatório")

    if not dados.email.strip():
        raise HTTPException(status_code=400, detail="Email obrigatório")

    telefone_limpo = re.sub(r"\D", "", dados.telefone)

    if len(telefone_limpo) not in [10, 11]:
        raise HTTPException(status_code=400, detail="Telefone inválido")

    if not dados.empresa.strip():
        raise HTTPException(status_code=400, detail="Empresa obrigatória")

    if not dados.mensagem.strip():
        raise HTTPException(status_code=400, detail="Mensagem obrigatória")

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
            dados.mensagem
        )
    )

    conn.commit()
    salvar_em_excel(dados)
    cursor.close()
    conn.close()

    return {"ok": True}