import { useState, useRef, useEffect } from 'react'
import VideoBackground from './components/VideoBackground'
import ChatContainer from './components/ChatContainer'
import IntroScreen from './components/IntroScreen'
import './App.css'

function App() {
  const [compteurReset, setCompteurReset] = useState(0)
  const [introTermine, setIntroTermine] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const reinitialiserChat = () => {
    setCompteurReset(compteurReset + 1)
  }

  const demarrerExperience = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
    setTimeout(() => {
      setIntroTermine(true)
    }, 8000)
  }

  if (!introTermine) {
    return (
      <>
        <audio ref={audioRef} loop>
          <source src="./img/are you still taking the lithium_, tiktok audio.mp3" type="audio/mpeg" />
        </audio>
        <IntroScreen onStart={demarrerExperience} />
      </>
    )
  }

  return (
    <>
      <audio ref={audioRef} loop style={{ display: 'none' }}>
        <source src="./img/are you still taking the lithium_, tiktok audio.mp3" type="audio/mpeg" />
      </audio>
      <div className="app">
        <VideoBackground volume={volume} />
        <ChatContainer 
          key={compteurReset} 
          onReset={reinitialiserChat}
          volume={volume}
          setVolume={setVolume}
        />
      </div>
    </>
  )
}

export default App
