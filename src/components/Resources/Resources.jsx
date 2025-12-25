import { useEffect, useRef, useState } from 'react'
import bgImage from '../../assets/bg.jpeg'
import './Resources.css'

const Resources = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const resources = [
    {
      id: 'lessons',
      title: 'Lessons for Learners',
      count: '15,417',
      description: 'Self-paced modules on entrepreneurship, business development, financial literacy, and skills training for aspiring entrepreneurs.',
      hoverContent: 'Explore comprehensive learning modules designed to build your entrepreneurial skills from the ground up.',
      color: 'blue'
    },
    {
      id: 'assessments',
      title: 'Assessments and Quizzes',
      count: '140',
      description: 'Assessments and quizzes for entrepreneurs and educators to track progress in business skills, financial management, and entrepreneurial development.',
      hoverContent: 'Test your knowledge and track your progress with interactive assessments and detailed feedback.',
      color: 'green'
    },
    {
      id: 'guides',
      title: 'Tips & Guides',
      count: '20',
      description: 'Informative articles, handouts, and guides for entrepreneurs and educators on topics related to business development, entrepreneurship, and financial literacy.',
      hoverContent: 'Access expert insights, practical tips, and actionable guides to accelerate your entrepreneurial journey.',
      color: 'amber'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
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
    <section className="resources" id="courses" ref={sectionRef}>
      <div className="resources__background">
        <img src={bgImage} alt="Background" className="resources__bg-image" />
      </div>
      <div className="container">
        <div className={`resources__header ${isVisible ? 'resources__header--visible' : ''}`}>
          <h2 className="resources__title">Content & Resources for Learners</h2>
        </div>
        <div className="resources__grid">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className={`resources__card resources__card--${resource.color} ${isVisible ? 'resources__card--visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="resources__card-front">
                <div className="resources__card-count">{resource.count}</div>
                <h3 className="resources__card-title">{resource.title}</h3>
                <p className="resources__card-description">{resource.description}</p>
              </div>
              <div className="resources__card-back">
                <h3 className="resources__card-title">{resource.title}</h3>
                <p className="resources__card-hover-content">{resource.hoverContent}</p>
                <button className="resources__card-button">Explore More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources

