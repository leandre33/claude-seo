import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand + NAP */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Zap className="w-5 h-5 text-emerald-400" />
              Enerzig
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Expert en électricité, photovoltaïque, climatisation et VMC à Libourne et dans toute la Gironde depuis 2023.
            </p>
            {/* NAP — crucial for local SEO */}
            <address className="not-italic text-sm space-y-2 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Libourne (33500), Gironde</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+33XXXXXXXXX" className="hover:text-white transition-colors">+33 X XX XX XX XX</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:contact@enerzig.com" className="hover:text-white transition-colors">contact@enerzig.com</a>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nos services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/electricite" className="hover:text-emerald-400 transition-colors">Électricité générale</Link></li>
              <li><Link to="/photovoltaique" className="hover:text-emerald-400 transition-colors">Panneaux photovoltaïques</Link></li>
              <li><Link to="/climatisation" className="hover:text-emerald-400 transition-colors">Climatisation réversible</Link></li>
              <li><Link to="/ventilation" className="hover:text-emerald-400 transition-colors">VMC – Ventilation</Link></li>
              <li><Link to="/gtb" className="hover:text-emerald-400 transition-colors">GTB – Automatisation</Link></li>
              <li><Link to="/aides-financieres" className="hover:text-emerald-400 transition-colors">Aides financières</Link></li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Zone d'intervention</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/electricien-libourne" className="hover:text-emerald-400 transition-colors">Électricien Libourne</Link></li>
              <li><Link to="/electricien-bordeaux" className="hover:text-emerald-400 transition-colors">Électricien Bordeaux</Link></li>
              <li><Link to="/panneaux-solaires-gironde" className="hover:text-emerald-400 transition-colors">Panneaux solaires Gironde</Link></li>
              <li><Link to="/panneaux-solaires-bordeaux" className="hover:text-emerald-400 transition-colors">Panneaux solaires Bordeaux</Link></li>
              <li><Link to="/climatisation-libourne" className="hover:text-emerald-400 transition-colors">Climatisation Libourne</Link></li>
              <li><Link to="/vmc-gironde" className="hover:text-emerald-400 transition-colors">VMC Gironde</Link></li>
            </ul>
          </div>

          {/* Société + réseaux */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Société</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link to="/a-propos" className="hover:text-emerald-400 transition-colors">À propos</Link></li>
              <li><Link to="/realisations" className="hover:text-emerald-400 transition-colors">Nos réalisations</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact & Devis</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-emerald-400 transition-colors">Mentions légales</Link></li>
            </ul>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/enerzig" target="_blank" rel="noopener noreferrer" aria-label="Facebook Enerzig"
                className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/enerzig" target="_blank" rel="noopener noreferrer" aria-label="Instagram Enerzig"
                className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/enerzig" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Enerzig"
                className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Enerzig – Tous droits réservés. SIRET : [X XX XXX XXX XXXXX]</p>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-900 text-emerald-400 text-xs px-2 py-0.5 rounded font-medium">RGE Certifié</span>
            <span className="bg-blue-900 text-blue-400 text-xs px-2 py-0.5 rounded font-medium">Qualifelec</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
