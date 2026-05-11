import os
import logging
import resend
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

resend.api_key = os.getenv("RESEND_API_KEY")
EMAIL_REMETENTE = os.getenv("EMAIL_REMETENTE")
EMAIL_DESTINO = os.getenv("EMAIL_DESTINO")


def _enviar(payload: dict):
    if not resend.api_key or not EMAIL_REMETENTE or not EMAIL_DESTINO:
        raise RuntimeError(
            "Variáveis RESEND_API_KEY / EMAIL_REMETENTE / EMAIL_DESTINO não configuradas"
        )
    resend.Emails.send(payload)


def _email_admin(dados) -> dict:
    return {
        "from": EMAIL_REMETENTE,
        "to": [EMAIL_DESTINO],
        "reply_to": dados.email,
        "subject": f"Novo contato pelo site - {dados.nome}",
        "text": (
            f"Você recebeu uma nova mensagem pelo formulário do site:\n\n"
            f"Nome: {dados.nome}\n"
            f"E-mail: {dados.email}\n"
            f"Telefone: {dados.telefone}\n"
            f"Empresa: {dados.empresa}\n"
            f"CNPJ: {dados.cnpj or '-'}\n\n"
            f"Mensagem:\n{dados.mensagem}\n"
        ),
    }


def _email_confirmacao(dados) -> dict:
    return {
        "from": EMAIL_REMETENTE,
        "to": [dados.email],
        "subject": "Recebemos sua mensagem - Gerax Tech",
        "text": (
            f"Olá, {dados.nome.split()[0]}!\n\n"
            f"Recebemos sua mensagem e nossa equipe entrará em contato com você em breve.\n\n"
            f"Resumo da sua solicitação:\n"
            f"Empresa: {dados.empresa}\n"
            f"Mensagem: {dados.mensagem}\n\n"
            f"Se precisar falar com a gente urgentemente, ligue para 0800 080 9030.\n\n"
            f"Atenciosamente,\n"
            f"Equipe Gerax Tech\n"
        ),
    }


def enviar_emails(dados):
    try:
        _enviar(_email_admin(dados))
        logger.info("E-mail de notificação enviado para %s", EMAIL_DESTINO)
    except Exception:
        logger.exception("Falha ao enviar e-mail de notificação para o admin")

    try:
        _enviar(_email_confirmacao(dados))
        logger.info("E-mail de confirmação enviado para %s", dados.email)
    except Exception:
        logger.exception("Falha ao enviar e-mail de confirmação para o cliente")
