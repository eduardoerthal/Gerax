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
          <Link to="/sobre">Sobre</Link>
          <Link to="/solucoes">Soluções</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div>
          <h5>Suporte</h5>
          <a href="#">Central de ajuda</a>
        </div>

        <div>
          <h5>Contato</h5>
          <a href="mailto:contato@gerax.com.br">Contato@geraxtech.com.br</a>
          <a href="tel:+5500000000000">(00) 0000-0000</a>
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