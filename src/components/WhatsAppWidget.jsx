import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppWidget.css";

function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* botão flutuante */}
      <div className="whatsapp-float" onClick={() => setOpen(!open)}>
        <FaWhatsapp />
      </div>

      {/* caixinha do chat */}
      {open && (
        <div className="whatsapp-box">
          <div className="whatsapp-header">
            <strong>Entre em Contato Conosco</strong>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="whatsapp-body">
            <p>Olá, quer melhorar o controle da sua frota? Fale com a gente!</p>

            <a
              href="https://wa.me/5541988799030"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar conversa no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppWidget;