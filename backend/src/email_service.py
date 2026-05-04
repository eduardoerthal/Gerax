import os
import ssl
import smtplib
import logging
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

EMAIL_HOST = os.getenv("EMAIL_HOST", "smtps.uhserver.com")
EMAIL_PORTA = int(os.getenv("EMAIL_PORTA", "465"))
EMAIL_REMETENTE = os.getenv("EMAIL_REMETENTE")
EMAIL_SENHA = os.getenv("EMAIL_SENHA")
EMAIL_DESTINO = os.getenv("EMAIL_DESTINO")


def _enviar(msg: EmailMessage):
    if not EMAIL_REMETENTE or not EMAIL_SENHA or not EMAIL_DESTINO:
        raise RuntimeError("Variáveis EMAIL_REMETENTE / EMAIL_SENHA / EMAIL_DESTINO não configuradas no .env")

    contexto = ssl.create_default_context()
    with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORTA, context=contexto) as smtp:
        smtp.login(EMAIL_REMETENTE, EMAIL_SENHA)
        smtp.send_message(msg)


def _email_admin(dados) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = f"Novo contato pelo site - {dados.nome}"
    msg["From"] = EMAIL_REMETENTE
    msg["To"] = EMAIL_DESTINO
    msg["Reply-To"] = dados.email

    msg.set_content(
        f"Você recebeu uma nova mensagem pelo formulário do site:\n\n"
        f"Nome: {dados.nome}\n"
        f"E-mail: {dados.email}\n"
        f"Telefone: {dados.telefone}\n"
        f"Empresa: {dados.empresa}\n"
        f"CNPJ: {dados.cnpj or '-'}\n\n"
        f"Mensagem:\n{dados.mensagem}\n"
    )
    return msg


def _email_confirmacao(dados) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = "Recebemos sua mensagem - Gerax Tech"
    msg["From"] = EMAIL_REMETENTE
    msg["To"] = dados.email

    msg.set_content(
        f"Olá, {dados.nome.split()[0]}!\n\n"
        f"Recebemos sua mensagem e nossa equipe entrará em contato com você em breve.\n\n"
        f"Resumo da sua solicitação:\n"
        f"Empresa: {dados.empresa}\n"
        f"Mensagem: {dados.mensagem}\n\n"
        f"Se precisar falar com a gente urgentemente, ligue para 0800 002 8000.\n\n"
        f"Atenciosamente,\n"
        f"Equipe Gerax Tech\n"
    )
    return msg


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
