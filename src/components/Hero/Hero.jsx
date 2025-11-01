import './Hero.css'
import heroImage from '../assets/hero-student.png'

const Hero = () => {
  const ctaButtons = [
    { label: "I'm a Learner", variant: 'primary' },
    { label: "I'm an Educator", variant: 'accent-blue' },
    { label: "I'm a Parent", variant: 'accent-coral' },
  ]

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">KASEDA Digital Academy</h1>
            <p className="hero__subtitle">
              A comprehensive solution designed to empower entrepreneurship and close the skills gap
            </p>
            <div className="hero__divider"></div>
            <p className="hero__description">
              Enabling continuous access to quality entrepreneurship education and development
            </p>
            <div className="hero__ctas">
              {ctaButtons.map((button) => (
                <button
                  key={button.label}
                  className={`hero__cta hero__cta--${button.variant}`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__visual-content">
              <img 
                src={heroImage}
                alt="Black female student with learning materials" 
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

