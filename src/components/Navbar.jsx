import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

export function Navbar({ transparente }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${transparente ? "navbar-transparent" : ""}`}>
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="Gerax" />
        </Link>
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
        <Link to="/solucoes" onClick={() => setMenuOpen(false)}>Soluções</Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>A Empresa</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
        <Link to="/plataforma" className="btn-plataforma" onClick={() => setMenuOpen(false)}>
          Acesse a Plataforma
        </Link>
      </nav>
    </header>
  );
}
