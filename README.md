# 🧹 Menage-Booking

**Menage-Booking** est une application web développée avec **React + Vite**, **TypeScript (TSX)** et **Tailwind CSS**.  
Elle permet aux utilisateurs de **réserver des services de ménage** facilement et de consulter des **articles via une API** dans la page Blog.

---

## 🚀 Fonctionnalités

- 🧼 Réservation de services de ménage
- 📅 Sélection de date pour la réservation
- 📝 Page Blog avec consommation d’une API
- 📞 Page Contact
- 🎨 Interface moderne avec Tailwind CSS
- ⚡ Performance optimisée grâce à Vite
- 📱 Design responsive

---
🌐 Déploiement

L’application est déployée en production sur Vercel.

🔗 Lien du site en ligne :
👉 https://menage-booking.vercel.app/

⚙️ Configuration du déploiement

Framework : Vite

Build Command : npm run build

Output Directory : dist

Routing SPA géré avec vercel.json

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}


Cette configuration permet le bon fonctionnement du routing React lors de l’accès direct aux pages comme /reservation, /blog, etc.

---

▶️ Installation et lancement en local
# Cloner le projet
git clone https://github.com/khawlakha12/Menage-Booking.git

# Accéder au dossier
cd Menage-Booking

# Installer les dépendances
npm install

# Lancer le projet
npm run dev

---

## 🛠️ Technologies utilisées

- **React**
- **Vite**
- **TypeScript (TSX)**
- **Tailwind CSS**
- **API REST** (page Blog)
- **CSS personnalisé**

---

## 📂 Structure du projet

```bash
Menage-Booking/
│
├── public/
│
├── src/
│   ├── assets/                # Images & ressources
│   │
│   ├── Authentication/        # Authentification (login / register - en cours)
│   │
│   ├── components/
│   │   ├── Home/
│   │   │   ├── ConferenceGallery.tsx
│   │   │   ├── DateDisponible.tsx
│   │   │   ├── hero.tsx
│   │   │   └── section3.tsx
│   │   │
│   │   └── Footer.tsx
│   │
│   ├── pages/
│   │   ├── Blog.tsx           # Page Blog (API)
│   │   ├── Contact.tsx        # Page Contact
│   │   └── Reservation.tsx    # Page Réservation
│   │   └── About.tsx          # Page About
│   ├── Style/                 # Styles CSS
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── Home.tsx
│   ├── Index.css
│   └── main.tsx
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md

