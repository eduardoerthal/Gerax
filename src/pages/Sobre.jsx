import React from "react";
import "../styles/Sobre.css"
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import bgSobre from "../assets/sobre.png";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faLock } from '@fortawesome/free-solid-svg-icons'
import { FaLightbulb } from "react-icons/fa";

function Sobre() {
  return (
    <div className="sobre">
      <Navbar transparente />
      
      <section 
        className="hero-sobre"
        style={{
          backgroundImage: `url(${Sobre})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay">
          <h1>Sobre Nós</h1>
          <p>
              Soluções de Rastreamento, Monitoramento e Gestão de Frotas
          </p>
        </div>
      </section>

      <section className="sobre-content">
        <div className="container">
          <h2>Quem Somos Nós</h2>
          <p>
           Somos a soma de talentos individuais orientados por um mesmo propósito: aplicar tecnologia e inteligência na gestão de frotas.
            Reunimos profissionais com vários anos de experiência no setor, combinando conhecimento prático, visão analítica e capacidade técnica para transformar dados em decisões mais rápidas e seguras.
          </p>
          
          <p>
            Nossa atuação integra rastreamento, monitoramento e uso de inteligência artificial para gerar informações claras, reduzir riscos operacionais e apoiar a rotina dos nossos clientes com mais precisão.

A empresa foi idealizada pelo sócio administrador, com trajetória construída na área de logística de uma das principais empresas do setor energético do país, aliada à especialização no exterior e à atuação no meio acadêmico,
base que contribuiu para estruturar um projeto orientado por tecnologia e pela valorização do capital humano.

Acreditamos que resultados consistentes nascem da integração entre pessoas qualificadas e ferramentas inteligentes, e é assim que seguimos evoluindo.
     
          </p>
        </div>

        <section className="mvv">
          <span className="section-tag-sobre">Nossos Pilares</span>
          <h2 className="mvv-title">Missão, Visão e Valores</h2>

          <div className="mvv-grid">
            <div className="mvv-card">
              <h3>Missão</h3>
              <p className="mvv-tagline">Tecnologia e dados para decisões mais seguras</p>
              <p className="mvv-desc">Apoiar a gestão de frotas com inteligência, clareza e responsabilidade.</p>
            </div>

            <div className="mvv-card">
              <h3>Visão</h3>
              <p className="mvv-tagline">Referência em soluções inteligentes para frotas</p>
              <p className="mvv-desc">Unindo experiência prática e uso estratégico de tecnologia.</p>
            </div>

            <div className="mvv-card">
              <h3>Valores</h3>
              <ul className="valores-list">
                <p className="mvv-tagline">Satisfação do cliente como prioridade inegociável</p>
                <li><span></span> Responsabilidade na atuação</li>
                <li><span></span> Tecnologia com propósito</li>
                <li><span></span> Valorização das pessoas</li>
                <li><span></span> Experiência aplicada ao dia a dia</li>
                <li><span></span> Clareza e objetividade</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="features-sobre">
            <span className="section-tag-sobre">Nosso Diferencial</span>
            <h2>Inovação, Segurança</h2>
            <div className="features-grid-sobre">
              <div className="feature-card-sobre">
                <div className="feature-icon-lightbulb">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h3>Inovação</h3>
                <p>Soluções tecnológicas modernas que tornam a gestão de frotas mais eficiente, automatizada e inteligente, apoiando decisões mais rápidas.</p>
              </div>
              <div className="feature-card-sobre">
                <div className="feature-icon-lock">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <h3>Segurança </h3>
                <p>Monitoramento em tempo real com tecnologia segura e confiável, garantindo proteção da frota, redução de riscos e mais controle operacional.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <WhatsAppWidget />
    </div>
  );
}

export default Sobre;