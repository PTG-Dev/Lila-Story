/*

 /$$$$$$$  /$$$$$$$$ /$$$$$$  /$$$$$$$                      
| $$__  $$|__  $$__//$$__  $$| $$__  $$                     
| $$  \ $$   | $$  | $$  \__/| $$  \ $$  /$$$$$$  /$$    /$$
| $$$$$$$/   | $$  | $$ /$$$$| $$  | $$ /$$__  $$|  $$  /$$/
| $$____/    | $$  | $$|_  $$| $$  | $$| $$$$$$$$ \  $$/$$/ 
| $$         | $$  | $$  \ $$| $$  | $$| $$_____/  \  $$$/  
| $$         | $$  |  $$$$$$/| $$$$$$$/|  $$$$$$$   \  $/   
|__/         |__/   \______/ |_______/  \_______/    \_/    

20% AI
80% PTGDev
                                                            
*/  



import { useState, useEffect } from 'react'
import './IntroScreen.css'

function IntroScreen({ onStart }) {
  const [clicked, setClicked] = useState(false)
  const [etapeIntro, setEtapeIntro] = useState(0)

  useEffect(() => {
    if (!clicked) return

    // Étape 1: "are you still taking the lithium?" - 2s
    const timer1 = setTimeout(() => {
      setEtapeIntro(1)
    }, 0)

    // Étape 2: "Lila Story" - 2s
    const timer2 = setTimeout(() => {
      setEtapeIntro(2)
    }, 2000)

    // Étape 3: "Made By PTGDev" - 4s
    const timer3 = setTimeout(() => {
      setEtapeIntro(3)
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [clicked])

  const handleClick = () => {
    if (clicked) return
    setClicked(true)
    onStart()
  }

  if (!clicked) {
    return (
      <div className="intro-screen" onClick={handleClick}>
        <div className="intro-prompt">
          <div className="play-icon">▶</div>
          <p>Cliquez pour commencer</p>
        </div>
      </div>
    )
  }

  return (
    <div className="intro-screen">
      {etapeIntro === 1 && (
        <div className="intro-text fade-in-out">
          are you still taking the lithium?
        </div>
      )}
      {etapeIntro === 2 && (
        <div className="intro-text fade-in-out">
          Lila Story
        </div>
      )}
      {etapeIntro === 3 && (
        <div className="intro-text fade-in-out long">
          Made By PTGDev
        </div>
      )}
    </div>
  )
}

export default IntroScreen
