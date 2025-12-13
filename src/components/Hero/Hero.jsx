import './Hero.css'
import heroImage from '../../assets/hero-student.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Meet KASEDA Digital Academy
            </h1>
            <p className="hero__subtitle">
              Unlock your entrepreneurial potential with comprehensive business education 
              and skills development through our flexible online learning platform.
            </p>
            <button className="hero__cta">
              Learn more
            </button>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <img 
                src={heroImage}
                alt="KASEDA Digital Academy" 
                className="hero__image"
              />
              <div className="hero__badge">
                <div className="hero__badge-icon">K</div>
                <span className="hero__badge-text">Digital Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
