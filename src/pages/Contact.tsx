import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "15 Rue Paul Bert, 33500 Libourne",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "Nous appeler",
    href: "tel:+33XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@enerzig.com",
    href: "mailto:contact@enerzig.com",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun–Ven : 8h–18h | Sam : sur RDV",
  },
];

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, send to API/email service
    setSubmitted(true);
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-enerzig-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Devis gratuit et sans engagement. Notre équipe vous répond sous 24h.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-enerzig-dark mb-6">
              Nos coordonnées
            </h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-enerzig-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-enerzig-dark font-medium hover:text-enerzig-orange transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-enerzig-dark font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
              <h3 className="font-semibold text-enerzig-dark mb-2">
                Intervention rapide
              </h3>
              <p className="text-sm text-gray-600">
                Pour une urgence électrique, contactez-nous directement par
                téléphone. Nous intervenons en Gironde et Nouvelle-Aquitaine.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-enerzig-green mb-4" />
                <h3 className="text-2xl font-bold text-enerzig-dark mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-500">
                  Merci pour votre demande. Nous vous répondons sous 24h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-enerzig-orange/30 focus:border-enerzig-orange"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@example.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-enerzig-orange/30 focus:border-enerzig-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-enerzig-orange/30 focus:border-enerzig-orange"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service souhaité *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-enerzig-orange/30 focus:border-enerzig-orange bg-white"
                  >
                    <option value="">Choisir un service</option>
                    <option value="electricite">Électricité</option>
                    <option value="photovoltaique">Photovoltaïque / Solaire</option>
                    <option value="climatisation">Climatisation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-enerzig-orange/30 focus:border-enerzig-orange resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-enerzig-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma demande
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Devis gratuit · Réponse sous 24h · Sans engagement
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
