import { Sun, Zap, Wind } from "lucide-react";

const projects = [
  {
    icon: Sun,
    color: "text-enerzig-orange",
    bg: "bg-orange-100",
    category: "Photovoltaïque",
    title: "Installation 6 kWc — Maison individuelle",
    location: "Libourne (33)",
    desc: "Pose de 15 panneaux solaires monocristallins sur toiture tuiles. Autoconsommation avec revente du surplus. Économie estimée : 900€/an.",
    details: ["15 panneaux 400W", "Onduleur Enphase", "6 kWc installés", "Monitoring en temps réel"],
  },
  {
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    category: "Électricité",
    title: "Rénovation tableau électrique",
    location: "Saint-Émilion (33)",
    desc: "Mise aux normes NF C 15-100 complète d'une maison de 120 m². Nouveau tableau, câblage et prises.",
    details: ["Tableau 14 circuits", "Câblage 2,5mm²", "Prises 16A", "Conformité CONSUEL"],
  },
  {
    icon: Wind,
    color: "text-blue-500",
    bg: "bg-blue-100",
    category: "Climatisation",
    title: "Multi-split 3 pièces — Appartement",
    location: "Bordeaux (33)",
    desc: "Installation d'un système multi-split Daikin pour un appartement de 80 m². 3 unités intérieures connectées.",
    details: ["Daikin 3×2,5 kW", "Unité extérieure 7 kW", "SCOP 4,1", "Garantie 5 ans"],
  },
  {
    icon: Sun,
    color: "text-enerzig-orange",
    bg: "bg-orange-100",
    category: "Photovoltaïque",
    title: "Installation 10 kWc — Hangar agricole",
    location: "Castillon-la-Bataille (33)",
    desc: "Grande installation solaire sur hangar agricole pour autoconsommation et revente totale. Aide MaPrimeRénov' obtenue.",
    details: ["25 panneaux bifaciaux", "10 kWc", "Revente totale", "Aides : 3 200€"],
  },
  {
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    category: "Électricité",
    title: "Borne IRVE — Véhicule électrique",
    location: "Pomerol (33)",
    desc: "Installation de 2 bornes de recharge véhicule électrique 22 kW dans un garage professionnel.",
    details: ["Wallbox 22 kW", "Câble mode 3", "Tableau dédié", "Subvention ADVENIR"],
  },
  {
    icon: Wind,
    color: "text-blue-500",
    bg: "bg-blue-100",
    category: "Climatisation",
    title: "Pompe à chaleur — Maison neuve",
    location: "Fronsac (33)",
    desc: "Installation d'une pompe à chaleur air/air Mitsubishi Electric pour une maison BBC de 150 m².",
    details: ["Mitsubishi 9 kW", "COP 4,5", "Classe A+++", "Éligible crédit d'impôt"],
  },
];

const categories = ["Tous", "Photovoltaïque", "Électricité", "Climatisation"];

export default function Realisations() {
  return (
    <div>
      {/* Header */}
      <section className="bg-enerzig-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Découvrez quelques-uns de nos chantiers réalisés en Gironde et
            Nouvelle-Aquitaine.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4 flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 bg-white hover:bg-enerzig-orange hover:text-white hover:border-enerzig-orange transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className={`${p.bg} p-8 flex items-center justify-center`}>
                <p.icon className={`w-16 h-16 ${p.color} opacity-60`} />
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-2">
                  {p.category}
                </span>
                <h3 className="font-bold text-enerzig-dark text-lg mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{p.location}</p>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.details.map((d) => (
                    <span key={d} className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
