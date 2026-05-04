import React, { useState } from "react";
import Swal from "sweetalert2"; // 👈 ADICIONADO
import { Navbar } from "../components/Navbar";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { FaWhatsapp, FaPhone, FaClock, FaShareAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/Contato.css";

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "+55",
    empresa: "",
    cnpj: "",
    assunto: "",
    mensagem: "",
    website: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      nome: form.nome + " " + form.sobrenome,
      email: form.email,
      telefone: form.telefone,
      empresa: form.empresa,
      cnpj: form.cnpj,
      mensagem: form.assunto + " - " + form.mensagem,
      website: form.website
    };

    // 👇 LOADING
    Swal.fire({
      title: "Enviando...",
      text: "Aguarde um momento",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
      const res = await fetch(`${apiUrl}/contato`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });

      Swal.close(); // 👈 fecha loading

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Nossa equipe entrará em contato em breve.",
          confirmButtonColor: "#00A63E"
        });

        setForm({
          nome: "",
          sobrenome: "",
          email: "",
          telefone: "+55",
          empresa: "",
          cnpj: "",
          assunto: "",
          mensagem: "",
          website: ""
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro ao enviar",
          text: "Tente novamente mais tarde.",
          confirmButtonColor: "#002AAD"
        });
      }
    } catch (error) {
      Swal.close();

      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Servidor indisponível",
        text: "Verifique sua conexão ou tente novamente.",
        confirmButtonColor: "#002AAD"
      });
    }
  };

  return (
    <div className="contato">
      <Navbar />

      <section className="contato-banner">
        <div className="contato-banner__content">
          <h1>Entre em contato com a Gerax</h1>
          <p>
            Tire suas dúvidas e fale diretamente com nossos especialistas.
            Atendimento rápido, próximo e sem burocracia.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> Entrar em contato pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="contato-content">
        <div className="contato-grid">

          <div className="contato-info">
            <h2>Entre em Contato</h2>
            <p className="contato-lead">
              Utilize um de nossos canais para tirar dúvidas, solicitar suporte
              ou falar com um especialista da Gerax.
            </p>

            <div className="info-card">
              <div className="info-icon info-icon--flip"><FaPhone /></div>
              <div className="info-body">
                <h3>TELEFONES</h3>

                <div className="info-block">
                  <strong>HORÁRIO COMERCIAL:</strong>
                  <span>Tratativas comerciais, administrativas e suporte</span>
                  <a href="tel:08000028000" className="btn-call">
                    Ligar para 0800 002 8000
                  </a>
                </div>

                <div className="info-block">
                  <strong>CENTRAL 24HR:</strong>
                  <span>Tratativas de roubo e furto</span>
                  <a href="tel:08000306672" className="btn-call">
                    Ligar para 0800 030 6672
                  </a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaClock /></div>
              <div className="info-body">
                <h3>HORÁRIO COMERCIAL</h3>
                <p>Segunda a Sexta-feira (dias úteis)</p>
                <p><strong>08:00 às 18:00</strong></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaShareAlt /></div>
              <div className="info-body">
                <h3>REDES SOCIAIS DA GERAX</h3>
                <p>Acompanhe nossas novidades e bastidores</p>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/gerax_tech?igsh=MTFuYjJyMzR6N2Vlbw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Gerax"
                    className="social-icon social-icon--instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gerax-decisões-inteligentes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn da Gerax"
                    className="social-icon social-icon--linkedin"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="contato-form-wrap">
            <h2>Envie uma Mensagem</h2>
            <p className="contato-lead">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              com você o mais breve possível.
            </p>

            <form className="contato-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="nome">Primeiro Nome *</label>
                  <input id="nome" type="text" value={form.nome} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="sobrenome">Sobrenome *</label>
                  <input id="sobrenome" type="text" value={form.sobrenome} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">E-mail *</label>
                <input id="email" type="email" value={form.email} onChange={handleChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="telefone">Telefone *</label>
                <input id="telefone" type="tel" value={form.telefone} onChange={handleChange} required />
                <small>Não esqueça do DDD</small>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="empresa">Nome da Empresa *</label>
                  <input id="empresa" type="text" value={form.empresa} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="cnpj">CNPJ</label>
                  <input id="cnpj" type="text" value={form.cnpj} onChange={handleChange} />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="assunto">Assunto *</label>
                <input id="assunto" type="text" value={form.assunto} onChange={handleChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea id="mensagem" rows="5" value={form.mensagem} onChange={handleChange} required />
              </div>

              <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
                <label htmlFor="website">Não preencha este campo</label>
                <input
                  id="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-submit">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}

export default Contato;