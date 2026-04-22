import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.png";



export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        {<img src={Logo} alt="Gerax" />}

      </div>

      <nav className="navbar__links">
        <Link to="/">Início</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>

    </header>
  );
}