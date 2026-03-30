# Enerzig — Prompt Lovable pour amélioration du site

## Comment utiliser ce fichier

Copiez le prompt ci-dessous et collez-le dans votre projet Lovable existant.
Les composants React de ce dossier (`src/`) sont prêts à être importés directement.

---

## PROMPT PRINCIPAL — À coller dans Lovable

```
Je veux améliorer le site Enerzig (enerzig.com), une entreprise d'électricité,
panneaux solaires, climatisation et VMC basée à Libourne (33500), Gironde.

Voici les améliorations à apporter :

### 1. STRUCTURE GLOBALE
- Stack : React + Vite + Tailwind CSS (déjà en place)
- Couleur principale : emerald-600 (#059669)
- Police : Inter (Google Fonts)
- Ajouter react-router-dom pour la navigation multi-pages
- Ajouter lucide-react pour les icônes

### 2. COMPOSANTS À CRÉER OU REMPLACER

**Header (sticky, avec menu dropdown)**
- Logo Enerzig avec icône éclair (Zap de lucide-react)
- Menu : Nos services (dropdown avec 5 services) | Aides financières | Réalisations | FAQ | [Bouton] Devis gratuit
- Menu hamburger mobile responsive

**Footer (4 colonnes)**
- Col 1 : Logo + description + adresse NAP (Libourne 33500, téléphone, email)
- Col 2 : Nos services (liens vers /electricite, /photovoltaique, /climatisation, /ventilation, /gtb)
- Col 3 : Zone d'intervention (liens vers pages locales)
- Col 4 : Société + réseaux sociaux (Facebook, Instagram, LinkedIn)
- Badge RGE Certifié et Qualifelec en bas

### 3. HOMEPAGE (/)
**Hero section** (fond sombre gradient gray-900 → emerald-950) :
- Breadcrumb : "Libourne (33) · Gironde · Bordeaux"
- H1 : "Votre expert énergie en Gironde"
- Sous-titre avec mots clés : électricité, panneaux solaires, climatisation, VMC, Libourne
- Boutons CTA : "Devis gratuit en 48 h" + "Appeler maintenant"
- Badges : RGE Certifié, Qualifelec, Devis gratuit

**Stats bar** (fond emerald-600) :
- 4 stats : "2 050 h soleil/an en Gironde", "8–11 ans retour investissement", "5 services", "Gironde 33 entier couvert"

**Grille de services** (5 cartes, fond gray-50) :
- Électricité (icône Zap, texte sur carte blanche)
- Photovoltaïque (icône Sun, carte surlignée en vert — c'est le service phare)
- Climatisation (icône Thermometer)
- VMC (icône Wind)
- GTB (icône Building2)

**Bandeau aides financières** :
- "Jusqu'à 20 000 € d'aides financières"
- Lien vers /aides-financieres

**Zone d'intervention** :
- Tags : Libourne, Bordeaux, Libournais, Saint-Émilion, Médoc, etc.
- Liens vers pages locales

**CTA final** (fond gray-900) :
- "Votre projet en Gironde, c'est maintenant"
- Bouton "Demander mon devis gratuit"

### 4. PAGE PANNEAUX SOLAIRES (/photovoltaique)
- Hero avec simulation d'aides sur la droite (carte blanche)
- Section avantages (6 cartes avec CheckCircle)
- Section 3 solutions : autoconsommation + revente, + batterie, professionnel
- FAQ avec schema JSON-LD (3 questions)
- Zones d'installation en Gironde (tags)
- Formulaire de devis en bas

### 5. PAGE AIDES FINANCIÈRES (/aides-financieres)
- Hero fond sombre avec badge "Mis à jour 2025 – Gironde (33)"
- Simulation visuelle 3 kWc à Libourne (grille chiffrée)
- 6 fiches d'aides détaillées : MaPrimeRénov', CEE, Prime EDF OA, Prime Bordeaux Métropole 1 000 €, TVA 10 %, Exonération taxe foncière
- FAQ schema (3 questions)
- Formulaire de contact

### 6. PAGE ÉLECTRICIEN LIBOURNE (/electricien-libourne)
- Hero fond sombre avec H1 "Électricien à Libourne"
- Badges : RGE Certifié, Qualifelec, Devis gratuit, Intervention rapide
- 4 cartes services
- Communes du Libournais en tags (Libourne, Saint-Émilion, Pomerol, Fronsac…)
- Bandeau aides financières
- Formulaire de devis

### 7. PAGE ÉLECTRICIEN BORDEAUX (/electricien-bordeaux)
- Hero fond bleu-gris avec H1 "Électricien à Bordeaux et en Gironde"
- 3 stats clés : 2 100 h soleil/an, prime 1 000 € Bordeaux Métropole, retour 8 ans
- 4 services en cartes horizontales
- 15 communes de Bordeaux Métropole en tags
- 6 arguments "Pourquoi Enerzig ?" avec CheckCircle
- Formulaire de devis

### 8. PAGE PANNEAUX SOLAIRES GIRONDE (/panneaux-solaires-gironde)
- Hero fond sombre orange/jaune avec H1 "Panneaux Solaires en Gironde"
- Simulation financière interactive (tableau avec déductions)
- 6 zones géographiques (Bordeaux Métropole, Libournais, Médoc, Arcachon, Entre-Deux-Mers, Blayais)
- FAQ (3 questions avec schema)
- Formulaire de devis

### 9. COMPOSANT FORMULAIRE DE DEVIS (réutilisable)
Champs : Nom/Prénom, Téléphone, Email, Service souhaité (select), Ville/Code postal, Message
Bouton : "Envoyer ma demande de devis"
Message de confirmation après envoi
Texte sous bouton : "Devis gratuit et sans engagement · Réponse sous 24 h · Déplacement offert en Gironde"

### 10. SEO — DANS LE <head> DE CHAQUE PAGE
- title et meta description uniques (voir fichier meta-tags-all-pages.json)
- meta geo.region="FR-33", geo.placename="Libourne, Gironde"
- og:title, og:description, og:image, og:locale="fr_FR"
- twitter:card="summary_large_image"
- canonical link
- JSON-LD schema (ElectricalContractor + FAQPage selon page)

### 11. ROBOTS.TXT (public/)
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: https://enerzig.com/sitemap.xml
```

### 12. SITEMAP.XML (public/)
Inclure toutes les URLs : /, /electricite, /photovoltaique, /climatisation, /ventilation, /gtb, /electricien-libourne, /electricien-bordeaux, /panneaux-solaires-gironde, /panneaux-solaires-bordeaux, /aides-financieres, /faq, /contact

---

## STYLE GUIDE
- Couleur primaire : emerald-600 (#059669)
- Couleur secondaire : yellow-500 (#EAB308) pour le solaire
- Fond pages : alterner white / gray-50
- Héros : bg-gradient-to-br from-gray-900 to-emerald-950
- Cartes : rounded-2xl, shadow-sm, border border-gray-100
- Boutons principaux : bg-emerald-600 rounded-xl px-8 py-4 font-bold
- Typographie H1 : text-4xl sm:text-5xl font-extrabold
- Typographie H2 : text-3xl font-bold text-gray-900
```

---

## FICHIERS REACT PRÊTS À L'EMPLOI

Les composants sont dans `lovable/src/` :
- `components/SEO.tsx` — gestion meta tags + JSON-LD
- `components/Header.tsx` — navigation responsive
- `components/Footer.tsx` — pied de page avec NAP
- `components/ContactForm.tsx` — formulaire de devis réutilisable
- `pages/Index.tsx` — homepage complète
- `pages/Photovoltaique.tsx` — page panneaux solaires
- `pages/AidesFinancieres.tsx` — page aides financières
- `pages/ElectricienLibourne.tsx` — page locale Libourne
- `pages/ElectricienBordeaux.tsx` — page locale Bordeaux
- `pages/PanneauxSolairesGironde.tsx` — page locale Gironde
- `App.tsx` — routeur complet

## DÉPENDANCES À INSTALLER
```bash
npm install react-router-dom lucide-react
```
