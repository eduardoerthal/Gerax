import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Footer from "../components/Footer";

function Router() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    
      {/* Footer aparece em TODAS as páginas */}
      <Footer />

    </BrowserRouter>
  );
}

export default Router;