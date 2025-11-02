import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
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

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__content">
          <div className={`about__text ${isVisible ? 'about__text--visible' : ''}`}>
            <h2 className="about__heading">About KASEDA Digital Academy</h2>
            <p className="about__subheading">A Platform and an Education Model</p>
            <div className="about__description">
              <p>
                KASEDA Digital Academy is an online e-learning platform with mobile and offline capability 
                that enables continuous access to quality entrepreneurship education. It is highly flexible 
                and adaptable, allowing learners and educators to easily access comprehensive business development 
                resources and use it to complement existing learning efforts.
              </p>
              <p>
                The platform has been developed with a unique suite of online and offline functions that caters 
                for deployment in places with poor connectivity - often locations where aspiring entrepreneurs 
                find themselves unable to access quality digital education, tools and content.
              </p>
            </div>
            <button className="about__cta">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>
          <div className={`about__visual ${isVisible ? 'about__visual--visible' : ''}`}>
            <div className="about__image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Students and educators collaborating" 
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

