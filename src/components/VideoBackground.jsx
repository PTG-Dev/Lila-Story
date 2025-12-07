import './VideoBackground.css'

function VideoBackground({ volume }) {
  return (
    <div className="video-background">
      <iframe
        src="https://www.youtube.com/embed/JRAAsbq0Gk8?autoplay=1&mute=1&loop=1&playlist=JRAAsbq0Gk8&controls=0&showinfo=0&modestbranding=1&rel=0"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <div className="snow-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="snowflake" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.6 + 0.4,
            fontSize: `${Math.random() * 10 + 10}px`
          }}>❄</div>
        ))}
      </div>
    </div>
  )
}

export default VideoBackground
