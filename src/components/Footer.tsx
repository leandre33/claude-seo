import { Link } from "react-router-dom";
import { Zap, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-enerzig-dark text-gray-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-enerzig-orange rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">Enerzig</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Expert en électricité, photovoltaïque et climatisation en
            Nouvelle-Aquitaine. Artisan qualifié RGE, à votre service depuis
            2016.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-lg hover:bg-enerzig-orange transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-lg hover:bg-enerzig-orange transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Accueil" },
              { href: "/services", label: "Nos services" },
              { href: "/realisations", label: "Réalisations" },
              { href: "/a-propos", label: "À propos" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-enerzig-orange transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-enerzig-orange mt-0.5 shrink-0" />
              <span>15 Rue Paul Bert, 33500 Libourne, France</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-enerzig-orange shrink-0" />
              <a href="tel:+33XXXXXXXXX" className="hover:text-enerzig-orange transition-colors">
                Nous appeler
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-enerzig-orange shrink-0" />
              <a href="mailto:contact@enerzig.com" className="hover:text-enerzig-orange transition-colors">
                contact@enerzig.com
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            SIRET : 948 607 841 — RGE QualiPV
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Enerzig. Tous droits réservés.</p>
          <p>Artisan RGE — Nouvelle-Aquitaine</p>
        </div>
      </div>
    </footer>
  );
}
