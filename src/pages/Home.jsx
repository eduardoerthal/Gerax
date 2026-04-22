import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function Home() {
  return (
    <div className="home">
        <Navbar />
      <section className="hero">
        
        <div className="hero-text">
          <span className="subtitle">
            Rastreamento e gestão de frotas
          </span>

          <h2>
            Mais controle.<br />
            Mais segurança.<br />
            <span>Melhores resultados.</span>
          </h2>

          <p>
            Acompanhe seus veículos em tempo real, tenha mais controle
            sobre sua operação e gerencie toda a sua frota em um só lugar.
          </p>

          <div className="buttons">
            <Link className="primary-btn" to="/solucoes">
              Conheça as Soluções
            </Link>

            <Link className="secondary-btn" to="/contato">
              Fale Conosco
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="card map-card">
            <h3>Rastreamento em Tempo Real</h3>
            <p>
              Visualize a localização dos veículos instantaneamente e
              acompanhe toda a movimentação da frota.
            </p>
          </div>

          <div className="card info-card">
            <h3>Mais Segurança para sua Empresa</h3>
            <p>
              Tenha alertas, monitoramento e proteção completa para os
              veículos da sua operação.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;