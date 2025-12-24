import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react'
import logo from '../assets/logo.png'
import './SignupPage.css'

const SignupPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeToTerms, setAgreeToTerms] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Implement signup logic
        console.log('Signup data:', formData)
    }

    const benefits = [
        'Access to 500+ expert courses',
        'Certificates endorsed by KASEDA',
        'Learn at your own pace',
        'Join 10,000+ entrepreneurs',
        'Lifetime access to course materials',
        'Community support and networking'
    ]

    return (
        <div className="signup-page">
            <div className="signup-page__container">
                {/* Left Side - Form */}
                <div className="signup-page__form-section">
                    <div className="signup-page__form-wrapper">
                        <Link to="/" className="signup-page__logo">
                            <img src={logo} alt="KASEDA Digital Academy" />
                        </Link>

                        <div className="signup-page__header">
                            <h1 className="signup-page__title">Create Your Account</h1>
                            <p className="signup-page__subtitle">
                                Join thousands of entrepreneurs building their future
                            </p>
                        </div>

                        <form className="signup-page__form" onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="signup-page__form-group">
                                <label htmlFor="fullName" className="signup-page__label">
                                    Full Name
                                </label>
                                <div className="signup-page__input-wrapper">
                                    <User className="signup-page__input-icon" size={20} />
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="signup-page__input"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="signup-page__form-group">
                                <label htmlFor="email" className="signup-page__label">
                                    Email Address
                                </label>
                                <div className="signup-page__input-wrapper">
                                    <Mail className="signup-page__input-icon" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="signup-page__input"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="signup-page__form-group">
                                <label htmlFor="phone" className="signup-page__label">
                                    Phone Number
                                </label>
                                <div className="signup-page__input-wrapper">
                                    <Phone className="signup-page__input-icon" size={20} />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="signup-page__input"
                                        placeholder="+234 800 000 0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="signup-page__form-group">
                                <label htmlFor="password" className="signup-page__label">
                                    Password
                                </label>
                                <div className="signup-page__input-wrapper">
                                    <Lock className="signup-page__input-icon" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        className="signup-page__input"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="signup-page__password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="signup-page__form-group">
                                <label htmlFor="confirmPassword" className="signup-page__label">
                                    Confirm Password
                                </label>
                                <div className="signup-page__input-wrapper">
                                    <Lock className="signup-page__input-icon" size={20} />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="signup-page__input"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="signup-page__password-toggle"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label="Toggle confirm password visibility"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="signup-page__checkbox-group">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="signup-page__checkbox"
                                    checked={agreeToTerms}
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    required
                                />
                                <label htmlFor="terms" className="signup-page__checkbox-label">
                                    I agree to the{' '}
                                    <Link to="/terms" className="signup-page__link">Terms of Service</Link>
                                    {' '}and{' '}
                                    <Link to="/privacy" className="signup-page__link">Privacy Policy</Link>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="signup-page__submit-btn">
                                Create Account
                                <ArrowRight size={20} />
                            </button>

                            {/* Sign In Link */}
                            <p className="signup-page__footer-text">
                                Already have an account?{' '}
                                <Link to="/login" className="signup-page__link signup-page__link--bold">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Right Side - Benefits */}
                <div className="signup-page__info-section">
                    <div className="signup-page__info-content">
                        <div className="signup-page__info-badge">
                            KASEDA Digital Academy
                        </div>

                        <h2 className="signup-page__info-title">
                            Start Your Entrepreneurial Journey Today
                        </h2>

                        <p className="signup-page__info-description">
                            Join Nigeria's leading digital learning platform for entrepreneurs and business leaders.
                            Access world-class courses, connect with industry experts, and transform your business ideas into reality.
                        </p>

                        <div className="signup-page__benefits">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="signup-page__benefit-item">
                                    <CheckCircle className="signup-page__benefit-icon" size={20} />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="signup-page__stats">
                            <div className="signup-page__stat">
                                <div className="signup-page__stat-number">10K+</div>
                                <div className="signup-page__stat-label">Active Learners</div>
                            </div>
                            <div className="signup-page__stat">
                                <div className="signup-page__stat-number">500+</div>
                                <div className="signup-page__stat-label">Expert Courses</div>
                            </div>
                            <div className="signup-page__stat">
                                <div className="signup-page__stat-number">4.8★</div>
                                <div className="signup-page__stat-label">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
