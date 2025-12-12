import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Empowering Entrepreneurs Through Quality Education
          </h1>
          <p className="hero__description">
            An online e-learning platform with mobile and offline capability that enables 
            continuous access to quality entrepreneurship education. Empowering entrepreneurs 
            with comprehensive business development resources to strengthen Nigeria's economy.
          </p>
          <button className="hero__cta">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
