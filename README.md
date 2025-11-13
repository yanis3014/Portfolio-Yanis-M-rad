# Portfolio Next.js

Ce dépôt contient le code source d’un portfolio web moderne réalisé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**. Le design s’inspire des sites de développeurs actuels avec une palette violet/bleu élégante, des animations douces grâce à **Framer Motion** et un mode sombre activé par défaut. Les données des projets sont chargées dynamiquement depuis un fichier JSON pour faciliter la maintenance sans toucher au code.

## ✨ Fonctionnalités

- **App Router (Next.js 14)** : structure moderne basée sur `app/` avec support du streaming et de la métadonnée SEO.
- **TypeScript** : typage strict pour plus de fiabilité.
- **Tailwind CSS + shadcn/ui** : utilitaires CSS et composants réutilisables pour un design cohérent. Des couleurs personnalisées sont définies dans `tailwind.config.js`.
- **Framer Motion** : animations fluides pour les transitions et le survol des cartes.
- **Icônes Lucide** : bibliothèque d’icônes SVG moderne.
- **Mode clair/sombre** : bascule persistante avec stockage dans `localStorage`.
- **Données dynamiques** : les projets sont chargés depuis `data/projects.json`. Il suffit d’ajouter des entrées dans ce fichier pour afficher de nouveaux projets.
- **SEO de base** : titres et descriptions dynamiques pour chaque page.
- **Prêt pour Vercel** : configuration minimale pour un déploiement rapide.

## 📁 Structure

- `app/` : contient les pages (`page.tsx`) et le layout global.
- `components/` : ensemble de composants réutilisables (`Navbar`, `Footer`, `HeroSection`, `ProjectCard`, `ThemeToggle`, `ThemeProvider`).
- `data/projects.json` : liste des projets affichés dans la page « Projets ».
- `public/images/` : images utilisées dans le portfolio (ex. photo de profil, aperçu de projets). Remplacez les images par vos propres visuels.
- `styles/globals.css` : import des directives Tailwind et styles globaux.
- `tailwind.config.js` : configuration de Tailwind (couleurs, polices, etc.).

## 🚀 Lancer le projet en local

1. **Installer les dépendances** :

   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement** :

   ```bash
   npm run dev
   ```

3. Ouvrez votre navigateur à l’adresse [http://localhost:3000](http://localhost:3000). Les modifications dans les fichiers seront rechargées automatiquement.

## 🧩 Ajouter ou modifier un projet

Les projets sont définis dans le fichier JSON `data/projects.json`. Chaque entrée suit la structure :

```json
{
  "title": "Nom du projet",
  "description": "Courte description du projet",
  "technologies": ["Tech 1", "Tech 2"],
  "image": "/images/mon-projet.png",
  "github": "https://github.com/utilisateur/mon-projet",
  "demo": "https://mon-projet.vercel.app"
}
```

Pour ajouter un projet :

1. Ajoutez une nouvelle entrée à la fin du tableau dans `data/projects.json` en respectant la structure.
2. Placez une image représentative du projet dans `public/images/` et indiquez son chemin relatif dans le champ `image` (ex : `/images/mon-projet.png`).
3. Enregistrez le fichier : la page « Projets » se mettra à jour automatiquement sans modification du code.

## ☁️ Déployer sur Vercel

1. **Créer un dépôt Git** : initialisez un dépôt git et poussez le code sur GitHub :

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-utilisateur/votre-repo.git
   git push -u origin main
   ```

2. **Importer le projet sur Vercel** :
   - Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous.
   - Cliquez sur « New Project » et sélectionnez votre dépôt GitHub.
   - Vercel détecte automatiquement Next.js et propose des valeurs par défaut. Validez et lancez le déploiement.

3. **URL du site** : après le déploiement, Vercel fournit une URL de type `https://prenom-nom-portfolio.vercel.app`. Vous pouvez la personnaliser dans les paramètres du projet si vous le souhaitez.

4. **Générer un QR code** : pour ajouter un QR code vers votre portfolio sur votre CV, utilisez un service en ligne comme [qr-code-generator.com](https://www.qr-code-generator.com/). Entrez l’URL de votre site déployé et téléchargez l’image du QR code que vous pourrez intégrer à vos documents.

## 📌 Personnalisation

Voici quelques idées pour aller plus loin :

- Ajoutez une animation de texte « typing » (effet dactylographié) dans le hero avec `react-simple-typewriter` ou une implémentation maison en Framer Motion.
- Créez une timeline interactive pour visualiser votre parcours professionnel.
- Ajoutez une page `/blog` pour partager vos articles techniques (utilisez MDX pour un rendu flexible).
- Implémentez un formulaire de contact fonctionnel avec [EmailJS](https://www.emailjs.com/) ou une API Next.js.

Ce portfolio est une base solide pour présenter votre travail et peut être étendu selon vos besoins. N’hésitez pas à améliorer le design, tester d’autres palettes de couleurs, ou ajouter des fonctionnalités pour le rendre unique !