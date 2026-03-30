import { Link } from "react-router-dom";
import { Sun, CheckCircle2, ArrowRight, MapPin, Euro } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Installation panneaux photovoltaïques",
    "name": "Installation panneaux solaires en Gironde",
    "provider": { "@type": "ElectricalContractor", "name": "Enerzig", "url": "https://enerzig.com" },
    "areaServed": ["Gironde", "Bordeaux", "Libourne", "Médoc", "Bassin d'Arcachon", "Entre-Deux-Mers"],
    "url": "https://enerzig.com/panneaux-solaires-gironde"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte l'installation de panneaux solaires en Gironde en 2025 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Gironde, une installation de 3 kWc coûte entre 8 000 € et 10 000 € avant aides. Après MaPrimeRénov', CEE, prime EDF OA et prime Bordeaux Métropole (1 000 €), le reste à charge est généralement estimé à 4 500–5 500 €. Enerzig établit une simulation personnalisée gratuite."
        }
      },
      {
        "@type": "Question",
        "name": "La Gironde est-elle une bonne région pour le solaire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. La Gironde bénéficie de 2 050 à 2 150 heures d'ensoleillement annuel, contre une moyenne nationale de 1 950 h. C'est l'une des régions où les installations photovoltaïques sont les plus rentables de France — retour sur investissement en 8 à 11 ans."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle puissance photovoltaïque choisir pour ma maison en Gironde ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3 kWc pour une maison de 80–100 m², 4,5 kWc pour 100–150 m², 6 kWc pour 150–200 m². Enerzig réalise une étude personnalisée gratuite basée sur votre consommation et l'orientation de votre toiture en Gironde."
        }
      }
    ]
  }
];

const zones = [
  { name: "Bordeaux Métropole", detail: "Bordeaux, Mérignac, Pessac, Talence, Bègles, Gradignan" },
  { name: "Libournais", detail: "Libourne, Saint-Émilion, Pomerol, Fronsac, Coutras, Castillon" },
  { name: "Médoc", detail: "Pauillac, Margaux, Lesparre-Médoc, Hourtin, Soulac-sur-Mer" },
  { name: "Bassin d'Arcachon", detail: "Arcachon, La Teste-de-Buch, Gujan-Mestras, Andernos" },
  { name: "Entre-Deux-Mers", detail: "Langon, La Réole, Cadillac, Créon" },
  { name: "Blayais / Haute-Gironde", detail: "Blaye, Saint-André-de-Cubzac, Bourg-sur-Gironde" },
];

const aides = [
  { label: "MaPrimeRénov'", value: "jusqu'à 4 000 €" },
  { label: "Prime EDF OA (3 kWc)", value: "1 110 €" },
  { label: "Primes CEE", value: "variable" },
  { label: "Prime Bordeaux Métropole", value: "1 000 €" },
  { label: "TVA réduite à 10 %", value: "≈ 800 € écon." },
];

export default function PanneauxSolairesGironde() {
  return (
    <div>
      <SEO
        title="Panneaux Solaires Gironde (33) – Installateur RGE | Enerzig"
        description="Installation de panneaux photovoltaïques dans toute la Gironde (33). Enerzig, installateur RGE certifié à Libourne. 2 050 h/an. Aides MaPrimeRénov'. Devis gratuit."
        canonical="https://enerzig.com/panneaux-solaires-gironde"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-enerzig-dark via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 text-enerzig-orange text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" /> Gironde (33) – Département entier couvert
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Panneaux Solaires<br />
              en <span className="text-enerzig-orange">Gironde</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              <strong className="text-white">2 050 à 2 150 heures de soleil par an</strong> — la Gironde est
              l'un des meilleurs départements de France pour l'énergie solaire.
              Enerzig installe vos panneaux photovoltaïques de Bordeaux au Médoc.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { value: "2 150 h", label: "Soleil/an" },
                { value: "8–11 ans", label: "Rentabilité" },
                { value: "–70 %", label: "Sur facture" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-enerzig-orange">{s.value}</div>
                  <div className="text-xs text-gray-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="px-6 py-3 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2">
              Devis gratuit en Gironde <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          {/* Simulation aides */}
          <AnimatedSection animation="fade-left" delay={150}>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="font-bold text-enerzig-dark text-lg mb-4 flex items-center gap-2">
                <Euro className="w-5 h-5 text-enerzig-orange" />
                Aides disponibles 2025 – 3 kWc en Gironde
              </h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                  <span className="text-gray-500">Coût installation</span>
                  <span className="font-semibold text-gray-700">9 000 €</span>
                </div>
                {aides.map((a) => (
                  <div key={a.label} className="flex justify-between text-sm py-2 border-b border-gray-100">
                    <span className="text-gray-500">{a.label}</span>
                    <span className="font-semibold text-enerzig-green">− {a.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center bg-orange-50 rounded-xl px-3 py-3 mt-2">
                  <span className="font-bold text-enerzig-dark text-sm">Reste à charge estimé</span>
                  <span className="font-extrabold text-enerzig-orange text-lg">≈ 3 800 €</span>
                </div>
              </div>
              <p className="text-xs text-gray-400">*Estimation indicative. Simulation personnalisée gratuite.</p>
              <Link to="/aides-financieres" className="mt-4 block text-center text-sm text-enerzig-orange font-semibold hover:underline">
                Voir le détail de toutes les aides →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-enerzig-dark mb-3">
              Installations photovoltaïques dans toute la Gironde
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Enerzig couvre l'intégralité du département 33 — de Bordeaux au Médoc, du Bassin d'Arcachon à l'Entre-Deux-Mers.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z, i) => (
              <AnimatedSection key={z.name} animation="fade-up" delay={i * 80}>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-4 h-4 text-enerzig-orange" />
                    <h3 className="font-bold text-enerzig-dark">{z.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{z.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-enerzig-dark">Pourquoi choisir Enerzig pour le solaire en Gironde ?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "RGE certifié — indispensable pour MaPrimeRénov' et CEE",
              "Connaissance de l'ensoleillement et du bâti girondin",
              "Simulation d'aides personnalisée et gratuite",
              "Montage complet du dossier de subvention inclus",
              "Garantie décennale sur l'installation",
              "Panneaux avec garantie fabricant 25 ans",
              "Équipe locale basée à Libourne (33500)",
              "Suivi de production après installation",
            ].map((item, i) => (
              <AnimatedSection key={item} animation="fade-up" delay={i * 60}>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-enerzig-green mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-enerzig-dark">FAQ – Panneaux solaires Gironde</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {(schema[1] as any).mainEntity.map((q: any) => (
              <AnimatedSection key={q.name} animation="fade-up">
                <details className="border border-gray-200 rounded-xl overflow-hidden group bg-white">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-enerzig-dark hover:bg-orange-50 list-none text-sm">
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

      {/* Liens internes */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center gap-6 text-center text-sm">
          <Link to="/electricien-libourne" className="text-enerzig-orange font-semibold hover:underline">Électricien Libourne →</Link>
          <Link to="/electricien-bordeaux" className="text-enerzig-orange font-semibold hover:underline">Électricien Bordeaux →</Link>
          <Link to="/aides-financieres" className="text-enerzig-orange font-semibold hover:underline">Toutes les aides financières →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-enerzig-orange text-white text-center">
        <AnimatedSection className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Votre projet solaire en Gironde</h2>
          <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">Devis gratuit, simulation d'aides offerte, déplacement dans toute la Gironde.</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-enerzig-orange font-bold rounded-xl hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
            Demander un devis gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
