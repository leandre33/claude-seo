import { Link } from "react-router-dom";
import { Zap, Sun, Wind, Thermometer, Building2, ArrowRight, Star, MapPin, Phone, Shield, Award } from "lucide-react";
import SEO from "../components/SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": "https://enerzig.com/#organisation",
  "name": "Enerzig",
  "url": "https://enerzig.com",
  "logo": "https://enerzig.com/assets/logo.png",
  "description": "Enerzig, expert en électricité générale, panneaux photovoltaïques, climatisation, VMC et GTB à Libourne et dans toute la Gironde (Bordeaux, Nouvelle-Aquitaine).",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Libourne",
    "postalCode": "33500",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 44.9219, "longitude": -0.2419 },
  "areaServed": [
    { "@type": "City", "name": "Libourne" },
    { "@type": "City", "name": "Bordeaux" },
    { "@type": "AdministrativeArea", "name": "Gironde" },
    { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services énergétiques Gironde",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Électricité générale", "url": "https://enerzig.com/electricite" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation photovoltaïque", "url": "https://enerzig.com/photovoltaique" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Climatisation réversible", "url": "https://enerzig.com/climatisation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VMC – Ventilation", "url": "https://enerzig.com/ventilation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GTB – Gestion technique", "url": "https://enerzig.com/gtb" } }
    ]
  }
};

const services = [
  {
    icon: <Zap className="w-7 h-7 text-emerald-600" />,
    title: "Électricité générale",
    desc: "Mise aux normes NFC 15-100, tableaux, prises, éclairage, domotique pour particuliers et professionnels.",
    href: "/electricite",
    cta: "En savoir plus",
  },
  {
    icon: <Sun className="w-7 h-7 text-yellow-500" />,
    title: "Panneaux photovoltaïques",
    desc: "Installation solaire en autoconsommation à Libourne et dans toute la Gironde. Aides MaPrimeRénov' incluses.",
    href: "/photovoltaique",
    cta: "Découvrir",
    highlight: true,
  },
  {
    icon: <Thermometer className="w-7 h-7 text-orange-500" />,
    title: "Climatisation réversible",
    desc: "Confort en été comme en hiver. Systèmes Daikin, Mitsubishi, Atlantic — installation et entretien.",
    href: "/climatisation",
    cta: "En savoir plus",
  },
  {
    icon: <Wind className="w-7 h-7 text-blue-500" />,
    title: "VMC – Ventilation",
    desc: "VMC simple et double flux pour une qualité d'air optimale et des économies d'énergie en Gironde.",
    href: "/ventilation",
    cta: "En savoir plus",
  },
  {
    icon: <Building2 className="w-7 h-7 text-purple-500" />,
    title: "GTB – Automatisation",
    desc: "Pilotage intelligent de vos bâtiments tertiaires. Conformité décret tertiaire en Gironde.",
    href: "/gtb",
    cta: "En savoir plus",
  },
];

const stats = [
  { value: "2 050 h", label: "d'ensoleillement/an en Gironde" },
  { value: "8–11 ans", label: "de retour sur investissement solaire" },
  { value: "5 services", label: "couverts par un seul expert" },
  { value: "Gironde 33", label: "entier couvert" },
];

const zones = [
  "Libourne", "Bordeaux", "Bordeaux Métropole", "Libournais", "Saint-Émilion",
  "Médoc", "Bassin d'Arcachon", "Entre-Deux-Mers", "Blayais", "Haute-Gironde",
];

export default function Index() {
  return (
    <>
      <SEO
        title="Électricien RGE à Libourne & Gironde | Enerzig"
        description="Enerzig, expert en électricité, panneaux solaires, climatisation et VMC à Libourne (33) et en Gironde. Certifié RGE. Devis gratuit – Intervention rapide."
        canonical="https://enerzig.com/"
        schema={localBusinessSchema}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Libourne (33) · Gironde · Bordeaux</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Votre expert énergie<br />
              <span className="text-emerald-400">en Gironde</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Électricité générale, panneaux solaires, climatisation, VMC et GTB —
              Enerzig intervient à Libourne et dans tout le département de la Gironde (33).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center text-lg"
              >
                Devis gratuit en 48 h
              </Link>
              <a
                href="tel:+33XXXXXXXXX"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Appeler maintenant
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Certifié RGE</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-sm">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Qualifelec</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Devis gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-emerald-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-emerald-100 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos services à Libourne et en Gironde
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Un seul interlocuteur pour tous vos besoins énergétiques. Enerzig couvre l'ensemble du département de la Gironde (33).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className={`group block rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  s.highlight
                    ? "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-200"
                    : "bg-white shadow-sm border border-gray-100"
                }`}
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${s.highlight ? "text-white" : "text-gray-900"}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${s.highlight ? "text-emerald-100" : "text-gray-600"}`}>
                  {s.desc}
                </p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${
                  s.highlight ? "text-white" : "text-emerald-600"
                } group-hover:gap-2 transition-all`}>
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AIDE FINANCIÈRES CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Jusqu'à <span className="text-emerald-600">20 000 €</span> d'aides financières
              </h2>
              <p className="text-gray-600 max-w-xl">
                MaPrimeRénov', CEE, prime EDF OA, TVA à 10 %, prime Bordeaux Métropole (1 000 €) —
                Enerzig monte votre dossier d'aides gratuitement.
              </p>
            </div>
            <Link
              to="/aides-financieres"
              className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
            >
              Voir toutes les aides →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ZONE D'INTERVENTION ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zone d'intervention en Gironde</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Basé à <strong>Libourne (33500)</strong>, Enerzig intervient dans tout le département de la Gironde.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {zones.map((z) => (
              <span key={z} className="bg-white border border-emerald-100 text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm">
                {z}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/electricien-libourne" className="text-emerald-600 font-semibold hover:underline">Électricien Libourne →</Link>
            <Link to="/electricien-bordeaux" className="text-emerald-600 font-semibold hover:underline">Électricien Bordeaux →</Link>
            <Link to="/panneaux-solaires-gironde" className="text-emerald-600 font-semibold hover:underline">Panneaux solaires Gironde →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA DEVIS ── */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Votre projet en Gironde, c'est maintenant</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Devis gratuit, déplacement offert, réponse sous 48 h. Certifié RGE pour vos aides de l'État.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            Demander mon devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
