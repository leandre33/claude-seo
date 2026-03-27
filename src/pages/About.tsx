import { ShieldCheck, Sun, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: ShieldCheck,
    title: "Qualité & Fiabilité",
    desc: "Nous n'utilisons que des matériaux certifiés et éprouvés. Chaque installation est réalisée dans les règles de l'art.",
  },
  {
    icon: Sun,
    title: "Engagement écologique",
    desc: "Nous croyons en un avenir énergétique durable. Chaque installation solaire est un pas vers l'indépendance énergétique.",
  },
  {
    icon: Users,
    title: "Proximité client",
    desc: "Artisan de proximité, nous vous accompagnons de A à Z : conseil, installation, SAV. Vous avez un interlocuteur unique.",
  },
  {
    icon: Award,
    title: "Certifications RGE",
    desc: "Nos certifications RGE (QualiPV, Qualifelec) vous garantissent l'accès aux aides de l'État et la qualité de nos prestations.",
  },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-enerzig-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos d'Enerzig</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Une entreprise familiale au service de la transition énergétique en
            Gironde depuis 2016.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-enerzig-orange uppercase tracking-wide mb-2">
              Notre histoire
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-enerzig-dark mb-6">
              Une expertise au service de votre énergie
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fondée en 2016 à Libourne par Stephan Herzig, Enerzig est née d'une
                conviction forte : l'énergie propre et accessible est un droit, pas
                un luxe. Électricien de formation, Stephan a rapidement élargi son
                activité au photovoltaïque et à la climatisation pour répondre aux
                besoins croissants de ses clients.
              </p>
              <p>
                Implantée au cœur de la Gironde, notre équipe intervient sur tout
                le territoire de la Nouvelle-Aquitaine — des maisons individuelles
                aux bâtiments agricoles, en passant par les petites entreprises.
              </p>
              <p>
                Notre approche : écouter, conseiller honnêtement, et réaliser des
                installations durables qui vous font vraiment économiser.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-enerzig-orange/10 to-orange-100 rounded-2xl p-10 text-center">
            <div className="text-7xl font-black text-enerzig-orange mb-2">2016</div>
            <p className="text-gray-600 font-medium">Création de l'entreprise</p>
            <div className="border-t border-orange-200 my-6" />
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-enerzig-dark">200+</div>
                <div className="text-sm text-gray-500">Chantiers réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-enerzig-dark">4</div>
                <div className="text-sm text-gray-500">Départements couverts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-enerzig-dark mb-4">
              Nos valeurs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-enerzig-orange" />
                </div>
                <h3 className="font-bold text-enerzig-dark mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-enerzig-dark mb-4">Zone d'intervention</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Nous intervenons principalement dans le département de la Gironde (33)
            et sur l'ensemble de la Nouvelle-Aquitaine.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Libourne", "Bordeaux", "Saint-Émilion", "Pomerol", "Fronsac",
              "Castillon-la-Bataille", "Bergerac", "Périgueux", "Angoulême",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-1.5 bg-orange-50 border border-orange-200 text-enerzig-orange rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
            <span className="px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-500 rounded-full text-sm">
              et plus...
            </span>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors inline-block"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
