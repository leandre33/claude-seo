import { Link } from "react-router-dom";
import { Zap, Sun, Wind, Thermometer, CheckCircle2, ArrowRight, MapPin, ShieldCheck, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "@id": "https://enerzig.com/#organisation",
    "name": "Enerzig",
    "url": "https://enerzig.com",
    "description": "Électricien certifié RGE à Libourne (33500). Électricité générale, panneaux photovoltaïques, climatisation réversible et VMC dans le Libournais et toute la Gironde.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Rue Paul Bert",
      "addressLocality": "Libourne",
      "postalCode": "33500",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "areaServed": ["Libourne", "Libournais", "Saint-Émilion", "Pomerol", "Fronsac", "Coutras", "Castillon-la-Bataille"],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://enerzig.com/" },
        { "@type": "ListItem", "position": 2, "name": "Électricien Libourne", "item": "https://enerzig.com/electricien-libourne" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Enerzig intervient-il en urgence à Libourne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Enerzig intervient pour des dépannages électriques urgents à Libourne et dans le Libournais. Contactez-nous directement par téléphone pour les urgences — nous faisons notre maximum pour intervenir le jour même."
        }
      },
      {
        "@type": "Question",
        "name": "Enerzig est-il certifié RGE à Libourne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Enerzig est certifié RGE QualiPV à Libourne. Cette certification est indispensable pour que vous puissiez bénéficier de MaPrimeRénov' et des primes CEE pour vos travaux d'économies d'énergie en Gironde."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les délais d'intervention pour un électricien à Libourne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour les travaux planifiés (installation solaire, VMC, mise aux normes), Enerzig intervient généralement sous 1 à 3 semaines à Libourne. Pour les dépannages urgents, nous intervenons le jour même ou le lendemain dans le Libournais."
        }
      }
    ]
  }
];

const services = [
  { icon: Zap, color: "text-yellow-500", bg: "bg-yellow-50", title: "Électricité générale", desc: "Mise aux normes NFC 15-100, tableaux, prises, éclairage LED, domotique à Libourne.", href: "/services" },
  { icon: Sun, color: "text-enerzig-orange", bg: "bg-orange-50", title: "Panneaux solaires", desc: "Installation photovoltaïque en autoconsommation. 2 050 h de soleil/an dans le Libournais.", href: "/services" },
  { icon: Thermometer, color: "text-red-500", bg: "bg-red-50", title: "Climatisation", desc: "Daikin, Mitsubishi, Atlantic — confort été comme hiver à Libourne.", href: "/services" },
  { icon: Wind, color: "text-blue-500", bg: "bg-blue-50", title: "VMC – Ventilation", desc: "VMC simple et double flux pour une maison saine et économe en Gironde.", href: "/services" },
];

const communes = ["Libourne", "Saint-Émilion", "Pomerol", "Fronsac", "Coutras", "Castillon-la-Bataille", "Lussac", "Guîtres", "Lugon", "Moulon"];

export default function ElectricienLibourne() {
  return (
    <div>
      <SEO
        title="Électricien RGE à Libourne (33500) | Enerzig"
        description="Enerzig, votre électricien certifié RGE à Libourne (33500). Électricité, panneaux solaires, climatisation, VMC. Intervention rapide. Devis gratuit."
        canonical="https://enerzig.com/electricien-libourne"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-enerzig-dark via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 text-enerzig-orange text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" /> Libourne (33500) · Libournais · Gironde
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl">
              Électricien à{" "}
              <span className="text-enerzig-orange">Libourne</span>{" "}
              – Enerzig
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Enerzig est votre <strong className="text-white">électricien certifié RGE à Libourne</strong> (33500).
              Électricité générale, panneaux solaires, climatisation et VMC —
              un seul expert pour tous vos projets énergétiques dans le Libournais.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["RGE QualiPV", "Devis gratuit", "Intervention rapide", "Déplacement offert"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-enerzig-orange" /> {b}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-6 py-3 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Devis gratuit à Libourne <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+33XXXXXXXXX" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Appeler Enerzig
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-enerzig-dark mb-3">
              Nos services à Libourne et dans le Libournais
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Enerzig couvre l'ensemble de vos besoins énergétiques à Libourne (33500) et dans les communes voisines.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} animation="fade-up" delay={i * 100}>
                <Link to={s.href} className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1 h-full">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <s.icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <h3 className="font-bold text-enerzig-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-enerzig-orange text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Enerzig */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection animation="fade-left">
            <h2 className="text-3xl font-bold text-enerzig-dark mb-4">
              Pourquoi choisir Enerzig à Libourne ?
            </h2>
            <ul className="space-y-3">
              {[
                "Certifié RGE QualiPV — accès à MaPrimeRénov' et CEE",
                "Expert multi-services : électricité + solaire + VMC + clim",
                "Devis gratuit sous 48 h — déplacement offert à Libourne",
                "Connaissance du bâti local et du Libournais",
                "Montage de dossier d'aides inclus gratuitement",
                "Garantie décennale sur tous les travaux",
              ].map((item, i) => (
                <AnimatedSection key={item} animation="fade-left" delay={i * 70}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-enerzig-green mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection animation="fade-right">
            <div className="bg-gradient-to-br from-enerzig-dark to-slate-700 rounded-2xl p-8 text-white">
              <Sun className="w-10 h-10 text-enerzig-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Solaire à Libourne : retour en 8–11 ans</h3>
              <p className="text-gray-300 text-sm mb-5">
                Le Libournais bénéficie de plus de <strong className="text-white">2 050 heures de soleil par an</strong>.
                Une installation photovoltaïque de 3 kWc peut vous faire économiser jusqu'à <strong className="text-white">1 200 €/an</strong> sur votre facture.
              </p>
              <Link to="/aides-financieres" className="px-5 py-2.5 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2 text-sm">
                Voir les aides disponibles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-enerzig-dark mb-4">
              Communes couvertes autour de Libourne
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {communes.map((c) => (
                <span key={c} className="bg-white border border-orange-100 text-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Enerzig intervient également à{" "}
              <Link to="/electricien-bordeaux" className="text-enerzig-orange hover:underline font-medium">Bordeaux</Link>{" "}
              et dans{" "}
              <Link to="/panneaux-solaires-gironde" className="text-enerzig-orange hover:underline font-medium">toute la Gironde</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-enerzig-dark">Questions fréquentes – Électricien Libourne</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {(schema[1] as any).mainEntity.map((q: any) => (
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Votre projet à Libourne, c'est maintenant</h2>
          <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">Devis gratuit, déplacement offert, réponse sous 48 h. Certifié RGE pour vos aides de l'État.</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-enerzig-orange font-bold rounded-xl hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
            Demander un devis gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
