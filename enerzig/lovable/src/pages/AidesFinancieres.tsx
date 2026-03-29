import { Link } from "react-router-dom";
import { Euro, CheckCircle, ArrowRight, Info } from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "MaPrimeRénov' est-elle accessible en Gironde ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, MaPrimeRénov' est accessible partout en France, y compris en Gironde. Elle couvre les panneaux solaires (jusqu'à 4 000 €), la VMC double flux (jusqu'à 5 000 €) et la climatisation réversible (jusqu'à 5 000 €). Les travaux doivent être réalisés par un professionnel certifié RGE comme Enerzig."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la prime Bordeaux Métropole pour le solaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bordeaux Métropole offre une prime de 1 000 € pour les installations photovoltaïques en autoconsommation dans les 28 communes de la métropole. Cette prime est cumulable avec MaPrimeRénov', les CEE et la prime EDF OA."
      }
    },
    {
      "@type": "Question",
      "name": "Les CEE s'appliquent-ils en Gironde ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, les Certificats d'Économies d'Énergie (CEE) s'appliquent partout en France. Chez Enerzig, ils sont déduits directement de votre facture pour la VMC double flux (300–800 €), la climatisation (500–1 500 €) et d'autres travaux d'économies d'énergie en Gironde."
      }
    }
  ]
};

const aides = [
  {
    title: "MaPrimeRénov'",
    subtitle: "Aide de l'État",
    description: "Le dispositif principal pour financer vos travaux de rénovation énergétique. Montant selon vos revenus et le type de travaux.",
    items: [
      "Panneaux photovoltaïques : jusqu'à 4 000 €",
      "VMC double flux : jusqu'à 5 000 €",
      "Climatisation / PAC : jusqu'à 5 000 €",
      "Rénovation globale : jusqu'à 20 000 €",
    ],
    condition: "Travaux réalisés par un professionnel certifié RGE (Enerzig est qualifié)",
    color: "emerald",
    link: "https://www.maprimerenov.gouv.fr",
    linkLabel: "maprimerenov.gouv.fr",
  },
  {
    title: "Certificats d'Économies d'Énergie (CEE)",
    subtitle: "Prime énergie",
    description: "Primes versées par les fournisseurs d'énergie, déduites directement de votre facture Enerzig. Cumulable avec MaPrimeRénov'.",
    items: [
      "VMC double flux : 300 à 800 €",
      "Climatisation / PAC : 500 à 1 500 €",
      "Isolation + solaire combinés : variable",
    ],
    condition: "Automatiquement intégré dans vos devis Enerzig",
    color: "blue",
  },
  {
    title: "Prime à l'autoconsommation EDF OA",
    subtitle: "Pour le photovoltaïque",
    description: "Prime versée par EDF pour les installations solaires en autoconsommation avec revente du surplus.",
    items: [
      "≤ 3 kWc : 370 €/kWc (soit 1 110 € pour 3 kWc)",
      "3 à 9 kWc : 280 €/kWc",
      "9 à 36 kWc : 160 €/kWc",
    ],
    condition: "Versée à la mise en service de l'installation",
    color: "yellow",
  },
  {
    title: "Prime Bordeaux Métropole",
    subtitle: "Pour les 28 communes de la métropole",
    description: "Prime locale pour encourager l'autoconsommation solaire dans les communes de Bordeaux Métropole.",
    items: [
      "1 000 € pour toute installation en autoconsommation",
      "Cumulable avec toutes les autres aides",
      "Bordeaux, Mérignac, Pessac, Talence, Bègles, Le Bouscat…",
    ],
    condition: "Vérifiez l'éligibilité de votre commune auprès de Bordeaux Métropole",
    color: "purple",
  },
  {
    title: "TVA réduite à 10 %",
    subtitle: "Sur tous vos travaux",
    description: "TVA à 10 % au lieu de 20 % pour les logements de plus de 2 ans. Appliquée automatiquement sur vos devis Enerzig.",
    items: [
      "Économie de ~800 € sur une installation 9 000 €",
      "Applicable à l'électricité, solaire, VMC, climatisation",
      "Valable pour maisons et appartements en Gironde",
    ],
    condition: "Logement de plus de 2 ans — applicable automatiquement",
    color: "orange",
  },
  {
    title: "Exonération taxe foncière",
    subtitle: "Selon votre commune en Gironde",
    description: "Certaines communes girondines exonèrent de taxe foncière pendant 2 ans après des travaux d'économies d'énergie.",
    items: [
      "2 ans d'exonération dans les communes participantes",
      "Renseignez-vous auprès de votre mairie",
      "Cumulable avec les autres aides",
    ],
    condition: "Variable selon les communes de Gironde — contactez votre mairie",
    color: "gray",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  yellow: "bg-yellow-50 border-yellow-200 text-yellow-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  gray: "bg-gray-50 border-gray-200 text-gray-700",
};

export default function AidesFinancieres() {
  return (
    <>
      <SEO
        title="Aides Financières Énergie Gironde 2025 | Enerzig"
        description="Toutes les aides pour vos travaux d'énergie en Gironde : MaPrimeRénov', CEE, prime Bordeaux Métropole 1 000 €, TVA 10 %. Enerzig monte votre dossier gratuitement."
        canonical="https://enerzig.com/aides-financieres"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-emerald-300 mb-6">
            <Euro className="w-4 h-4" /> Mis à jour 2025 – Gironde (33)
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Aides Financières pour vos<br />
            <span className="text-emerald-400">Travaux d'Énergie en Gironde</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Jusqu'à <strong className="text-white">20 000 €</strong> d'aides cumulables pour
            vos panneaux solaires, climatisation et VMC en Gironde.
            Enerzig monte votre dossier gratuitement.
          </p>
        </div>
      </section>

      {/* Simulation rapide */}
      <section className="py-12 bg-emerald-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold mb-8">Simulation : installation 3 kWc à Libourne</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { label: "Coût brut", value: "9 000 €", sub: "" },
              { label: "TVA 10 %", value: "− 818 €", sub: "économie" },
              { label: "Prime EDF OA", value: "− 1 110 €", sub: "370 €/kWc" },
              { label: "MaPrimeRénov'", value: "− 2 000 €", sub: "revenus interméd." },
              { label: "Primes CEE", value: "− 300 €", sub: "Enerzig déduit" },
              { label: "Reste à charge", value: "≈ 4 772 €", sub: "estimé", highlight: true },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-4 ${item.highlight ? "bg-white text-emerald-700" : "bg-emerald-700"}`}>
                <div className={`text-xl font-extrabold ${item.highlight ? "text-emerald-700" : "text-white"}`}>{item.value}</div>
                <div className={`text-xs mt-1 ${item.highlight ? "text-emerald-600 font-semibold" : "text-emerald-200"}`}>{item.label}</div>
                {item.sub && <div className={`text-xs ${item.highlight ? "text-emerald-500" : "text-emerald-300"}`}>{item.sub}</div>}
              </div>
            ))}
          </div>
          <p className="text-center text-emerald-200 text-xs mt-4">
            * Estimation indicative. Montants réels variables selon revenus et commune.
          </p>
        </div>
      </section>

      {/* Liste des aides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Détail de toutes les aides disponibles en Gironde (2025)
          </h2>
          <div className="space-y-6">
            {aides.map((aide) => (
              <div key={aide.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{aide.title}</h3>
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border mt-1 ${colorMap[aide.color]}`}>
                        {aide.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{aide.description}</p>
                  <ul className="space-y-2 mb-4">
                    {aide.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{aide.condition}</span>
                  </div>
                  {aide.link && (
                    <a href={aide.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-emerald-600 hover:underline text-sm font-medium">
                      {aide.linkLabel} <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Questions fréquentes sur les aides en Gironde</h2>
          <div className="space-y-4">
            {(faqSchema.mainEntity as any[]).map((q: any) => (
              <details key={q.name} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  <span>{q.name}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {q.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm title="Simulez vos aides gratuitement" />
        </div>
      </section>
    </>
  );
}
