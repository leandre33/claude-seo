import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const services = [
  { label: "Électricité générale", href: "/electricite" },
  { label: "Panneaux photovoltaïques", href: "/photovoltaique" },
  { label: "Climatisation", href: "/climatisation" },
  { label: "VMC – Ventilation", href: "/ventilation" },
  { label: "GTB – Automatisation", href: "/gtb" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600">
            <Zap className="w-6 h-6 fill-emerald-500 text-emerald-600" />
            <span>Enerzig</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <div className="relative group">
              <button className="hover:text-emerald-600 transition-colors py-2">
                Nos services ▾
              </button>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-xl border border-gray-100 min-w-[240px] py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="px-4 py-2.5 hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/aides-financieres"
              className={`hover:text-emerald-600 transition-colors ${pathname === "/aides-financieres" ? "text-emerald-600" : ""}`}
            >
              Aides financières
            </Link>
            <Link
              to="/realisations"
              className={`hover:text-emerald-600 transition-colors ${pathname === "/realisations" ? "text-emerald-600" : ""}`}
            >
              Réalisations
            </Link>
            <Link
              to="/faq"
              className={`hover:text-emerald-600 transition-colors ${pathname === "/faq" ? "text-emerald-600" : ""}`}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-2 text-sm font-medium">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="py-2 hover:text-emerald-600"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <Link to="/aides-financieres" className="py-2 hover:text-emerald-600" onClick={() => setOpen(false)}>Aides financières</Link>
          <Link to="/realisations" className="py-2 hover:text-emerald-600" onClick={() => setOpen(false)}>Réalisations</Link>
          <Link to="/faq" className="py-2 hover:text-emerald-600" onClick={() => setOpen(false)}>FAQ</Link>
          <Link
            to="/contact"
            className="mt-2 bg-emerald-600 text-white text-center py-2.5 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
