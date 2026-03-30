import { Link } from "react-router-dom";
import { Zap, MapPin, Phone, Mail, Facebook, Instagram, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-enerzig-dark text-gray-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand + NAP — crucial for local SEO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-enerzig-orange rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">Enerzig</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Expert en électricité, photovoltaïque, climatisation et VMC à Libourne et dans toute la Gironde depuis 2023.
          </p>
          <address className="not-italic text-sm space-y-2 text-gray-400 mb-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-enerzig-orange mt-0.5 shrink-0" />
              <span>15 Rue Paul Bert, 33500 Libourne, Gironde</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-enerzig-orange shrink-0" />
              <a href="tel:+33XXXXXXXXX" className="hover:text-enerzig-orange transition-colors">+33 X XX XX XX XX</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-enerzig-orange shrink-0" />
              <a href="mailto:contact@enerzig.com" className="hover:text-enerzig-orange transition-colors">contact@enerzig.com</a>
            </div>
          </address>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/enerzig" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-lg hover:bg-enerzig-orange transition-colors" aria-label="Facebook Enerzig">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/enerzig" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-lg hover:bg-enerzig-orange transition-colors" aria-label="Instagram Enerzig">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nos services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#electricite" className="hover:text-enerzig-orange transition-colors">Électricité générale</Link></li>
            <li><Link to="/services#photovoltaique" className="hover:text-enerzig-orange transition-colors">Panneaux photovoltaïques</Link></li>
            <li><Link to="/services#climatisation" className="hover:text-enerzig-orange transition-colors">Climatisation réversible</Link></li>
            <li><Link to="/services#vmc" className="hover:text-enerzig-orange transition-colors">VMC – Ventilation</Link></li>
            <li><Link to="/aides-financieres" className="hover:text-enerzig-orange transition-colors">Aides financières</Link></li>
          </ul>
        </div>

        {/* Zone d'intervention — local SEO anchor links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Zone d'intervention</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/electricien-libourne" className="hover:text-enerzig-orange transition-colors">Électricien Libourne</Link></li>
            <li><Link to="/electricien-bordeaux" className="hover:text-enerzig-orange transition-colors">Électricien Bordeaux</Link></li>
            <li><Link to="/panneaux-solaires-gironde" className="hover:text-enerzig-orange transition-colors">Panneaux solaires Gironde</Link></li>
            <li className="text-gray-500 text-xs pt-1">Saint-Émilion · Médoc · Arcachon</li>
            <li className="text-gray-500 text-xs">Entre-Deux-Mers · Blayais · 33</li>
          </ul>
        </div>

        {/* Société */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Société</h3>
          <ul className="space-y-2 text-sm mb-5">
            <li><Link to="/realisations" className="hover:text-enerzig-orange transition-colors">Nos réalisations</Link></li>
            <li><Link to="/a-propos" className="hover:text-enerzig-orange transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-enerzig-orange transition-colors">Contact & Devis gratuit</Link></li>
          </ul>
          <span className="inline-flex items-center gap-1.5 bg-green-900/40 text-green-400 text-xs px-2.5 py-1 rounded-full font-medium">
            <ShieldCheck className="w-3.5 h-3.5" /> RGE Certifié QualiPV
          </span>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Enerzig — SIRET : 948 607 841 — 15 Rue Paul Bert, 33500 Libourne</p>
          <p>Artisan RGE QualiPV — Gironde · Bordeaux · Nouvelle-Aquitaine</p>
        </div>
      </div>
    </footer>
  );
}
