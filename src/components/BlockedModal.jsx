import './BlockedModal.css'

function BlockedModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Impossible d'envoyer ce message</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="blocked-icon">🚫</div>
          <p className="blocked-message">
            Vous ne pouvez pas envoyer de message à un utilisateur avec lequel vous ne partagez pas de serveur.
          </p>
          <p className="blocked-submessage">
            Lila vous a peut-être bloqué ou quitté les serveurs communs.
          </p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>D'accord</button>
        </div>
      </div>
    </div>
  )
}

export default BlockedModal
