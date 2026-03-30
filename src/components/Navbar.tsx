import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "Tous nos services" },
  { href: "/services#electricite", label: "Électricité générale" },
  { href: "/services#photovoltaique", label: "Panneaux photovoltaïques" },
  { href: "/services#climatisation", label: "Climatisation réversible" },
  { href: "/services#vmc", label: "VMC – Ventilation" },
];

const localLinks = [
  { href: "/electricien-libourne", label: "Électricien Libourne" },
  { href: "/electricien-bordeaux", label: "Électricien Bordeaux" },
  { href: "/panneaux-solaires-gironde", label: "Panneaux solaires Gironde" },
];

const mainLinks = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/aides-financieres", label: "Aides financières" },
  { href: "/a-propos", label: "À propos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-enerzig-dark">
          <div className="w-8 h-8 bg-enerzig-orange rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span>Enerzig</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">

          {/* Services dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-enerzig-orange hover:bg-orange-50 transition-colors ${isActive("/services") ? "text-enerzig-orange" : "text-gray-600"}`}>
              Services <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl border border-gray-100 min-w-[220px] py-2 z-50">
              {serviceLinks.map((l) => (
                <Link key={l.href} to={l.href}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-enerzig-orange transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Zone dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-enerzig-orange hover:bg-orange-50 transition-colors text-gray-600">
              Zone <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl border border-gray-100 min-w-[230px] py-2 z-50">
              {localLinks.map((l) => (
                <Link key={l.href} to={l.href}
                  className={`block px-4 py-2.5 text-sm hover:bg-orange-50 hover:text-enerzig-orange transition-colors ${isActive(l.href) ? "text-enerzig-orange font-semibold" : "text-gray-700"}`}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {mainLinks.map((l) => (
            <Link key={l.href} to={l.href}
              className={`px-3 py-2 rounded-lg hover:text-enerzig-orange hover:bg-orange-50 transition-colors ${isActive(l.href) ? "text-enerzig-orange" : "text-gray-600"}`}>
              {l.label}
            </Link>
          ))}

          <Link to="/contact" className="ml-2 px-4 py-2 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Devis gratuit
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-gray-600 hover:text-enerzig-orange" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          <button onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full text-sm font-medium py-2 text-gray-700 hover:text-enerzig-orange">
            Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && serviceLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}
              className="pl-4 py-2 text-sm text-gray-600 hover:text-enerzig-orange">
              {l.label}
            </Link>
          ))}

          <button onClick={() => setLocalOpen(!localOpen)}
            className="flex items-center justify-between w-full text-sm font-medium py-2 text-gray-700 hover:text-enerzig-orange">
            Zone d'intervention <ChevronDown className={`w-4 h-4 transition-transform ${localOpen ? "rotate-180" : ""}`} />
          </button>
          {localOpen && localLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}
              className="pl-4 py-2 text-sm text-gray-600 hover:text-enerzig-orange">
              {l.label}
            </Link>
          ))}

          {mainLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-gray-700 hover:text-enerzig-orange">
              {l.label}
            </Link>
          ))}

          <Link to="/contact" onClick={() => setOpen(false)}
            className="mt-3 px-4 py-2.5 bg-enerzig-orange text-white font-semibold rounded-lg text-center hover:bg-orange-600 transition-colors text-sm">
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
