import { useState } from 'react'
import { X } from 'lucide-react'
import './Login.css'

const Login = ({ isOpen, onClose }) => {
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
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <button className="login__close" onClick={onClose} aria-label="Close login">
          <X size={24} />
        </button>
        <div className="login__content">
          <h2 className="login__title">Welcome Back</h2>
          <p className="login__subtitle">Sign in to continue your learning journey</p>
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__field">
              <label htmlFor="email" className="login__label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="login__input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login__field">
              <label htmlFor="password" className="login__label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="login__input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login__options">
              <label className="login__remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="login__forgot">Forgot password?</a>
            </div>
            <button type="submit" className="login__submit">
              Sign In
            </button>
          </form>
          <div className="login__footer">
            <p>
              Don't have an account?{' '}
              <a href="#" className="login__link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


