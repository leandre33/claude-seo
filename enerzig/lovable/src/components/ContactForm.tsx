import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Électricité générale",
  "Panneaux photovoltaïques",
  "Climatisation réversible",
  "VMC – Ventilation",
  "GTB – Automatisation",
  "Autre",
];

export default function ContactForm({ title = "Demander un devis gratuit" }: { title?: string }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nom: "", email: "", telephone: "", service: "", ville: "", message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual form submission endpoint (Formspree, Supabase, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500" />
        <h3 className="text-xl font-bold text-gray-900">Demande envoyée !</h3>
        <p className="text-gray-600 max-w-sm">
          Merci pour votre message. Notre équipe vous contacte sous 24 h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom & Prénom *</label>
            <input
              name="nom" required value={form.nom} onChange={handle}
              placeholder="Jean Dupont"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
            <input
              name="telephone" required type="tel" value={form.telephone} onChange={handle}
              placeholder="06 XX XX XX XX"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            name="email" required type="email" value={form.email} onChange={handle}
            placeholder="jean.dupont@email.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service souhaité</label>
            <select
              name="service" value={form.service} onChange={handle}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Choisir un service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ville / Code postal</label>
            <input
              name="ville" value={form.ville} onChange={handle}
              placeholder="Libourne, 33500"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Décrivez votre projet</label>
          <textarea
            name="message" value={form.message} onChange={handle} rows={4}
            placeholder="Décrivez votre projet en quelques mots (type de logement, surface, projet neuf ou rénovation…)"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          />
        </div>
        <button
          type="submit" disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? "Envoi en cours…" : (<><Send className="w-4 h-4" />Envoyer ma demande de devis</>)}
        </button>
        <p className="text-xs text-gray-500 text-center">
          Devis gratuit et sans engagement · Réponse sous 24 h · Déplacement offert en Gironde
        </p>
      </form>
    </div>
  );
}
