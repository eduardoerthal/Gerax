import io
import os
import logging

from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import StreamingResponse
from openpyxl import Workbook

from src.db import get_connection

logger = logging.getLogger(__name__)
router = APIRouter()

EXPORT_TOKEN = os.getenv("EXPORT_TOKEN")


@router.get("/contatos/exportar")
def exportar_contatos(token: str = Query(...)):
    if not EXPORT_TOKEN:
        raise HTTPException(status_code=500, detail="Exportação não configurada no servidor")
    if token != EXPORT_TOKEN:
        raise HTTPException(status_code=401, detail="Token inválido")

    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT id, nome, email, telefone, empresa, cnpj, mensagem, data_criacao "
            "FROM contatos ORDER BY data_criacao DESC"
        )
        rows = cursor.fetchall()
    except Exception:
        logger.exception("Erro ao consultar contatos para exportação")
        raise HTTPException(status_code=500, detail="Erro ao consultar banco de dados")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

    wb = Workbook()
    ws = wb.active
    ws.title = "Contatos"
    ws.append(["ID", "Nome", "E-mail", "Telefone", "Empresa", "CNPJ", "Mensagem", "Data"])

    for row in rows:
        data_str = row[7].strftime("%d/%m/%Y %H:%M:%S") if row[7] else ""
        ws.append([row[0], row[1], row[2], row[3], row[4], row[5], row[6], data_str])

    buffer = io.BytesIO()
    wb.save(buffer)
    buffer.seek(0)

    return StreamingResponse(
        buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": 'attachment; filename="contatos.xlsx"'},
    )
