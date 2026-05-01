import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Footer from "../components/Footer";
import Contato from "../pages/Contato";
import Solucoes from "../pages/Solucoes";

function Router() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/solucoes" element={<Solucoes />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default Router;