[![Node.js](https://img.shields.io/badge/Node.js-v22_LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Angular](https://img.shields.io/badge/Angular-v17.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Déployé_sur-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![Statut](https://img.shields.io/badge/Statut-En_production-22c55e?style=for-the-badge)](.)

<div align="center">

# 📐 Mémoire Angular — v17 à v21

**Un référentiel pédagogique interactif couvrant 4 ans d'évolution du framework Angular**



</div>

---

## 🎯 Présentation

Ce projet est un **mémoire interactif** sur le framework Angular, conçu comme une application web éducative à part entière. Il ne s'agit pas d'un simple PDF ou d'une documentation statique : chaque leçon est un composant Angular navigable, versionné et documenté selon l'évolution du framework de la **v17 à la v21**.

> **Auteur** : Alain Guillon — Développeur fullstack & formateur technique

---

## 📚 Structure du curriculum

Le mémoire est organisé en **27 leçons** réparties sur **4 parcours** :

| Parcours | Leçons | Contenu |
|----------|--------|---------|
| 🔧 **Installation & Styles** | Guide | Angular CLI, Node 22, Tailwind v3/v4, CSS natif |
| 🟢 **Fondamentaux Angular** | L1 → L11 | Architecture, composants, binding, directives, services, routing, lifecycle |
| 📝 **Formulaires Réactifs** | L12 → L23 | FormControl, FormGroup, FormBuilder, validateurs, CVA, FormArray |
| ⚡ **Concepts Modernes** | L24 → L27 | Signals, HttpClient, Guards fonctionnels, Zoneless, `@defer` |

Chaque leçon dispose d'une **matrice de versioning v17→v21** avec badges et notes contextuelles sur les évolutions du framework.

---

## ⚙️ Prérequis

> [!IMPORTANT]
> **Node.js 22 LTS est recommandé** pour ce projet — sécurité renforcée, compatibilité garantie avec Angular v17 à v21.

```bash
# Via nvm (macOS / Linux / WSL)
nvm install 22 && nvm use 22

# Via nvm-windows
nvm install 22 && nvm use 22

# Vérification
node --version   # → v22.x.x
npm --version    # → 10.x.x
```

---

## 🚀 Installation & Démarrage

### Cloner le projet

```bash
git clone https://github.com/zyrass/angular-formulaire.git
cd angular-formulaire
```

### Installer les dépendances

> [!NOTE]
> Le projet utilise **Tailwind CSS v4** (CSS-First) avec Angular CLI v17.
> Angular CLI v17 déclare une `peerDependency` optionnelle sur Tailwind v2/v3.
> Utilisez `--legacy-peer-deps` pour contourner cet avertissement sans impact fonctionnel.

```bash
npm install --legacy-peer-deps
```

**Vous n'avez pas encore Node 22 d'actif ?** Créez d'abord le projet sans installer, puis basculez :

```bash
ng new mon-projet --skip-install   # génère la structure sans npm install
cd mon-projet
nvm use 22                         # active Node 22
npm install --legacy-peer-deps     # installe avec la bonne version
```

### Lancer le serveur de développement

```bash
npm start
```

Ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

---

## 🛠️ Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Build de production → `dist/angular-formulaire/browser/` |
| `npm run watch` | Build continu en mode développement |
| `npm test` | Tests unitaires via Karma |

---

## 📦 Déploiement Netlify

Le fichier `netlify.toml` est préconfiguré à la racine du projet :

```toml
[build]
  command = "npm run build"
  publish = "dist/angular-formulaire/browser"

[build.environment]
  NODE_VERSION = "22"
```

**Procédure :**
1. Pousser sur GitHub
2. Connecter le dépôt sur [netlify.com](https://netlify.com)
3. Netlify détecte `netlify.toml` automatiquement — aucune config manuelle
4. ✅ Déployé avec Node 22, redirect SPA et headers de sécurité

---

## 🏗️ Architecture technique

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navbar responsive sticky
│   │   ├── footer/          # Pied de page
│   │   ├── home/            # Page d'accueil (4 tracks)
│   │   ├── setup/           # Guide Installation & CSS
│   │   ├── cours/           # Sommaire de chaque track (routing dynamique)
│   │   └── cours/
│   │       ├── cours-01/    # Architecture Angular
│   │       ├── cours-02/    # ... jusqu'à ...
│   │       └── cours-27/    # Standalone Components
│   ├── shared/
│   │   ├── interfaces/      # Lesson.interface.ts
│   │   └── services/        # LessonService (données + versioning)
│   └── app-routing.module.ts
└── styles.css                # Tailwind v4 CSS-First + scrollbar custom
```

---

## 🎨 Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| Angular | 17.2 | Framework principal (NgModule) |
| Tailwind CSS | 4.0 | Styling CSS-First |
| @tailwindcss/forms | latest | Reset des formulaires natifs |
| Angular SSR | 17.2.1 | Server-Side Rendering |
| RxJS | 7.8 | Programmation réactive |
| TypeScript | 5.x | Typage strict |

---

## 📊 Score pédagogique

| Dimension | Score |
|-----------|-------|
| Pédagogie & structure | 8.5/10 |
| Contenu technique | 8.5/10 |
| Cohérence versions v17→v21 | 8/10 |
| Interface utilisateur | 8.5/10 |
| Architecture code | 7.5/10 |
| **Global** | **8.2 / 10** |

---

## ⚠️ Avertissements connus

> [!WARNING]
> **48 vulnérabilités npm** subsistent après `npm audit fix` (2 faibles, 14 modérées, 31 élevées, 1 critique). Elles sont issues des dépendances de développement d'Angular CLI v17 et n'affectent pas le bundle de production.

> [!NOTE]
> Ce projet utilise l'architecture **NgModule** (standard v17) à des fins pédagogiques. En production sur Angular 18+, `bootstrapApplication()` et les composants standalone sont la norme.

---

<div align="center">

Codé avec ❤️ par **Alain Guillon**

</div>
