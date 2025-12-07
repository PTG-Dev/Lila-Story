import { useEffect, useRef } from 'react'
import Message from './Message'
import { messages } from '../data/messages'
import './ChatMessages.css'

function ChatMessages({ botMessage }) {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [botMessage])

  return (
    <div className="chat-messages">
      <div className="messages-list">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {botMessage && <Message message={botMessage} />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default ChatMessages
