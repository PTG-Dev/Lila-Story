import './Message.css'

function Message({ message }) {
  return (
    <div className="message">
      <img 
        src={message.avatar} 
        alt={message.username} 
        className="message-avatar"
      />
      <div className="message-content">
        <div className="message-header">
          <span className="message-username">
            {message.username}
            {message.isBot && <span className="bot-tag">BOT</span>}
            {message.isSystem && <span className="system-tag">SYSTÈME</span>}
          </span>
          <span className="message-timestamp">{message.timestamp}</span>
        </div>
        <div className="message-text">
          {message.text}
        </div>
      </div>
    </div>
  )
}

export default Message
