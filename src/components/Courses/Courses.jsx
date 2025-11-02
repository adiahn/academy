import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Clock, Users, Star } from 'lucide-react'
import './Courses.css'

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const courses = [
    {
      id: 1,
      title: 'Introduction to Entrepreneurship',
      category: 'Foundation',
      description: 'Learn the fundamentals of entrepreneurship, from idea generation to business planning and market analysis.',
      duration: '8 weeks',
      students: '2,450',
      rating: 4.8,
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
    {
      id: 2,
      title: 'Financial Literacy & Management',
      category: 'Finance',
      description: 'Master essential financial skills including budgeting, bookkeeping, cash flow management, and investment basics.',
      duration: '6 weeks',
      students: '1,890',
      rating: 4.9,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    },
    {
      id: 3,
      title: 'Business Development Strategies',
      category: 'Business',
      description: 'Develop growth strategies, learn customer acquisition techniques, and build sustainable business models.',
      duration: '10 weeks',
      students: '3,120',
      rating: 4.7,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      id: 4,
      title: 'Digital Marketing for Entrepreneurs',
      category: 'Marketing',
      description: 'Learn how to leverage digital platforms to market your business, build brand awareness, and reach customers.',
      duration: '7 weeks',
      students: '2,780',
      rating: 4.9,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 5,
      title: 'Leadership & Team Management',
      category: 'Management',
      description: 'Develop leadership skills, learn effective team management, and build high-performing teams.',
      duration: '5 weeks',
      students: '1,650',
      rating: 4.6,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      id: 6,
      title: 'Social Entrepreneurship',
      category: 'Impact',
      description: 'Learn how to build businesses that create social impact while maintaining financial sustainability.',
      duration: '8 weeks',
      students: '1,230',
      rating: 4.8,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80'
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
    <section className="courses" id="courses" ref={sectionRef}>
      <div className="container">
        <div className={`courses__header ${isVisible ? 'courses__header--visible' : ''}`}>
          <h2 className="courses__title">Featured Courses</h2>
          <p className="courses__subtitle">Explore our comprehensive entrepreneurship courses designed to accelerate your journey</p>
        </div>
        <div className="courses__grid">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`courses__card ${isVisible ? 'courses__card--visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="courses__card-image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="courses__card-image"
                  loading="lazy"
                />
                <div className="courses__card-overlay">
                  <span className="courses__card-category courses__card-category--overlay">{course.category}</span>
                </div>
              </div>
              <div className="courses__card-content">
                <div className="courses__card-header">
                  <div className="courses__card-rating">
                    <Star size={16} fill="#ffa726" color="#ffa726" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h3 className="courses__card-title">{course.title}</h3>
                <p className="courses__card-description">{course.description}</p>
                <div className="courses__card-meta">
                  <div className="courses__card-meta-item">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="courses__card-meta-item">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                  <div className="courses__card-level">{course.level}</div>
                </div>
                <button className="courses__card-button">
                  Enroll Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={`courses__footer ${isVisible ? 'courses__footer--visible' : ''}`}>
          <button className="courses__view-all">View All Courses</button>
        </div>
      </div>
    </section>
  )
}

export default Courses

