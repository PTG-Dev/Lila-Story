import { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import LiveChat from './LiveChat'
import './ChatContainer.css'

function ChatContainer({ onReset, volume, setVolume }) {
  const [afficherChat, setAfficherChat] = useState(false)
  const [messageBot, setMessageBot] = useState(null)
  const [montrerBoutonRetour, setMontrerBoutonRetour] = useState(false)
  const [montrerNotification, setMontrerNotification] = useState(false)

  const envoyerMessage = (message) => {
    if (message.trim()) {
      const nouveauMessageBot = {
        username: 'Clyde',
        timestamp: 'Aujourd\'hui à ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        text: 'Votre message n\'a pas pu être envoyé car vous ne partagez aucun serveur avec le destinataire ou vous avez été bloqué.',
        avatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
        isBot: true
      }
      setMessageBot(nouveauMessageBot)
      
      setTimeout(() => {
        setMontrerBoutonRetour(true)
        setMontrerNotification(true)
      }, 5000)
    }
  }

  const demarrerChat = () => {
    setAfficherChat(true)
  }

  const reinitialiser = () => {
    setAfficherChat(false)
    setMessageBot(null)
    setMontrerBoutonRetour(false)
    setMontrerNotification(false)
    onReset()
  }

  const fermerNotification = () => {
    setMontrerNotification(false)
  }

  if (afficherChat) {
    return <LiveChat onReset={reinitialiser} volume={volume} setVolume={setVolume} />
  }

  return (
    <div className="chat-container">
      {montrerNotification && (
        <div className="notification" onClick={fermerNotification}>
          <span>💬 Vous pouvez maintenant retourner à votre première conversation</span>
          <button className="notification-close">×</button>
        </div>
      )}
      
      <ChatHeader />
      <ChatMessages botMessage={messageBot} />
      <ChatInput onSendMessage={envoyerMessage} />
      
      {montrerBoutonRetour && (
        <button className="return-button" onClick={demarrerChat}>
          Retourner à nos anciennes conversations
        </button>
      )}
    </div>
  )
}

export default ChatContainer
