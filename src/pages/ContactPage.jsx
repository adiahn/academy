import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './ContactPage.css'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Contact form submitted:', formData)
        // TODO: Implement form submission logic
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Our Location',
            content: 'Katsina State, Nigeria',
            subContent: 'Visit us at our office'
        },
        {
            icon: Mail,
            title: 'Email Us',
            content: 'contact@kaseda.ng',
            subContent: 'We reply within 24 hours'
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: '+234 XXX XXX XXXX',
            subContent: 'Mon-Fri 8:00 AM - 5:00 PM'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            content: 'Monday - Friday',
            subContent: '8:00 AM - 5:00 PM WAT'
        }
    ]

    return (
        <div className="contact-page">
            <Header />

            {/* Hero Section */}
            <section className="contact-page__hero">
                <div className="contact-page__hero-overlay"></div>
                <div className="container">
                    <h1 className="contact-page__hero-title">Get In Touch</h1>
                    <p className="contact-page__hero-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-page__info">
                <div className="container">
                    <div className="contact-page__info-grid">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon
                            return (
                                <div key={index} className="contact-page__info-card">
                                    <div className="contact-page__info-icon">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="contact-page__info-title">{info.title}</h3>
                                    <p className="contact-page__info-content">{info.content}</p>
                                    <p className="contact-page__info-subcontent">{info.subContent}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-page__form-section">
                <div className="container">
                    <div className="contact-page__form-container">
                        <div className="contact-page__form-header">
                            <h2 className="contact-page__form-title">Send Us A Message</h2>
                            <p className="contact-page__form-subtitle">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <form className="contact-page__form" onSubmit={handleSubmit}>
                            <div className="contact-page__form-row">
                                <div className="contact-page__form-group">
                                    <label htmlFor="name" className="contact-page__label">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="contact-page__input"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact-page__form-group">
                                    <label htmlFor="email" className="contact-page__label">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="contact-page__input"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-page__form-row">
                                <div className="contact-page__form-group">
                                    <label htmlFor="phone" className="contact-page__label">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="contact-page__input"
                                        placeholder="+234 800 000 0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="contact-page__form-group">
                                    <label htmlFor="subject" className="contact-page__label">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="contact-page__input"
                                        placeholder="What is this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-page__form-group">
                                <label htmlFor="message" className="contact-page__label">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="contact-page__textarea"
                                    placeholder="Tell us more about your inquiry..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-page__submit-btn">
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage
