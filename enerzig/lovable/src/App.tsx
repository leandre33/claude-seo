import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Photovoltaique from "./pages/Photovoltaique";
import AidesFinancieres from "./pages/AidesFinancieres";
import ElectricienLibourne from "./pages/ElectricienLibourne";
import ElectricienBordeaux from "./pages/ElectricienBordeaux";
import PanneauxSolairesGironde from "./pages/PanneauxSolairesGironde";

// Placeholder for pages not yet created
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <h1 className="text-3xl font-bold text-gray-400">{title} — En cours de création</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />

            {/* Service pages */}
            <Route path="/photovoltaique" element={<Photovoltaique />} />
            <Route path="/electricite" element={<Placeholder title="Électricité générale" />} />
            <Route path="/climatisation" element={<Placeholder title="Climatisation réversible" />} />
            <Route path="/ventilation" element={<Placeholder title="VMC – Ventilation" />} />
            <Route path="/gtb" element={<Placeholder title="GTB – Automatisation" />} />

            {/* Local landing pages */}
            <Route path="/electricien-libourne" element={<ElectricienLibourne />} />
            <Route path="/electricien-bordeaux" element={<ElectricienBordeaux />} />
            <Route path="/panneaux-solaires-gironde" element={<PanneauxSolairesGironde />} />
            <Route path="/panneaux-solaires-bordeaux" element={<Placeholder title="Panneaux solaires Bordeaux" />} />
            <Route path="/panneaux-solaires-libourne" element={<Placeholder title="Panneaux solaires Libourne" />} />
            <Route path="/climatisation-libourne" element={<Placeholder title="Climatisation Libourne" />} />
            <Route path="/vmc-gironde" element={<Placeholder title="VMC Gironde" />} />

            {/* Content pages */}
            <Route path="/aides-financieres" element={<AidesFinancieres />} />
            <Route path="/faq" element={<Placeholder title="FAQ" />} />
            <Route path="/realisations" element={<Placeholder title="Nos réalisations" />} />
            <Route path="/contact" element={<Placeholder title="Contact & Devis" />} />
            <Route path="/a-propos" element={<Placeholder title="À propos d'Enerzig" />} />
            <Route path="/mentions-legales" element={<Placeholder title="Mentions légales" />} />

            {/* 404 */}
            <Route path="*" element={<Placeholder title="Page introuvable (404)" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
