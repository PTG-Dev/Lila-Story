// Configuration centralisée pour les chemins d'assets
export const config = {
  // Base URL pour GitHub Pages ou local
  baseUrl: import.meta.env.BASE_URL,
  
  // Chemins des assets
  assets: {
    avatars: {
      ptgdev: `${import.meta.env.BASE_URL}img/PTGblue.png`,
      lila: `${import.meta.env.BASE_URL}img/images.jpg`,
    },
    audio: {
      background: `${import.meta.env.BASE_URL}img/are you still taking the lithium_, tiktok audio.mp3`,
    },
  },
  
  // Configuration de l'app
  app: {
    name: 'Lila Story',
    author: 'PTGDev',
    githubUrl: 'https://github.com/PTG-Dev/Lila-Story',
  }
}
