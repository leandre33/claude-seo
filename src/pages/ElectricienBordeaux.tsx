import { Link } from "react-router-dom";
import { Zap, Sun, Wind, Thermometer, CheckCircle2, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const schema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": "https://enerzig.com/#organisation",
  "name": "Enerzig",
  "url": "https://enerzig.com",
  "description": "Enerzig intervient à Bordeaux et en Gironde. Électricité générale, photovoltaïque, climatisation réversible, VMC. Certifié RGE QualiPV.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Libourne",
    "postalCode": "33500",
    "addressCountry": "FR"
  },
  "areaServed": ["Bordeaux", "Bordeaux Métropole", "Mérignac", "Pessac", "Talence", "Bègles", "Gradignan", "Le Bouscat", "Gironde"],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://enerzig.com/" },
      { "@type": "ListItem", "position": 2, "name": "Électricien Bordeaux", "item": "https://enerzig.com/electricien-bordeaux" }
    ]
  }
};

const communesBordeaux = [
  "Bordeaux", "Mérignac", "Pessac", "Talence", "Bègles",
  "Gradignan", "Le Bouscat", "Bruges", "Eysines", "Blanquefort",
  "Lormont", "Cenon", "Floirac", "Bassens", "Carbon-Blanc",
];

export default function ElectricienBordeaux() {
  return (
    <div>
      <SEO
        title="Électricien à Bordeaux et Gironde (33) | Enerzig"
        description="Enerzig intervient à Bordeaux et en Gironde. Électricité, panneaux solaires, climatisation, VMC. Certifié RGE. Prime Bordeaux Métropole 1 000 €. Devis gratuit."
        canonical="https://enerzig.com/electricien-bordeaux"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-enerzig-dark via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 text-enerzig-orange text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" /> Bordeaux · Bordeaux Métropole · Gironde (33)
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl">
              Électricien à{" "}
              <span className="text-enerzig-orange">Bordeaux</span>{" "}
              et en Gironde – Enerzig
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
              Enerzig, basé à Libourne (33500), intervient à <strong className="text-white">Bordeaux</strong> et
              dans toute la <strong className="text-white">Bordeaux Métropole</strong>.
              Électricité, panneaux solaires, climatisation, VMC — certifié RGE.
            </p>
            <div className="inline-flex items-center gap-2 bg-enerzig-orange/20 border border-enerzig-orange/30 rounded-xl px-4 py-2 text-sm text-enerzig-orange font-semibold mb-8">
              <ShieldCheck className="w-4 h-4" />
              Prime Bordeaux Métropole : 1 000 € pour vos panneaux solaires
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-6 py-3 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Devis gratuit à Bordeaux <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/aides-financieres" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Voir les aides financières
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bordeaux */}
      <section className="bg-enerzig-orange text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold">2 100 h</div>
            <div className="text-orange-100 text-xs mt-1">de soleil/an à Bordeaux</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">1 000 €</div>
            <div className="text-orange-100 text-xs mt-1">prime Bordeaux Métropole</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">8 ans</div>
            <div className="text-orange-100 text-xs mt-1">retour investissement solaire</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-enerzig-dark mb-3">Nos services à Bordeaux</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Zap, color: "text-yellow-500", bg: "bg-yellow-50",
                title: "Électricité générale à Bordeaux",
                desc: "Mise aux normes NFC 15-100, tableaux électriques, câblage, éclairage, domotique KNX pour maisons, appartements et locaux professionnels dans Bordeaux et la Métropole.",
              },
              {
                icon: Sun, color: "text-enerzig-orange", bg: "bg-orange-50",
                title: "Panneaux solaires à Bordeaux",
                desc: "Bordeaux = 2 100 h/an d'ensoleillement. Rentabilité en 8 ans. Prime Bordeaux Métropole 1 000 € cumulable avec MaPrimeRénov'. Enerzig installe et monte votre dossier.",
              },
              {
                icon: Thermometer, color: "text-red-500", bg: "bg-red-50",
                title: "Climatisation réversible à Bordeaux",
                desc: "Les étés bordelais se réchauffent. Enerzig installe Daikin, Mitsubishi, Atlantic dans toute la Bordeaux Métropole. Confort été comme hiver.",
              },
              {
                icon: Wind, color: "text-blue-500", bg: "bg-blue-50",
                title: "VMC double flux à Bordeaux",
                desc: "Obligatoire en construction neuve (RE 2020), fortement recommandée en rénovation. Enerzig installe la VMC double flux dans les logements collectifs et maisons à Bordeaux.",
              },
            ].map((s, i) => (
              <AnimatedSection key={s.title} animation="fade-up" delay={i * 100}>
                <div className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <s.icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-enerzig-dark mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Communes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-enerzig-dark mb-4">Communes couvertes dans la Bordeaux Métropole</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {communesBordeaux.map((c) => (
                <span key={c} className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Et au-delà : Médoc, Bassin d'Arcachon, Entre-Deux-Mers, Blayais.{" "}
              <Link to="/electricien-libourne" className="text-enerzig-orange hover:underline font-medium">Voir aussi Libourne →</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-enerzig-dark">Pourquoi choisir Enerzig à Bordeaux ?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Certifié RGE — éligibilité MaPrimeRénov' et CEE",
              "Expert multi-services : électricité + solaire + VMC + clim",
              "Montage dossier prime Bordeaux Métropole 1 000 € offert",
              "Devis gratuit sous 48 h sur toute la Métropole",
              "Connaissance du bâti bordelais (maison girondine, chartreuse, appt.)",
              "Garantie décennale sur tous les travaux",
            ].map((item, i) => (
              <AnimatedSection key={item} animation="fade-up" delay={i * 60}>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-enerzig-green mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-enerzig-orange text-white text-center">
        <AnimatedSection className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Votre projet à Bordeaux, c'est maintenant</h2>
          <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">Devis gratuit, prime Bordeaux Métropole 1 000 €, réponse sous 48 h. Certifié RGE.</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-enerzig-orange font-bold rounded-xl hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
            Demander un devis gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
