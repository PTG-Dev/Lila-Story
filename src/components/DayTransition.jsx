import { useEffect, useState } from 'react'
import './DayTransition.css'

function DayTransition({ dayTitle }) {
  const [afficher, setAfficher] = useState(false)

  useEffect(() => {
    setAfficher(true)
  }, [])

  return (
    <div className={`day-transition ${afficher ? 'show' : ''}`}>
      <h1 className="transition-text">{dayTitle}</h1>
      <p className="transition-subtitle">Prochaine journée</p>
    </div>
  )
}

export default DayTransition
