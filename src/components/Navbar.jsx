import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

export function Navbar({ transparente }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparente) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparente]);

  const isTransparent = transparente && !scrolled;

  return (
    <header className={`navbar ${isTransparent ? "navbar-transparent" : ""}`}>
      <div className="navbar__logo">
        <Link to="/">
        <img src={Logo} alt="Gerax" />
        </Link>
      </div>

      <nav className="navbar__links">
        <Link to="/">Início</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/sobre">A Empresa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/plataforma" className="btn-plataforma">
        Acesse a Plataforma
        </Link>
      </nav>

    </header>
  );
}
