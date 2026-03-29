import { Link } from "react-router-dom";
import { Zap, Sun, Wind, Thermometer, CheckCircle, ArrowRight, MapPin, Star } from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": "https://enerzig.com/#organisation",
  "name": "Enerzig",
  "url": "https://enerzig.com",
  "description": "Électricien certifié à Libourne (33500). Électricité générale, panneaux solaires, climatisation réversible et VMC dans le Libournais et toute la Gironde.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Libourne",
    "postalCode": "33500",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "FR"
  },
  "areaServed": [
    "Libourne", "Libournais", "Saint-Émilion", "Pomerol", "Fronsac",
    "Coutras", "Castillon-la-Bataille", "Lussac", "Guîtres"
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://enerzig.com/" },
      { "@type": "ListItem", "position": 2, "name": "Électricien Libourne", "item": "https://enerzig.com/electricien-libourne" }
    ]
  }
};

const services = [
  { icon: <Zap className="w-6 h-6 text-emerald-600" />, title: "Électricité générale", desc: "Mise aux normes NFC 15-100, tableaux, prises, éclairage LED, domotique.", href: "/electricite" },
  { icon: <Sun className="w-6 h-6 text-yellow-500" />, title: "Panneaux photovoltaïques", desc: "Installation solaire en autoconsommation. Retour sur investissement 8–11 ans.", href: "/photovoltaique" },
  { icon: <Thermometer className="w-6 h-6 text-orange-500" />, title: "Climatisation réversible", desc: "Daikin, Mitsubishi, Atlantic — confort été comme hiver à Libourne.", href: "/climatisation" },
  { icon: <Wind className="w-6 h-6 text-blue-500" />, title: "VMC – Ventilation", desc: "VMC simple et double flux pour une maison saine et économe en Gironde.", href: "/ventilation" },
];

const communes = [
  "Libourne", "Saint-Émilion", "Pomerol", "Fronsac", "Coutras",
  "Castillon-la-Bataille", "Lussac", "Guîtres", "Lugon", "Moulon",
];

export default function ElectricienLibourne() {
  return (
    <>
      <SEO
        title="Électricien à Libourne (33500) | Enerzig – RGE Certifié"
        description="Enerzig, votre électricien certifié RGE à Libourne (33500). Électricité, panneaux solaires, climatisation, VMC. Intervention rapide. Devis gratuit."
        canonical="https://enerzig.com/electricien-libourne"
        schema={localSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-emerald-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" /> Libourne (33500) · Libournais
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Électricien à<br />
              <span className="text-emerald-400">Libourne</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Enerzig est votre <strong className="text-white">électricien certifié RGE à Libourne</strong> (33500)
              et dans tout le Libournais. Électricité générale, panneaux solaires, climatisation, VMC —
              un seul expert pour tous vos projets énergétiques.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["RGE Certifié", "Qualifelec", "Devis gratuit", "Intervention rapide"].map((b) => (
                <span key={b} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-yellow-400" /> {b}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center">
                Devis gratuit à Libourne
              </Link>
              <a href="tel:+33XXXXXXXXX" className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center">
                Appeler Enerzig
              </a>
            </div>
          </div>
          <div className="hidden lg:block bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="text-lg font-bold text-white mb-4">Intervention rapide à Libourne</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Dépannage électrique – intervention sous 24 h",
                "Mise aux normes – devis sous 48 h",
                "Installation solaire – planification sous 2 semaines",
                "VMC et climatisation – pose en 1 à 2 jours",
                "Déplacement gratuit dans le Libournais",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Nos services à Libourne et dans le Libournais
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.href} to={s.href}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
                <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Zone d'intervention autour de Libourne
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Basé à <strong>Libourne (33500)</strong>, Enerzig intervient dans toutes les communes du Libournais et au-delà.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {communes.map((c) => (
              <span key={c} className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                {c}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            Enerzig intervient également à{" "}
            <Link to="/electricien-bordeaux" className="text-emerald-600 hover:underline font-medium">Bordeaux</Link>{" "}
            et dans{" "}
            <Link to="/panneaux-solaires-gironde" className="text-emerald-600 hover:underline font-medium">toute la Gironde</Link>.
          </p>
        </div>
      </section>

      {/* Aides CTA */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Jusqu'à 20 000 € d'aides pour vos travaux à Libourne
            </h2>
            <p className="text-gray-600 text-sm">MaPrimeRénov', CEE, prime EDF OA — Enerzig monte votre dossier gratuitement.</p>
          </div>
          <Link to="/aides-financieres"
            className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
            Voir les aides →
          </Link>
        </div>
      </section>

      {/* Devis form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm title="Devis gratuit – Électricien Libourne" />
        </div>
      </section>
    </>
  );
}
