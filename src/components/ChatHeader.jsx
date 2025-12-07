import './ChatHeader.css'

function ChatHeader({ onReset }) {
  return (
    <div className="chat-header">
      <div className="channel-info">
        <span className="channel-icon">#</span>
        <span className="channel-name">conversation-avec-lila</span>
      </div>
      <div className="header-icons">
        <span className="icon">🔔</span>
        <span className="icon">📌</span>
        <span className="icon">👥</span>
        <span className="icon">🔍</span>
      </div>
    </div>
  )
}

export default ChatHeader
