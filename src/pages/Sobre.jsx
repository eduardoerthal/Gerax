import React from "react";
import "../styles/Sobre.css"
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import bgSobre from "../assets/sobre.png";

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

          <h2>Nossa Visão</h2>
          <p>
            Ser referência no mercado de rastreamento, trazendo inovação
            e confiança para nossos clientes.
          </p>

          <h2>Nossos Valores</h2>
          <ul>
            <li>Compromisso com o cliente</li>
            <li>Inovação constante</li>
            <li>Transparência</li>
            <li>Segurança</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Sobre;