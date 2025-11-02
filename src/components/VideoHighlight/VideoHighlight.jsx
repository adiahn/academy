import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import './VideoHighlight.css'

const VideoHighlight = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  const handlePlayClick = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <section className="video-highlight" id="video-highlight" ref={sectionRef}>
      <div className="container">
        <div className={`video-highlight__content ${isVisible ? 'video-highlight__content--visible' : ''}`}>
          <div className="video-highlight__header">
            <h2 className="video-highlight__title">Watch Our Story</h2>
            <p className="video-highlight__subtitle">
              Discover how KASEDA Digital Academy is transforming entrepreneurship education
            </p>
          </div>
          <div className="video-highlight__player-wrapper">
            {!isPlaying ? (
              <div className="video-highlight__thumbnail" onClick={handlePlayClick}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                  alt="Video thumbnail - Students learning"
                  className="video-highlight__thumbnail-image"
                />
                <div className="video-highlight__overlay">
                  <button className="video-highlight__play-button" aria-label="Play video">
                    <Play size={64} fill="currentColor" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="video-highlight__video-container">
                <video
                  ref={videoRef}
                  className="video-highlight__video"
                  controls
                  autoPlay
                  poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoHighlight

