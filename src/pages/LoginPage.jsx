import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-page__left">
        <div className="login-page__brand">
          <h1 className="login-page__brand-name">KASEDA Digital Academy</h1>
          <p className="login-page__brand-tagline">Empowering Entrepreneurs Through Quality Education</p>
        </div>
      </div>
      <div className="login-page__right">
        <div className="login-page__form-container">
          <div className="login-page__form-header">
            <h2 className="login-page__title">Welcome Back</h2>
            <p className="login-page__subtitle">Sign in to your account</p>
          </div>
          <form className="login-page__form" onSubmit={handleSubmit}>
            <div className="login-page__field">
              <label htmlFor="email" className="login-page__label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="login-page__input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-page__field">
              <label htmlFor="password" className="login-page__label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="login-page__input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-page__options">
              <label className="login-page__remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="login-page__forgot">Forgot password?</a>
            </div>
            <button type="submit" className="login-page__submit">
              Sign In
            </button>
          </form>
          <div className="login-page__footer">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="login-page__link">Sign up</Link>
            </p>
          </div>
          <div className="login-page__back">
            <Link to="/" className="login-page__back-link">← Back to home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
