import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../styles/Home.css";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, 
  faLock, 
  faMapLocationDot, 
  faTowerBroadcast, 
  faTriangleExclamation 
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <span className="subtitle">Rastreamento e gestão de frotas</span>
         <h1 className="hero-title">
        <span className="line line1">Soluções inteligentes.</span><br />
        <span className="line line2">Decisões que transformam.</span><br />
        <span className="line line3">Resultados otimizados.</span>
      </h1>
          <p>
            Visualize em tempo real a localização dos seus veículos e acompanhe toda a movimentação
            com alertas, monitoramento e proteção completa para sua operação.
          </p>
          <div className="hero-buttons">
            <Link to="/solucoes" className="btn-primary">Conheça as Soluções</Link>
            <Link to="/contato" className="btn-secondary">Fale Conosco</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <span className="section-tag">Nossas soluções</span>
        <h2 className="section-title">Tudo o que sua frota precisa</h2>
        <p className="section-subtitle">
          Tecnologia de ponta combinada com simplicidade. Controle total da sua operação em uma única plataforma.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-satellite">
              <FontAwesomeIcon icon={faTowerBroadcast} />
            </div>
            <h3>Rastreamento em tempo real</h3>
            <p>Localização precisa via GPS com atualização contínua e histórico de rotas detalhado.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-alert">
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </div>
            <h3>Alertas inteligentes</h3>
            <p>Receba notificações de excesso de velocidade, paradas indevidas e desvios de rota.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-lock">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <h3>Bloqueio remoto</h3>
            <p>Em caso de roubo, bloqueie o veículo de forma remota e segura pelo painel.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-chart">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Relatórios completos</h3>
            <p>Análises de desempenho, consumo e produtividade da frota em dashboards visuais.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-map">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <h3>Cerca virtual</h3>
            <p>Defina áreas autorizadas e seja alertado sempre que um veículo entrar ou sair.</p>
          </div>
        </div>
      </section>

      <section className="como-funciona">
        <span className="section-tag">Processo simples</span>
        <h2 className="section-title">Como funciona</h2>
        <p className="section-subtitle">Em poucos passos sua frota está protegida e sob seu controle.</p>

        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h4>Diagnóstico</h4>
            <p>Entendemos sua operação e definimos a melhor solução para o seu negócio.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h4>Instalação</h4>
            <p>Nossa equipe instala os rastreadores nos veículos de maneira rápida.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h4>Configuração</h4>
            <p>Plataforma personalizada com seus usuários, regras e cercas virtuais.</p>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <h4>Monitoramento</h4>
            <p>Acompanhe tudo 24/7 com suporte especializado sempre que precisar.</p>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-box">
          <h2>Pronto para transformar sua frota?</h2>
          <p>Solicite uma demonstração gratuita e veja a Gerax em ação.</p>
          <Link to="/contato" className="btn-primary">Solicitar demonstração</Link>
        </div>
      </section>
      
      <WhatsAppWidget />
    </div>
  );
}

export default Home;