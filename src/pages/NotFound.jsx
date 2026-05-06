import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <Navbar />

      <section className="notfound-content">
        <span className="notfound-code">404</span>
        <h1>Página não encontrada</h1>
        <p>
          O conteúdo que você procura não existe ou foi movido. Volte para a
          home e continue navegando.
        </p>
        <Link to="/" className="btn-primary">
          Voltar para a Home
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
