# Lila Story

Une expérience interactive Discord-style racontant l'histoire d'une amitié qui se transforme en quelque chose de plus complexe.
https://ptg-dev.github.io/Lila-Story/
## 🎭 Description

Lila Story est une application web immersive qui simule une conversation Discord entre PTGDev et Lila, s'étalant sur 17 jours. L'histoire commence par une rencontre innocente sur Roblox et évolue vers une relation plus profonde, avant de prendre une tournure dramatique.

## ✨ Fonctionnalités

- **Interface Discord authentique** avec transparence et effets visuels
- **Vidéo de fond YouTube** en boucle avec effet de neige
- **Écran d'intro cinématique** avec messages qui apparaissent/disparaissent
- **Musique d'ambiance** "are you still taking the lithium?" en boucle
- **17 jours de conversations** progressives et réalistes
- **Transitions animées** entre les journées
- **Indicateur de frappe** pour Lila
- **Système de messages interactif** - tapez n'importe quoi pour envoyer le message prédéfini
- **Contrôle du volume** intégré
- **Fin dramatique** avec blocage et message système

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/PTG-Dev/Lila-Story.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🎮 Utilisation

1. Cliquez sur l'écran d'intro pour démarrer l'expérience
2. Regardez les 3 messages d'intro apparaître
3. L'application démarre avec une conversation bloquée
4. Cliquez sur "Retourner à nos anciennes conversations" après 5 secondes
5. Vivez l'histoire jour par jour en cliquant sur "Prochain jour →"
6. Utilisez le bouton 🔊 pour ajuster le volume de la musique
7. Cliquez sur "Effacer la mémoire" pour recommencer

## 🛠️ Technologies

- **React 18** - Framework UI
- **Vite** - Build tool et dev server
- **CSS3** - Animations et effets visuels
- **YouTube Iframe API** - Vidéo de fond

## 📁 Structure

```
src/
├── components/
│   ├── IntroScreen.jsx       # Écran d'intro avec 3 messages
│   ├── VideoBackground.jsx   # Vidéo YouTube + effet neige
│   ├── ChatContainer.jsx     # Container principal avec état bloqué
│   ├── LiveChat.jsx          # Chat en direct avec 17 jours
│   ├── DayTransition.jsx     # Transition entre les journées
│   └── ...
├── data/
│   └── firstMeetMessages.js  # Données des 17 jours de conversations
└── App.jsx                    # Composant racine

img/
├── PTGblue.png                # Avatar PTGDev
├── images.jpg                 # Avatar Lila
└── are you still taking the lithium_, tiktok audio.mp3
```

## 🎨 Personnalisation

Les conversations sont stockées dans `src/data/firstMeetMessages.js` et peuvent être facilement modifiées. Chaque jour contient:
- Une date (`date`)
- Un titre (`title`)
- Un tableau de messages avec `from` ('user' ou 'lila') et `text`

## 📝 Licence

Projet personnel - Tous droits réservés

## 👤 Auteur

**PTGDev**

---

Made with 💔 by PTGDev
