import { useState } from 'react'
import { Search, BookOpen, MessageCircle, HelpCircle, FileText, Video, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './SupportPage.css'

const SupportPage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [openFaqIndex, setOpenFaqIndex] = useState(null)

    const handleSearch = (e) => {
        e.preventDefault()
        console.log('Searching for:', searchQuery)
        // TODO: Implement search functionality
    }

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    const supportCategories = [
        {
            icon: BookOpen,
            title: 'Getting Started',
            description: 'Learn the basics of using KASEDA Digital Academy platform',
            color: 'blue',
            link: '#getting-started'
        },
        {
            icon: Video,
            title: 'Video Tutorials',
            description: 'Watch step-by-step guides to help you navigate our platform',
            color: 'green',
            link: '#tutorials'
        },
        {
            icon: FileText,
            title: 'Documentation',
            description: 'Browse our comprehensive guides and documentation',
            color: 'amber',
            link: '#documentation'
        },
        {
            icon: MessageCircle,
            title: 'Contact Support',
            description: 'Get in touch with our support team for personalized help',
            color: 'purple',
            link: '/contact'
        }
    ]

    const faqs = [
        {
            question: 'How do I create an account on KASEDA Digital Academy?',
            answer: 'Creating an account is easy! Click on the "Sign up" button in the top navigation bar, fill in your details including your name, email, phone number, and create a secure password. After completing the registration form and agreeing to our terms, click "Create Account" to get started.'
        },
        {
            question: 'Can I access courses offline?',
            answer: 'Yes! KASEDA Digital Academy offers offline learning capabilities. Once you download a course while connected to the internet, you can access it anytime, even without an internet connection. This feature is perfect for learners in areas with limited connectivity.'
        },
        {
            question: 'How do I enroll in a course?',
            answer: 'Browse our course catalog from the Courses section, select the course you\'re interested in, and click "Enroll Now". Some courses are free, while others may require payment. Once enrolled, you\'ll have immediate access to all course materials.'
        },
        {
            question: 'What types of certificates do you offer?',
            answer: 'Upon successful completion of a course, you will receive a certificate of completion personally endorsed by the relevant authority. These certificates are recognized and can be used to demonstrate your skills and knowledge to employers or educational institutions.'
        },
        {
            question: 'How can I track my learning progress?',
            answer: 'Your Dashboard provides a comprehensive overview of your learning journey. You can see completed lessons, ongoing courses, assessment scores, and overall progress. The platform tracks everything automatically as you complete modules and quizzes.'
        },
        {
            question: 'Is the platform mobile-friendly?',
            answer: 'Absolutely! KASEDA Digital Academy is fully optimized for mobile devices. You can access all courses, resources, and features from your smartphone or tablet, making it convenient to learn on the go.'
        },
        {
            question: 'How do I contact support if I have technical issues?',
            answer: 'If you encounter any technical difficulties, you can reach our support team through the Contact page or send an email to contact@kaseda.ng. Our team typically responds within 24 hours during business days.'
        },
        {
            question: 'Are there any prerequisites for the courses?',
            answer: 'Prerequisites vary by course. Some courses are designed for beginners and have no requirements, while others may require prior knowledge or completion of foundational courses. Check the course description for specific prerequisites before enrolling.'
        }
    ]

    return (
        <div className="support-page">
            <Header />

            {/* Hero Section */}
            <section className="support-page__hero">
                <div className="support-page__hero-overlay"></div>
                <div className="container">
                    <h1 className="support-page__hero-title">How Can We Help You?</h1>
                    <p className="support-page__hero-subtitle">
                        Find answers, tutorials, and support resources
                    </p>

                    {/* Search Bar */}
                    <form className="support-page__search-form" onSubmit={handleSearch}>
                        <div className="support-page__search-wrapper">
                            <Search className="support-page__search-icon" size={24} />
                            <input
                                type="text"
                                className="support-page__search-input"
                                placeholder="Search for help articles, guides, or FAQs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className="support-page__search-btn">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Support Categories */}
            <section className="support-page__categories">
                <div className="container">
                    <h2 className="support-page__section-title">Browse Support Topics</h2>
                    <p className="support-page__section-subtitle">Find the help you need quickly and easily</p>
                    <div className="support-page__categories-grid">
                        {supportCategories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <div key={index} className={`support-page__category-card support-page__category-card--${category.color}`}>
                                    <div className="support-page__category-icon">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="support-page__category-title">{category.title}</h3>
                                    <p className="support-page__category-description">{category.description}</p>
                                    <a href={category.link} className="support-page__category-btn">
                                        Explore <span className="support-page__category-arrow">→</span>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="support-page__faq">
                <div className="container">
                    <div className="support-page__faq-header">
                        <h2 className="support-page__section-title">Frequently Asked Questions</h2>
                        <p className="support-page__faq-subtitle">
                            Find quick answers to common questions about KASEDA Digital Academy
                        </p>
                    </div>

                    <div className="support-page__faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="support-page__faq-item">
                                <button
                                    className="support-page__faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <HelpCircle size={24} className="support-page__faq-icon" />
                                    <span>{faq.question}</span>
                                    {openFaqIndex === index ? (
                                        <ChevronUp size={24} className="support-page__faq-toggle" />
                                    ) : (
                                        <ChevronDown size={24} className="support-page__faq-toggle" />
                                    )}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="support-page__faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="support-page__cta">
                <div className="container">
                    <div className="support-page__cta-card">
                        <h2 className="support-page__cta-title">Still Need Help?</h2>
                        <p className="support-page__cta-description">
                            Our support team is here to assist you. Get in touch and we'll respond as soon as possible.
                        </p>
                        <a href="/contact" className="support-page__cta-btn">
                            <MessageCircle size={20} />
                            <span>Contact Support</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default SupportPage
