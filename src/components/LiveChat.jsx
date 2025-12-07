import { useState, useEffect, useRef } from 'react'
import { firstMeetDays } from '../data/firstMeetMessages'
import { config } from '../config'
import DayTransition from './DayTransition'
import './LiveChat.css'

function LiveChat({ onReset, volume, setVolume }) {
  const [jourActuel, setJourActuel] = useState(0)
  const [numeroMessage, setNumeroMessage] = useState(0)
  const [messagesAffiches, setMessagesAffiches] = useState([])
  const [lilaEcrit, setLilaEcrit] = useState(false)
  const [texteInput, setTexteInput] = useState('')
  const [montrerTransition, setMontrerTransition] = useState(false)
  const [jourTermine, setJourTermine] = useState(false)
  const [afficherVolume, setAfficherVolume] = useState(false)
  const refScroll = useRef(null)

  const jourData = firstMeetDays[jourActuel]
  const messageCourant = jourData?.messages[numeroMessage]

  console.log('BASE_URL:', config.baseUrl) // Debug

  useEffect(() => {
    if (!messageCourant) {
      setJourTermine(true)
      return
    }
    
    if (messageCourant.from === 'lila') {
      setLilaEcrit(true)
      
      const delai = Math.random() * 2000 + 1500
      const timer = setTimeout(() => {
        setMessagesAffiches(prev => [...prev, messageCourant])
        setLilaEcrit(false)
        
        const prochainIndex = numeroMessage + 1
        if (prochainIndex >= jourData.messages.length) {
          setJourTermine(true)
        } else {
          setNumeroMessage(prochainIndex)
        }
      }, delai)

      return () => clearTimeout(timer)
    }
  }, [numeroMessage, jourActuel])

  useEffect(() => {
    refScroll.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messagesAffiches, lilaEcrit])

  const handleEnvoi = (e) => {
    e.preventDefault()
    if (!texteInput.trim() || !messageCourant || messageCourant.from !== 'user') return

    setMessagesAffiches(prev => [...prev, messageCourant])
    setTexteInput('')
    
    const prochainIndex = numeroMessage + 1
    
    if (prochainIndex >= jourData.messages.length) {
      setJourTermine(true)
    } else {
      setNumeroMessage(prochainIndex)
    }
  }

  const passerJourSuivant = () => {
    if (jourActuel < firstMeetDays.length - 1) {
      setMontrerTransition(true)
      setTimeout(() => {
        setMontrerTransition(false)
        setMessagesAffiches([])
        setJourActuel(jourActuel + 1)
        setNumeroMessage(0)
        setJourTermine(false)
      }, 3000)
    }
  }

  const inputActif = messageCourant?.from === 'user' && !lilaEcrit

  if (montrerTransition) {
    return <DayTransition dayTitle={firstMeetDays[jourActuel + 1]?.title} />
  }

  return (
    <div className="live-chat">
      <div className="live-chat-header">
        <div className="channel-info">
          <span className="channel-icon">#</span>
          <span className="channel-name">conversation-avec-lila</span>
          <span className="day-label">{jourData?.date}</span>
        </div>
        <div className="header-controls">
          <button 
            className="volume-button" 
            onClick={() => setAfficherVolume(!afficherVolume)}
            title="Contrôle du volume"
          >
            🔊
          </button>
          {afficherVolume && (
            <div className="volume-control">
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
              />
              <span>{Math.round(volume * 100)}%</span>
            </div>
          )}
          <button className="reset-button" onClick={onReset}>
            Effacer la mémoire
          </button>
        </div>
      </div>

      <div className="live-chat-messages">
        {messagesAffiches.map((msg, index) => {
          const estLila = msg.from === 'lila'
          const imgSrc = estLila ? config.assets.avatars.lila : config.assets.avatars.ptgdev
          return (
            <div key={index} className={`live-message ${msg.from}`}>
              <img 
                src={imgSrc}
                alt={msg.from} 
                className="live-avatar"
              />
              <div className="live-message-content">
                <span className="live-username">
                  {estLila ? 'Lila' : 'PTGDev'}
                </span>
                <p className="live-text">{msg.text}</p>
              </div>
            </div>
          )
        })}

        {lilaEcrit && (
          <div className="live-message lila">
            <img src={config.assets.avatars.lila} alt="lila" className="live-avatar" />
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={refScroll} />
      </div>

      <div className="live-chat-input">
        {jourTermine && jourActuel < firstMeetDays.length - 1 ? (
          <button className="next-day-button" onClick={passerJourSuivant}>
            Prochain jour →
          </button>
        ) : jourTermine && jourActuel === firstMeetDays.length - 1 ? (
          <div className="blocked-notification">
            <div className="system-icon">🚫</div>
            <div className="system-message">
              <strong>Vous ne pouvez plus envoyer de messages à Lila.</strong>
              <p>Cette personne ne reçoit plus vos requêtes.</p>
              <p className="blocked-text">→ Tu es bloqué.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleEnvoi}>
            <input
              type="text"
              value={texteInput}
              onChange={(e) => setTexteInput(e.target.value)}
              placeholder={inputActif ? "Écrire un message..." : "Attendez que Lila écrive..."}
              disabled={!inputActif}
              className="live-input"
            />
            <button type="submit" disabled={!inputActif || !texteInput.trim()}>
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default LiveChat
