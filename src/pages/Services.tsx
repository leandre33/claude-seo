import { Link } from "react-router-dom";
import { Zap, Sun, Wind, ArrowRight, CheckCircle2, Shield } from "lucide-react";

const services = [
  {
    id: "electricite",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Électricité",
    subtitle: "Installation & Dépannage",
    desc: "Qu'il s'agisse d'une installation neuve, d'une mise aux normes ou d'un dépannage urgent, nos électriciens qualifiés interviennent rapidement chez vous.",
    items: [
      "Tableau électrique et disjoncteurs",
      "Installation de prises et interrupteurs",
      "Mise aux normes NF C 15-100",
      "Éclairage intérieur et extérieur",
      "Borne de recharge véhicule électrique (IRVE)",
      "Domotique et automatismes",
      "Dépannage électrique urgent",
    ],
  },
  {
    id: "photovoltaique",
    icon: Sun,
    color: "text-enerzig-orange",
    bg: "bg-orange-50",
    title: "Photovoltaïque",
    subtitle: "Énergie solaire",
    desc: "Produisez votre propre électricité grâce à nos installations photovoltaïques de qualité. Nous vous guidons de l'étude de faisabilité jusqu'à la mise en service.",
    items: [
      "Étude de faisabilité gratuite",
      "Panneaux monocristallins haute performance",
      "Autoconsommation avec ou sans revente",
      "Batteries de stockage",
      "Monitoring de production",
      "Démarches administratives incluses",
      "Aides financières : MaPrimeRénov', TVA 10%",
    ],
  },
  {
    id: "climatisation",
    icon: Wind,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "Climatisation",
    subtitle: "Confort thermique",
    desc: "Bénéficiez d'un confort optimal en toutes saisons avec nos systèmes de climatisation réversible. Chaleur en hiver, fraîcheur en été.",
    items: [
      "Split system mono et multi-split",
      "Climatisation réversible (pompe à chaleur air/air)",
      "Marques premium : Daikin, Mitsubishi, Atlantic",
      "Entretien et maintenance annuelle",
      "Installation propre et soignée",
      "Certification fluides frigorigènes",
      "Conseil personnalisé pour votre logement",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-enerzig-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Des solutions énergétiques complètes pour particuliers et
            professionnels en Nouvelle-Aquitaine.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <p className="text-sm font-semibold text-enerzig-orange uppercase tracking-wide mb-1">
                  {s.subtitle}
                </p>
                <h2 className="text-3xl font-bold text-enerzig-dark mb-3">{s.title}</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-enerzig-green mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className={`rounded-2xl ${s.bg} p-10 flex items-center justify-center min-h-[280px]`}>
                  <s.icon className={`w-32 h-32 ${s.color} opacity-30`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border">
              <Shield className="w-5 h-5 text-enerzig-green" />
              <span className="text-sm font-semibold text-enerzig-dark">Certifié RGE</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border">
              <Sun className="w-5 h-5 text-enerzig-orange" />
              <span className="text-sm font-semibold text-enerzig-dark">QualiPV</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-enerzig-dark">Qualifelec</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border">
              <Wind className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-enerzig-dark">Qualipac</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
