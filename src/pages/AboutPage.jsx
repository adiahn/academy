import { useEffect, useRef, useState } from 'react'
import { Target, Users, Briefcase, TrendingUp, Award, ArrowRight } from 'lucide-react'
import Header from '../components/Header/Header'
import heroBackground from '../assets/WhatsApp Image 2025-12-18 at 07.53.32.jpeg'
import './AboutPage.css'

const AboutPage = () => {
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

    const objectives = [
        {
            icon: Target,
            title: 'Train 5 Million MSMEs in 4 Years',
            description: 'Comprehensive training programs for micro, small, and medium enterprises'
        },
        {
            icon: Briefcase,
            title: 'Create 1 Million New Jobs',
            description: 'Fostering entrepreneurship to generate sustainable employment opportunities'
        },
        {
            icon: Users,
            title: 'Empower 2 Million Young Nigerians',
            description: 'Supporting young entrepreneurs to startup new businesses across Nigeria'
        },
        {
            icon: TrendingUp,
            title: 'Grow Wealth and Revenue for MSMEs',
            description: 'Building economic prosperity for businesses and the country'
        },
        {
            icon: Award,
            title: 'Build the Largest Digital Ecosystem',
            description: 'Creating Africa\'s premier digital platform for MSMEs'
        }
    ]

    return (
        <div className="about-page">
            <Header />
            {/* Hero Section */}
            <section className="about-page__hero" style={{ '--about-hero-bg-image': `url(${heroBackground})` }}>
                <div className="about-page__hero-overlay"></div>
                <div className="container">
                    <h1 className="about-page__hero-title">About Us</h1>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-page__mission">
                <div className="container">
                    <div className="about-page__mission-content">
                        <div className="about-page__mission-image">
                            <div className="about-page__image-placeholder">
                                <span>Director General Photo</span>
                            </div>
                        </div>

                        <div className="about-page__mission-text">
                            <h2 className="about-page__mission-title">
                                Elevating Small Businesses, <span className="text-primary">Amplifying Impact</span>
                            </h2>

                            <div className="about-page__mission-description">
                                <p>
                                    We are committed to your growth and success as an entrepreneur and hence our
                                    mission is not just to educate but to empower and equip you with the tools and insights
                                    needed to thrive in the competitive landscape of the modern business world.
                                </p>

                                <p>
                                    Whether you are an established business owner, a budding entrepreneur, or someone
                                    eager to embark on your entrepreneurial journey, our platform serves as your gateway
                                    to a wealth of knowledge and practical skills that can be accessed anytime, anywhere,
                                    and on any device. Each of our meticulously crafted courses is accompanied by a
                                    certificate of completion, personally endorsed by the Honourable EXECUTIVE,
                                    ensuring the credibility and international recognition of your achievements.
                                </p>

                                <p>
                                    Join our vibrant community of passionate individuals, and embark on a transformative
                                    journey that is not only about learning but also about innovation, growth, and the
                                    realization of your dreams. Together, let's pave the way for a prosperous and thriving
                                    SME landscape in Nigeria and beyond.
                                </p>
                            </div>

                            <div className="about-page__director">
                                <p className="about-page__director-name">Director General Name</p>
                                <p className="about-page__director-title">Director General/CEO</p>
                                <p className="about-page__director-org">KASEDA - Katsina State Enterprise Development Agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Objectives */}
            <section className="about-page__objectives" ref={sectionRef}>
                <div className="container">
                    <h2 className="about-page__objectives-title">
                        Strategic <span className="text-highlight">Objectives</span>
                    </h2>

                    <div className="about-page__objectives-content">
                        <div className="about-page__objectives-image">
                            <div className="about-page__image-placeholder-horizontal">
                                <span>Strategic Objectives Image</span>
                            </div>
                        </div>

                        <div className="about-page__objectives-list">
                            {objectives.map((objective, index) => {
                                const Icon = objective.icon
                                return (
                                    <div
                                        key={index}
                                        className={`about-page__objective-item ${isVisible ? 'about-page__objective-item--visible' : ''}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="about-page__objective-icon">
                                            <Icon size={24} />
                                        </div>
                                        <div className="about-page__objective-content">
                                            <h3 className="about-page__objective-title">{objective.title}</h3>
                                            <p className="about-page__objective-description">{objective.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="about-page__objectives-cta">
                        <button className="about-page__cta-button">
                            Start Learning
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Executive Governor Section */}
            <section className="about-page__governor">
                <div className="container">
                    <h2 className="about-page__section-title">Message from the Executive Governor</h2>

                    <div className="about-page__governor-content">
                        <div className="about-page__governor-image">
                            <div className="about-page__image-placeholder">
                                <span>Executive Governor Photo</span>
                            </div>
                        </div>

                        <div className="about-page__governor-text">
                            <h3 className="about-page__governor-name">His Excellency, Dikko Umar Radda, PhD</h3>
                            <p className="about-page__governor-title">Executive Governor, Katsina State | Gwagwaren Katsina</p>

                            <div className="about-page__governor-message">
                                <p>
                                    As the Executive Governor of Katsina State, I am deeply committed to fostering an
                                    environment where entrepreneurship and innovation flourish. The establishment of the
                                    Katsina State Enterprise Development Agency (KASEDA) represents our administration's
                                    unwavering dedication to empowering Micro, Small, and Medium Enterprises (MSMEs) –
                                    the backbone of our economy and the key to sustainable development and job creation.
                                </p>
                                <p>
                                    KASEDA Digital Academy is not just an educational platform; it is a transformative
                                    initiative designed to equip our youths, entrepreneurs, and business owners with
                                    world-class knowledge and practical skills needed to thrive in today's competitive
                                    global marketplace. Through data-driven governance and strategic investment in human
                                    capital development, we are building a resilient and prosperous Katsina State.
                                </p>
                                <p>
                                    Our vision extends beyond mere training. With the establishment of the N10 billion
                                    MSME Growth Fund and our commitment to reducing out-of-school children while promoting
                                    agricultural innovation and infrastructure development, we are creating a comprehensive
                                    ecosystem where businesses can start, grow, and succeed. I encourage all aspiring and
                                    established entrepreneurs to leverage this platform as we work together to build a
                                    thriving business landscape that will benefit not only Katsina State but Northern
                                    Nigeria and the entire nation.
                                </p>
                                <p>
                                    Let us embrace this opportunity to learn, innovate, and create the prosperous future
                                    we all envision. Together, we will transform challenges into opportunities and dreams
                                    into reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
