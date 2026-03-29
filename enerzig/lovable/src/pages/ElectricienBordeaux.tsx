import { Link } from "react-router-dom";
import { Zap, Sun, Wind, Thermometer, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": "https://enerzig.com/#organisation",
  "name": "Enerzig",
  "url": "https://enerzig.com",
  "description": "Enerzig, électricien certifié intervenant à Bordeaux et en Gironde. Électricité générale, photovoltaïque, climatisation réversible, VMC et GTB.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Libourne",
    "postalCode": "33500",
    "addressCountry": "FR"
  },
  "areaServed": [
    "Bordeaux", "Bordeaux Métropole", "Mérignac", "Pessac", "Talence",
    "Villenave-d'Ornon", "Bègles", "Gradignan", "Le Bouscat", "Gironde"
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://enerzig.com/" },
      { "@type": "ListItem", "position": 2, "name": "Électricien Bordeaux", "item": "https://enerzig.com/electricien-bordeaux" }
    ]
  }
};

const communesBordeaux = [
  "Bordeaux", "Mérignac", "Pessac", "Talence", "Bègles",
  "Gradignan", "Le Bouscat", "Bruges", "Eysines", "Blanquefort",
  "Lormont", "Cenon", "Floirac", "Bassens", "Carbon-Blanc",
];

export default function ElectricienBordeaux() {
  return (
    <>
      <SEO
        title="Électricien à Bordeaux et Gironde (33) | Enerzig"
        description="Enerzig intervient à Bordeaux et en Gironde. Électricité, panneaux solaires, climatisation, VMC. Certifié RGE. Devis gratuit. Prime Bordeaux Métropole 1 000 €."
        canonical="https://enerzig.com/electricien-bordeaux"
        schema={localSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" /> Bordeaux · Bordeaux Métropole · Gironde (33)
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
            Électricien à <span className="text-blue-400">Bordeaux</span> et en Gironde
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Enerzig, basé à Libourne, intervient à Bordeaux et dans toute la Bordeaux Métropole.
            Électricité, panneaux solaires, climatisation, VMC — expert certifié RGE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center">
              Devis gratuit à Bordeaux
            </Link>
            <Link to="/aides-financieres" className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors text-center">
              Prime Bordeaux Métropole 1 000 €
            </Link>
          </div>
        </div>
      </section>

      {/* Spécificité Bordeaux */}
      <section className="py-14 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Bordeaux Métropole : avantages exclusifs
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-extrabold text-blue-600 mb-2">2 100 h</div>
              <div className="text-sm text-gray-600">de soleil/an à Bordeaux<br />Parmi les meilleures villes de France pour le solaire</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-extrabold text-emerald-600 mb-2">1 000 €</div>
              <div className="text-sm text-gray-600">Prime Bordeaux Métropole<br />pour les installations solaires en autoconsommation</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
              <div className="text-3xl font-extrabold text-orange-500 mb-2">8 ans</div>
              <div className="text-sm text-gray-600">Retour sur investissement solaire<br />L'un des plus rapides de France</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services à Bordeaux */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Nos services à Bordeaux et en Gironde
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-emerald-600" />,
                title: "Électricité générale à Bordeaux",
                desc: "Mise aux normes NFC 15-100, tableaux électriques, câblage, éclairage, domotique KNX pour maisons, appartements et locaux professionnels à Bordeaux.",
                href: "/electricite",
              },
              {
                icon: <Sun className="w-6 h-6 text-yellow-500" />,
                title: "Panneaux solaires à Bordeaux",
                desc: "Bordeaux = 2 100 h/an d'ensoleillement. Rentabilité en 8 ans. Prime Bordeaux Métropole 1 000 € cumulable avec MaPrimeRénov'.",
                href: "/photovoltaique",
              },
              {
                icon: <Thermometer className="w-6 h-6 text-orange-500" />,
                title: "Climatisation réversible à Bordeaux",
                desc: "Les étés bordelais nécessitent la climatisation. Enerzig installe Daikin, Mitsubishi, Atlantic dans toute la Bordeaux Métropole.",
                href: "/climatisation",
              },
              {
                icon: <Wind className="w-6 h-6 text-blue-500" />,
                title: "VMC à Bordeaux",
                desc: "VMC double flux à récupération de chaleur — obligatoire en construction neuve, fortement recommandée en rénovation à Bordeaux.",
                href: "/ventilation",
              },
            ].map((s) => (
              <Link key={s.href} to={s.href}
                className="group flex gap-4 bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{s.desc}</p>
                  <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Bordeaux Métropole */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Communes couvertes dans la Bordeaux Métropole
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {communesBordeaux.map((c) => (
              <span key={c} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm">
                {c}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            Et au-delà : Médoc, Bassin d'Arcachon, Entre-Deux-Mers, Blayais.{" "}
            <Link to="/electricien-libourne" className="text-emerald-600 hover:underline font-medium">
              Voir aussi notre secteur Libourne →
            </Link>
          </p>
        </div>
      </section>

      {/* Pourquoi Enerzig à Bordeaux */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Pourquoi choisir Enerzig comme électricien à Bordeaux ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Certifié RGE — éligibilité à MaPrimeRénov' et CEE",
              "Expert multi-services : électricité + solaire + VMC + clim",
              "Devis gratuit sous 48 h à Bordeaux",
              "Connaissance du bâti girondin et des maisons bordelaises",
              "Montage de dossier d'aides inclus",
              "Garantie décennale sur tous les travaux",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm title="Devis gratuit – Électricien Bordeaux" />
        </div>
      </section>
    </>
  );
}
