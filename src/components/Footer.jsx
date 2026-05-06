import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="home-footer">
      
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Gerax<span>.</span></div>
          <p>
            Tecnologia em rastreamento e gestão de frotas para empresas que querem crescer com segurança.
          </p>

          <div className="social-icons">
            <a 
              href="https://www.instagram.com/gerax_tech?igsh=MTFuYjJyMzR6N2Vlbw==" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a 
              href="https://www.linkedin.com/gerax-decisões-inteligentes" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h5>Empresa</h5>
          <Link to="/">Início</Link>
          <Link to="/solucoes">Soluções</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div>
          <h5>Suporte</h5>
          <p className="footer-emergency-number">0800 080 9030</p>
          <a
            href="https://wa.me/5541988799030"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <p className="footer-hours-info">Comercial: Seg–Sex, 8h–18h</p>
        </div>

        <div>
          <h5>Contato</h5>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Contato@geraxtech.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato@geraxtech.com.br
          </a>
          <a href="tel:+5541988799030">(41) 98879-9030</a>
        </div>
      </div>

      {/* Parte de baixo organizada */}
      <div className="footer-bottom">
        <p>© 2026 Gerax Tech. Todos os direitos reservados.</p>
        <p>CNPJ: 66.419.598/0001-66</p>
      </div>

    </footer>
  );
}

export default Footer;