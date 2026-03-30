import { Link } from "react-router-dom";
import { Euro, CheckCircle2, ArrowRight, Info, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "MaPrimeRénov' est-elle accessible en Gironde ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, MaPrimeRénov' est accessible partout en France y compris en Gironde. Elle couvre les panneaux solaires (jusqu'à 4 000 €), la VMC double flux (jusqu'à 5 000 €) et la climatisation réversible (jusqu'à 5 000 €). Les travaux doivent être réalisés par un professionnel certifié RGE comme Enerzig."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la prime Bordeaux Métropole pour les panneaux solaires ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bordeaux Métropole offre une prime de 1 000 € pour les installations photovoltaïques en autoconsommation sur son territoire (28 communes dont Bordeaux, Mérignac, Pessac, Talence, Bègles). Cette prime est cumulable avec MaPrimeRénov', les CEE et la prime EDF OA. Enerzig vous aide à monter votre dossier."
      }
    },
    {
      "@type": "Question",
      "name": "Les primes CEE s'appliquent-elles en Gironde ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, les Certificats d'Économies d'Énergie (CEE) s'appliquent partout en France. Chez Enerzig, ils sont déduits directement de votre facture pour la VMC double flux (300–800 €), la climatisation (500–1 500 €) et les panneaux solaires. Cumulable avec toutes les autres aides."
      }
    }
  ]
};

const aides = [
  {
    title: "MaPrimeRénov'",
    badge: "Aide de l'État",
    badgeColor: "bg-green-100 text-green-700",
    desc: "Le dispositif principal pour financer vos travaux de rénovation énergétique. Montant selon vos revenus et le type de travaux.",
    items: [
      "Panneaux photovoltaïques : jusqu'à 4 000 €",
      "VMC double flux : jusqu'à 5 000 €",
      "Climatisation / PAC air-air : jusqu'à 5 000 €",
      "Rénovation globale multi-travaux : jusqu'à 20 000 €",
    ],
    note: "Travaux réalisés par un professionnel certifié RGE (Enerzig est qualifié). Demande sur maprimerenov.gouv.fr",
    link: "https://www.maprimerenov.gouv.fr",
  },
  {
    title: "Certificats d'Économies d'Énergie (CEE)",
    badge: "Prime énergie",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Primes versées par les fournisseurs d'énergie, déduites directement de votre facture Enerzig. Cumulable avec MaPrimeRénov'.",
    items: [
      "VMC double flux : 300 à 800 €",
      "Climatisation / PAC air-air : 500 à 1 500 €",
      "Combinaison isolation + solaire : variable",
    ],
    note: "Intégré automatiquement dans vos devis Enerzig — aucune démarche de votre part.",
  },
  {
    title: "Prime à l'autoconsommation EDF OA",
    badge: "Pour le photovoltaïque",
    badgeColor: "bg-yellow-100 text-yellow-700",
    desc: "Prime versée par EDF pour les installations solaires en autoconsommation avec revente du surplus.",
    items: [
      "≤ 3 kWc : 370 €/kWc → 1 110 € pour une installation de 3 kWc",
      "3 à 9 kWc : 280 €/kWc",
      "9 à 36 kWc : 160 €/kWc",
    ],
    note: "Versée à la mise en service de l'installation par Enerzig.",
  },
  {
    title: "Prime Bordeaux Métropole",
    badge: "28 communes",
    badgeColor: "bg-purple-100 text-purple-700",
    desc: "Prime locale pour encourager l'autoconsommation solaire dans les communes de Bordeaux Métropole.",
    items: [
      "1 000 € pour toute installation photovoltaïque en autoconsommation",
      "Cumulable avec toutes les autres aides nationales",
      "Bordeaux, Mérignac, Pessac, Talence, Bègles, Le Bouscat, Bruges…",
    ],
    note: "Vérifiez l'éligibilité de votre commune. Enerzig vous aide à constituer votre dossier.",
  },
  {
    title: "TVA réduite à 10 %",
    badge: "Sur tous les travaux",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "TVA à 10 % au lieu de 20 % pour les logements de plus de 2 ans. Appliquée automatiquement sur vos devis Enerzig.",
    items: [
      "Économie d'environ 800 € sur une installation de 9 000 €",
      "Applicable à l'électricité, solaire, VMC, climatisation",
      "Valable pour maisons et appartements en Gironde",
    ],
    note: "Applicable automatiquement — aucune démarche nécessaire.",
  },
  {
    title: "Exonération taxe foncière",
    badge: "Selon commune",
    badgeColor: "bg-gray-100 text-gray-600",
    desc: "Certaines communes girondines exonèrent de taxe foncière pendant 2 ans après des travaux d'économies d'énergie.",
    items: [
      "2 ans d'exonération dans les communes participantes",
      "Cumulable avec les autres aides",
      "Renseignez-vous auprès de votre mairie en Gironde",
    ],
    note: "Variable selon les communes — contactez votre mairie pour vérifier.",
  },
];

export default function AidesFinancieres() {
  return (
    <div>
      <SEO
        title="Aides Financières Énergie Gironde 2025 | Enerzig"
        description="Toutes les aides pour vos travaux d'énergie en Gironde : MaPrimeRénov', CEE, prime Bordeaux Métropole 1 000 €, TVA 10 %. Enerzig monte votre dossier gratuitement."
        canonical="https://enerzig.com/aides-financieres"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-enerzig-dark via-slate-800 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-enerzig-orange/20 border border-enerzig-orange/30 rounded-full px-4 py-1.5 text-sm text-enerzig-orange font-medium mb-6">
              <Euro className="w-4 h-4" /> Mis à jour 2025 – Gironde (33)
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Aides Financières pour vos<br />
              <span className="text-enerzig-orange">Travaux d'Énergie en Gironde</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Jusqu'à <strong className="text-white">20 000 €</strong> d'aides cumulables pour
              vos panneaux solaires, climatisation et VMC.
              Enerzig monte votre dossier gratuitement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Simulation */}
      <section className="py-12 bg-enerzig-orange text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold">Simulation – installation 3 kWc à Libourne (exemple)</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto text-center">
            {[
              { label: "Coût brut", value: "9 000 €", highlight: false },
              { label: "TVA 10 %", value: "−818 €", highlight: false },
              { label: "Prime EDF OA", value: "−1 110 €", highlight: false },
              { label: "MaPrimeRénov'", value: "−2 000 €", highlight: false },
              { label: "Primes CEE", value: "−300 €", highlight: false },
              { label: "Reste à charge", value: "≈ 4 772 €", highlight: true },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-4 ${item.highlight ? "bg-white text-enerzig-orange" : "bg-orange-700"}`}>
                <div className={`text-xl font-extrabold ${item.highlight ? "text-enerzig-orange" : "text-white"}`}>{item.value}</div>
                <div className={`text-xs mt-1 ${item.highlight ? "text-orange-600 font-semibold" : "text-orange-200"}`}>{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-orange-200 text-xs mt-4">* Estimation indicative. Montants réels variables selon revenus et commune.</p>
        </div>
      </section>

      {/* Liste des aides */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-enerzig-dark">Détail de toutes les aides disponibles en Gironde</h2>
          </AnimatedSection>
          <div className="space-y-5">
            {aides.map((aide, i) => (
              <AnimatedSection key={aide.title} animation="fade-up" delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h3 className="text-lg font-bold text-enerzig-dark">{aide.title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${aide.badgeColor}`}>{aide.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{aide.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {aide.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-enerzig-green shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{aide.note}</span>
                  </div>
                  {aide.link && (
                    <a href={aide.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-enerzig-orange hover:underline text-sm font-medium">
                      {aide.link} <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-enerzig-dark">Questions fréquentes sur les aides en Gironde</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {(faqSchema.mainEntity as any[]).map((q: any) => (
              <AnimatedSection key={q.name} animation="fade-up">
                <details className="border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-enerzig-dark hover:bg-gray-50 list-none text-sm">
                    <span>{q.name}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-2" />
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {q.acceptedAnswer.text}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-enerzig-orange text-white text-center">
        <AnimatedSection className="container mx-auto px-4">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Simulez vos aides gratuitement</h2>
          <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">
            Enerzig calcule précisément vos aides et monte votre dossier MaPrimeRénov' gratuitement à Bordeaux, Libourne et dans toute la Gironde.
          </p>
          <Link to="/contact" className="px-8 py-3 bg-white text-enerzig-orange font-bold rounded-xl hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
            Obtenir ma simulation gratuite <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
