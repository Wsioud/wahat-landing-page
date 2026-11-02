# Wahat – Landing page d'une startup fictive

Mini projet Web (FIA3) – ISSAT Sousse – A.U. 2025/2026

**Auteur :** Votre nom (projet individuel)

Wahat est une startup **imaginaire** basée à Gafsa. Elle propose des capteurs solaires et une application qui indiquent aux agriculteurs des oasis quand et combien arroser. Tous les noms, chiffres, e-mails et numéros du site sont fictifs.

## Démonstration

Lien : *à compléter (GitHub Pages / Netlify)*

## Fonctionnalités

- Header fixe avec navigation fluide, qui se cache en descendant et réapparaît en remontant
- Sections : À propos, Services, Équipe, Témoignages, Contact
- Goutte d'eau 3D animée en CSS (chute, ombre, éclaboussures, ondes)
- Carrousel de témoignages (boutons, points, clavier, swipe)
- Validation avancée du formulaire de contact
- Animations au scroll (reveal) et compteurs animés
- Modal d'appel à l'action, dont la fermeture est mémorisée avec **localStorage**
- Design responsive (mobile, tablette, desktop) et accessibilité (aria, focus, mouvement réduit)
- SEO de base (meta, Open Graph, JSON-LD)

## Utilisation de localStorage

Le fichier `js/modal.js` enregistre la clé `wahat-modal-fermee` quand l'utilisateur ferme la modal. Elle ne s'affiche plus ensuite. Pour la revoir : outils de développement (F12) → Application → Local Storage → supprimer la clé.

## Lancer le projet

Le projet utilise des **modules JavaScript**, qui ne fonctionnent pas en ouvrant le fichier directement. Il faut un serveur local :

1. Ouvrir le dossier dans VS Code
2. Installer l'extension **Live Server**
3. Clic droit sur `index.html` → **Open with Live Server**

## Structure

```
├── index.html
├── style.css
├── README.md
└── js/
    ├── main.js       point d'entrée des modules
    ├── menu.js       menu qui se cache au scroll
    ├── reveal.js     animations au scroll
    ├── counters.js   compteurs animés
    ├── carousel.js   carrousel de témoignages
    ├── form.js       validation du formulaire
    └── modal.js      modal + localStorage
```

## Technologies

HTML5, CSS3 (animations), JavaScript (modules ES), VS Code, Live Server, validateurs W3C.
