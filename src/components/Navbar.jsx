import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

export function Navbar({ transparente }) {
  return (
    <header className={`navbar ${transparente ? "navbar-transparent" : ""}`}>
      <div className="navbar__logo">
        <img src={Logo} alt="Gerax" />
      </div>

      <nav className="navbar__links">
        <Link to="/">Início</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/sobre">A Empresa</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      
    </header>
  );
}
