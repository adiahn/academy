import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import heroStudentImage from '../../assets/hero-student.png'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  const highlights = [
    'Online & offline learning capabilities',
    'Mobile-optimized platform',
    'Expert-led entrepreneurship courses',
    'Comprehensive business resources'
  ]

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__content">
          <div className={`about__text ${isVisible ? 'about__text--visible' : ''}`}>
            <h2 className="about__heading">About KASEDA Digital Academy</h2>
            <p className="about__subheading">Empowering Entrepreneurs Through Quality Digital Education</p>

            <div className="about__description">
              <p>
                KASEDA Digital Academy is an innovative e-learning platform designed to democratize
                access to quality entrepreneurship education. With advanced mobile and offline capabilities,
                we ensure continuous learning regardless of internet connectivity challenges.
              </p>
              <p>
                Our platform serves aspiring entrepreneurs in emerging markets, providing comprehensive
                business development resources, expert-led courses, and practical tools that complement
                and enhance existing educational efforts.
              </p>
            </div>

            <ul className="about__highlights">
              {highlights.map((highlight, index) => (
                <li key={index} className="about__highlight-item">
                  <Check size={20} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <button className="about__cta">
              Learn More About Us
              <ArrowRight size={18} />
            </button>
          </div>

          <div className={`about__visual ${isVisible ? 'about__visual--visible' : ''}`}>
            <div className="about__image-wrapper">
              <img
                src={heroStudentImage}
                alt="Students collaborating and learning together"
                className="about__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
