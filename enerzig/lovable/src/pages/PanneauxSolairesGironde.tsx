import { Link } from "react-router-dom";
import { Sun, CheckCircle, ArrowRight, MapPin, TrendingUp } from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const pageSchema = [
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
          "text": "3 kWc : 8 000–10 000 € brut. Après aides (MaPrimeRénov', CEE, EDF OA, prime Bordeaux Métropole) : reste à charge estimé 4 500–5 500 €. Enerzig établit une simulation personnalisée gratuite."
        }
      },
      {
        "@type": "Question",
        "name": "La Gironde est-elle une bonne région pour le solaire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. La Gironde bénéficie de 2 050–2 150 heures d'ensoleillement annuel, contre une moyenne nationale de 1 950 h. C'est l'une des régions où les installations photovoltaïques sont les plus rentables de France (retour sur investissement en 8 à 11 ans)."
        }
      },
      {
        "@type": "Question",
        "name": "Enerzig installe-t-il dans toute la Gironde ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Enerzig intervient dans tout le département de la Gironde (33) : Bordeaux et Bordeaux Métropole, Libournais, Médoc, Bassin d'Arcachon, Entre-Deux-Mers, Blayais et Haute-Gironde."
        }
      }
    ]
  }
];

const zones = [
  { name: "Bordeaux Métropole", communes: "Bordeaux, Mérignac, Pessac, Talence, Bègles, Gradignan" },
  { name: "Libournais", communes: "Libourne, Saint-Émilion, Pomerol, Fronsac, Coutras, Castillon" },
  { name: "Médoc", communes: "Pauillac, Margaux, Lesparre-Médoc, Hourtin, Soulac-sur-Mer" },
  { name: "Bassin d'Arcachon", communes: "Arcachon, La Teste-de-Buch, Gujan-Mestras, Andernos, Biganos" },
  { name: "Entre-Deux-Mers", communes: "Langon, La Réole, Cadillac, Créon, Sainte-Croix-du-Mont" },
  { name: "Blayais / Haute-Gironde", communes: "Blaye, Saint-André-de-Cubzac, Bourg-sur-Gironde, Libourne Nord" },
];

export default function PanneauxSolairesGironde() {
  return (
    <>
      <SEO
        title="Panneaux Solaires Gironde (33) – Installateur RGE | Enerzig"
        description="Installation de panneaux photovoltaïques dans toute la Gironde (33). Enerzig, installateur RGE certifié à Libourne. 2 050 h/an de soleil. Devis gratuit."
        canonical="https://enerzig.com/panneaux-solaires-gironde"
        schema={pageSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-900 via-orange-950 to-gray-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" /> Gironde (33) – Département entier couvert
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Panneaux Solaires<br />
              en <span className="text-yellow-400">Gironde</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              <strong className="text-white">2 050 à 2 150 heures de soleil par an</strong> — la Gironde est
              l'un des meilleurs départements de France pour l'énergie solaire.
              Enerzig installe vos panneaux photovoltaïques de Bordeaux au Médoc.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "2 150 h", label: "Soleil/an" },
                { value: "8–11 ans", label: "Rentabilité" },
                { value: "–70 %", label: "Facture électro" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-yellow-400">{s.value}</div>
                  <div className="text-xs text-gray-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors inline-block">
              Devis gratuit en Gironde
            </Link>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              Simulation financière – 3 kWc en Gironde
            </h2>
            <div className="space-y-2 text-sm">
              {[
                { label: "Coût installation", value: "9 000 €", neutral: true },
                { label: "TVA réduite à 10 %", value: "− 818 €" },
                { label: "Prime EDF OA", value: "− 1 110 €" },
                { label: "MaPrimeRénov'", value: "− 2 000 €" },
                { label: "Primes CEE", value: "− 300 €" },
                { label: "Prime Bordeaux Métropole*", value: "− 1 000 €" },
              ].map((item) => (
                <div key={item.label} className={`flex justify-between py-2 border-b border-white/10 ${item.neutral ? "text-gray-300" : "text-white"}`}>
                  <span className="text-gray-300">{item.label}</span>
                  <span className={`font-bold ${item.neutral ? "text-gray-200" : "text-emerald-400"}`}>{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between py-3 bg-yellow-500/20 rounded-lg px-2 mt-2">
                <span className="text-white font-bold">Reste à charge estimé</span>
                <span className="text-yellow-400 font-extrabold text-lg">≈ 3 772 €*</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">*Prime Bordeaux Métropole selon commune. Simulation indicative.</p>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Installations photovoltaïques dans toute la Gironde
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Enerzig couvre l'intégralité du département 33 — de Bordeaux au Médoc, du Bassin d'Arcachon à l'Entre-Deux-Mers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z) => (
              <div key={z.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-4 h-4 text-yellow-500" />
                  <h3 className="font-bold text-gray-900">{z.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{z.communes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Pourquoi choisir Enerzig pour votre projet solaire en Gironde ?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "RGE certifié — indispensable pour MaPrimeRénov' et CEE",
              "Connaissance de l'ensoleillement et du bâti girondin",
              "Devis personnalisé gratuit avec simulation d'aides",
              "Accompagnement complet du dossier de subvention",
              "Garantie décennale sur l'installation",
              "Panneaux avec garantie fabricant 25 ans",
              "Équipe locale basée à Libourne (33500)",
              "Après-vente et suivi de production inclus",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">FAQ – Panneaux solaires Gironde</h2>
          <div className="space-y-3">
            {((pageSchema[1] as any).mainEntity as any[]).map((q: any) => (
              <details key={q.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-yellow-50 list-none">
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

      {/* Liens internes */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-6 text-center text-sm">
          <Link to="/panneaux-solaires-bordeaux" className="text-emerald-600 font-semibold hover:underline">Panneaux solaires Bordeaux →</Link>
          <Link to="/electricien-libourne" className="text-emerald-600 font-semibold hover:underline">Électricien Libourne →</Link>
          <Link to="/aides-financieres" className="text-emerald-600 font-semibold hover:underline">Toutes les aides financières →</Link>
        </div>
      </section>

      {/* Devis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm title="Devis panneaux solaires – Gironde" />
        </div>
      </section>
    </>
  );
}
