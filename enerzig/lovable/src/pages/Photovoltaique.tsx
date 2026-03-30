import { Link } from "react-router-dom";
import { Sun, CheckCircle, Euro, ArrowRight, MapPin } from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte une installation photovoltaïque en Gironde en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Gironde, une installation de 3 kWc coûte entre 8 000 € et 10 000 € avant aides. Avec MaPrimeRénov', CEE et prime EDF OA, le reste à charge est généralement 5 000–7 000 €. Bordeaux Métropole ajoute 1 000 € supplémentaires."
      }
    },
    {
      "@type": "Question",
      "name": "En combien de temps les panneaux solaires sont-ils rentabilisés à Libourne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "À Libourne et dans le Libournais, avec 2 050+ heures d'ensoleillement par an, une installation photovoltaïque se rentabilise en 8 à 11 ans. Sur 25 ans de vie des panneaux, c'est 14 à 17 ans de production gratuite."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle puissance choisir pour ma maison en Gironde ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 kWc pour une maison de 80–100 m², 4,5 kWc pour 100–150 m², 6 kWc pour 150–200 m². Enerzig réalise une étude personnalisée gratuite basée sur votre consommation et l'orientation de votre toiture."
      }
    }
  ]
};

const aidesData = [
  { label: "MaPrimeRénov'", amount: "jusqu'à 4 000 €", color: "emerald" },
  { label: "Prime EDF OA (3 kWc)", amount: "jusqu'à 1 110 €", color: "yellow" },
  { label: "Primes CEE", amount: "variable", color: "blue" },
  { label: "Prime Bordeaux Métropole", amount: "1 000 €", color: "purple" },
  { label: "TVA réduite à 10 %", amount: "économie ~800 €", color: "orange" },
];

export default function Photovoltaique() {
  return (
    <>
      <SEO
        title="Panneaux Photovoltaïques Libourne & Gironde | Enerzig"
        description="Installation de panneaux solaires à Libourne et en Gironde. Autoconsommation, revente surplus, MaPrimeRénov'. Enerzig RGE certifié. Devis gratuit 48 h."
        canonical="https://enerzig.com/photovoltaique"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" /> Libourne · Bordeaux · Gironde (33)
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Panneaux Solaires<br />
              <span className="text-yellow-500">en Gironde</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              La Gironde bénéficie de plus de <strong>2 050 heures de soleil par an</strong>.
              Installez vos panneaux photovoltaïques avec Enerzig et réduisez votre facture
              d'électricité jusqu'à 70 %. Rentabilité en <strong>8 à 11 ans</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-center">
                Devis gratuit
              </Link>
              <Link to="/aides-financieres" className="border-2 border-emerald-600 text-emerald-600 font-semibold px-8 py-4 rounded-xl transition-colors text-center hover:bg-emerald-50">
                Voir les aides financières
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Euro className="w-5 h-5 text-emerald-600" /> Aides disponibles en 2025
            </h2>
            <div className="space-y-3">
              {aidesData.map((a) => (
                <div key={a.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{a.label}</span>
                  <span className="text-sm font-bold text-emerald-600">{a.amount}</span>
                </div>
              ))}
              <div className="flex items-center justify-between p-3 bg-emerald-600 text-white rounded-lg">
                <span className="text-sm font-bold">Reste à charge estimé (3 kWc)</span>
                <span className="text-sm font-bold">≈ 4 500–5 500 €</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">* Montants indicatifs. Simulation personnalisée gratuite.</p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pourquoi installer des panneaux solaires en Gironde ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "2 050+ h de soleil/an", desc: "Le Libournais et Bordeaux sont parmi les zones les plus ensoleillées de France métropolitaine." },
              { title: "Économies dès la 1ère année", desc: "Jusqu'à 1 200 € d'économies annuelles sur votre facture pour une installation 3 kWc à Libourne." },
              { title: "Rentabilité en 8–11 ans", desc: "Le meilleur retour sur investissement de France grâce à l'ensoleillement girondin." },
              { title: "Valorisation du bien", desc: "+5 à +10 % sur la valeur de revente de votre maison avec une installation solaire." },
              { title: "Aides jusqu'à 20 000 €", desc: "MaPrimeRénov', CEE, prime EDF OA, prime Bordeaux Métropole cumulables." },
              { title: "Installation garantie 10 ans", desc: "Garantie décennale sur l'installation. Panneaux avec garantie fabricant 25 ans." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos solutions photovoltaïques en Gironde</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Sun className="w-8 h-8 text-yellow-500" />,
                title: "Autoconsommation + revente surplus",
                desc: "Le système le plus rentable. Consommez le jour, revendez le surplus à EDF OA. Idéal pour maisons individuelles à Libourne et Bordeaux.",
              },
              {
                icon: <Sun className="w-8 h-8 text-emerald-500" />,
                title: "Autoconsommation + batterie",
                desc: "Stockez votre énergie solaire pour la nuit. Solution idéale pour maximiser l'indépendance énergétique dans le Libournais.",
              },
              {
                icon: <Sun className="w-8 h-8 text-blue-500" />,
                title: "Solaire professionnel",
                desc: "Installations 10–100+ kWc pour entrepôts, commerces et exploitations agricoles en Gironde. Étude de faisabilité gratuite.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Questions fréquentes – Solaire Gironde</h2>
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

      {/* Zones locales */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Zones d'installation photovoltaïque en Gironde</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Libourne", "Bordeaux", "Mérignac", "Pessac", "Saint-Émilion", "Pomerol", "Fronsac",
              "Coutras", "Blaye", "Langon", "Arcachon", "Pauillac", "Médoc", "Libournais"].map((z) => (
              <span key={z} className="bg-white border border-emerald-200 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                {z}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/panneaux-solaires-gironde" className="text-emerald-600 font-semibold hover:underline text-sm">
              Panneaux solaires Gironde →
            </Link>
            <Link to="/panneaux-solaires-bordeaux" className="text-emerald-600 font-semibold hover:underline text-sm">
              Panneaux solaires Bordeaux →
            </Link>
          </div>
        </div>
      </section>

      {/* Devis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ContactForm title="Devis photovoltaïque gratuit en Gironde" />
        </div>
      </section>
    </>
  );
}
