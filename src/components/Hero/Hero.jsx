import './Hero.css'
import { useState } from 'react'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
    }
  }

  const backgroundImageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'

  return (
    <section className="hero" id="home" style={{ '--hero-bg-image': `url(${backgroundImageUrl})` }}>
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__badge">
              <span className="hero__badge-text">Trusted by Entrepreneurs Worldwide</span>
            </div>
            <h1 className="hero__title">
              Learn Business Skills from Industry Experts
            </h1>
            <p className="hero__subtitle">
              Master entrepreneurship, strategy, and leadership through comprehensive courses designed by successful business leaders.
            </p>
            <form className="hero__search" onSubmit={handleSearch}>
              <div className="hero__search-wrapper">
                <input
                  type="text"
                  className="hero__search-input"
                  placeholder="What do you want to learn today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="hero__search-button" aria-label="Search courses">
                  Search
                </button>
              </div>
            </form>
            <div className="hero__cta-group">
              <button className="hero__cta hero__cta--primary">
                Start Learning Today
              </button>
              <button className="hero__cta hero__cta--secondary">
                Browse Courses
              </button>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-number">10K+</div>
                <div className="hero__stat-label">Active Learners</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">500+</div>
                <div className="hero__stat-label">Expert Courses</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">4.8</div>
                <div className="hero__stat-label">
                  <span className="hero__stat-stars">★★★★★</span>
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
