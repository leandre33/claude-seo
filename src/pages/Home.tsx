import { Link } from "react-router-dom";
import {
  Zap,
  Sun,
  Wind,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Électricité",
    desc: "Installation, mise aux normes, dépannage électrique pour particuliers et professionnels.",
  },
  {
    icon: Sun,
    color: "text-enerzig-orange",
    bg: "bg-orange-50",
    title: "Photovoltaïque",
    desc: "Pose de panneaux solaires, autoconsommation et revente d'énergie. Rentabilisez vos toits.",
  },
  {
    icon: Wind,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "Climatisation",
    desc: "Installation et entretien de systèmes de climatisation réversible pour votre confort.",
  },
];

const stats = [
  { value: "200+", label: "Installations réalisées" },
  { value: "RGE", label: "Qualifié QualiPV" },
  { value: "10 ans", label: "D'expérience" },
  { value: "100%", label: "Clients satisfaits" },
];

const guarantees = [
  "Artisan RGE certifié QualiPV",
  "Devis gratuit et sans engagement",
  "Matériaux certifiés et garantis",
  "Accompagnement pour les aides de l'État",
  "Service après-vente réactif",
  "Interventions en Gironde et Nouvelle-Aquitaine",
];

const testimonials = [
  {
    name: "Marie L.",
    location: "Libourne",
    text: "Excellent travail pour l'installation de nos panneaux solaires. Équipe professionnelle et à l'écoute. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Jean-Pierre M.",
    location: "Saint-Émilion",
    text: "Intervention rapide pour une panne électrique. Tarifs transparents et travail soigné. Merci Enerzig !",
    rating: 5,
  },
  {
    name: "Sophie R.",
    location: "Bordeaux",
    text: "Installation de climatisation réversible parfaitement réalisée. Très contents du résultat et des économies d'énergie.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-enerzig-dark via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-enerzig-orange/20 border border-enerzig-orange/30 rounded-full text-enerzig-orange text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Artisan RGE certifié — Nouvelle-Aquitaine
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Votre expert en{" "}
              <span className="text-enerzig-orange">solutions énergétiques</span>{" "}
              à Libourne
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Électricité, panneaux photovoltaïques, climatisation — Enerzig vous
              accompagne pour réduire vos factures d'énergie et moderniser vos
              installations en Gironde et Nouvelle-Aquitaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                Demander un devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33XXXXXXXXX"
                className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-enerzig-orange">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-orange-100 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-enerzig-dark mb-4">
              Nos services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Des solutions complètes pour votre habitat et votre entreprise,
              réalisées par des artisans qualifiés.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-xl font-bold text-enerzig-dark mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 mt-4 text-enerzig-orange text-sm font-medium hover:underline"
                >
                  En savoir plus <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="px-6 py-3 bg-enerzig-dark text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center gap-2"
            >
              Voir tous nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-enerzig-dark mb-4">
              Pourquoi choisir Enerzig ?
            </h2>
            <p className="text-gray-500 mb-8">
              Nous mettons notre expertise au service de votre projet avec rigueur,
              transparence et professionnalisme.
            </p>
            <ul className="space-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-enerzig-green mt-0.5 shrink-0" />
                  <span className="text-gray-700">{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-enerzig-dark to-slate-700 rounded-2xl p-8 text-white">
            <Sun className="w-12 h-12 text-enerzig-orange mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Passez au solaire et économisez
            </h3>
            <p className="text-gray-300 mb-6">
              Nos installations photovoltaïques vous permettent de produire votre
              propre électricité et de bénéficier des aides de l'État (MaPrimeRénov',
              TVA à 10%, prime à l'autoconsommation).
            </p>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
            >
              Simulation gratuite <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-enerzig-dark mb-4">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-enerzig-dark">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-enerzig-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à réduire vos factures d'énergie ?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
            Notre équipe vous répond rapidement.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-enerzig-orange font-bold rounded-xl hover:bg-orange-50 transition-colors inline-flex items-center gap-2 text-lg"
          >
            Devis gratuit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
