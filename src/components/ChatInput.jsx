import { useState } from 'react'
import './ChatInput.css'

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="input-wrapper">
          <button type="button" className="plus-button">+</button>
          <input
            type="text"
            className="chat-input"
            placeholder="Message @Lila"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="input-icons">
            <span className="input-icon">🎁</span>
            <span className="input-icon">😊</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChatInput
