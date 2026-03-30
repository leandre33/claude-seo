import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ElectricienLibourne from "./pages/ElectricienLibourne";
import ElectricienBordeaux from "./pages/ElectricienBordeaux";
import PanneauxSolairesGironde from "./pages/PanneauxSolairesGironde";
import AidesFinancieres from "./pages/AidesFinancieres";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Local SEO pages */}
            <Route path="/electricien-libourne" element={<ElectricienLibourne />} />
            <Route path="/electricien-bordeaux" element={<ElectricienBordeaux />} />
            <Route path="/panneaux-solaires-gironde" element={<PanneauxSolairesGironde />} />
            <Route path="/aides-financieres" element={<AidesFinancieres />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
