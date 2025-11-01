import { Play } from 'lucide-react'
import './Hero.css'
import heroImage from '../../assets/hero-student.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">KASEDA Digital Academy</h1>
            <p className="hero__subtitle">
              A comprehensive solution designed to empower entrepreneurship and close the skills gap
            </p>
            <p className="hero__description">
              Enabling continuous access to quality entrepreneurship education and development for aspiring entrepreneurs, educators, and parents.
            </p>
            <div className="hero__ctas">
              <button className="hero__cta hero__cta--primary">
                Get Started
              </button>
              <button className="hero__cta hero__cta--secondary">
                <Play size={20} />
                Watch Video
              </button>
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

