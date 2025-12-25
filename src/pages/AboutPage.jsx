import { useState } from 'react'
import { Target, Users, Award, TrendingUp, BookOpen, Lightbulb } from 'lucide-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import governorImage from '../assets/he.jpg'
import dgImage from '../assets/dr.jpg'
import './AboutPage.css'

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('mission')

    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We are committed to delivering world-class education and resources.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Building a supportive network of entrepreneurs and learners.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Embracing new technologies and teaching methodologies.'
        },
        {
            icon: Award,
            title: 'Impact',
            description: 'Creating measurable change in communities across Nigeria.'
        }
    ]

    const objectives = [
        'Train 5 Million MSMEs in 4 years through comprehensive programs',
        'Create 1 Million new jobs by fostering entrepreneurship',
        'Empower 2 Million young Nigerians to start successful businesses',
        'Build the largest digital MSME ecosystem in Africa',
        'Grow wealth and revenue for small and medium enterprises'
    ]

    return (
        <div className="about-page-new">
            <Header />

            {/* Simple Hero */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__content">
                        <h1 className="about-hero__title">Empowering Entrepreneurs, Building Futures</h1>
                        <p className="about-hero__subtitle">
                            KASEDA Digital Academy is transforming lives through accessible, quality entrepreneurship education
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section - MOVED TO TOP & BIGGER */}
            <section className="about-leadership">
                <div className="container">
                    <h2 className="about-section-title">Leadership</h2>

                    <div className="about-leader">
                        <div className="about-leader__photo">
                            <div className="about-leader__placeholder">Governor Photo</div>
                        </div>
                        <div className="about-leader__info">
                            <h3 className="about-leader__name">His Excellency, Dikko Umar Radda, PhD, CON</h3>
                            <p className="about-leader__position">Executive Governor, Katsina State</p>
                            <div className="about-leader__message">
                                <p>
                                    As Executive Governor, I am committed to creating an environment where entrepreneurship and innovation
                                    flourish. KASEDA Digital Academy represents our dedication to empowering MSMEs—the backbone of our economy.
                                </p>
                                <p>
                                    Through strategic investment in human capital and the N10 billion MSME Growth Fund, we are building
                                    a comprehensive ecosystem where businesses can start, grow, and succeed.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-leader about-leader--reverse">
                        <div className="about-leader__photo">
                            <div className="about-leader__placeholder">Director General Photo</div>
                        </div>
                        <div className="about-leader__info">
                            <h3 className="about-leader__name">Director General</h3>
                            <p className="about-leader__position">Director General/CEO, KASEDA</p>
                            <div className="about-leader__message">
                                <p>
                                    We are committed to your growth and success. Our mission is to empower you with the tools and insights
                                    needed to thrive in the modern business world.
                                </p>
                                <p>
                                    Join our vibrant community and embark on a transformative journey of learning, innovation, and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Tabs */}
            <section className="about-tabs">
                <div className="container">
                    <div className="about-tabs__header">
                        <button
                            className={`about-tabs__btn ${activeTab === 'mission' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mission')}
                        >
                            Our Mission
                        </button>
                        <button
                            className={`about-tabs__btn ${activeTab === 'vision' ? 'active' : ''}`}
                            onClick={() => setActiveTab('vision')}
                        >
                            Our Vision
                        </button>
                        <button
                            className={`about-tabs__btn ${activeTab === 'objectives' ? 'active' : ''}`}
                            onClick={() => setActiveTab('objectives')}
                        >
                            Strategic Goals
                        </button>
                    </div>

                    <div className="about-tabs__content">
                        {activeTab === 'mission' && (
                            <div className="about-tabs__panel">
                                <h2>Empowering Through Education</h2>
                                <p>
                                    Our mission is to democratize access to quality entrepreneurship education across Nigeria and beyond.
                                    We believe that every aspiring entrepreneur deserves the tools, knowledge, and support needed to succeed
                                    in today's competitive business landscape.
                                </p>
                                <p>
                                    Through innovative digital learning solutions, we break down barriers of geography, connectivity, and
                                    resources, ensuring that quality business education reaches everyone, everywhere.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="about-tabs__panel">
                                <h2>A Future of Thriving Entrepreneurs</h2>
                                <p>
                                    We envision a Nigeria where entrepreneurship thrives, where every individual with a business idea
                                    has access to the education and resources needed to turn that idea into reality.
                                </p>
                                <p>
                                    By 2028, we aim to be Africa's leading digital platform for MSME development, having transformed
                                    millions of lives and created a sustainable ecosystem of successful entrepreneurs.
                                </p>
                            </div>
                        )}

                        {activeTab === 'objectives' && (
                            <div className="about-tabs__panel">
                                <h2>Strategic Objectives</h2>
                                <ul className="about-objectives__list">
                                    {objectives.map((objective, index) => (
                                        <li key={index}>
                                            <BookOpen size={20} />
                                            <span>{objective}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <h2 className="about-section-title">Our Core Values</h2>
                    <div className="about-values__grid">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <div key={index} className="about-value-card">
                                    <div className="about-value-card__icon">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="about-value-card__title">{value.title}</h3>
                                    <p className="about-value-card__description">{value.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage
