import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Courses', href: '#courses' },
    { label: 'About Us', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <span className="header__logo-icon">K</span>
          </div>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="header__nav-item">
                  <a
                    href={item.href}
                    className={`header__nav-link ${item.active ? 'header__nav-link--active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="header__mobile-actions">
              <button className="header__mobile-login" onClick={() => setIsMobileMenuOpen(false)}>Login</button>
              <button className="header__mobile-signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</button>
            </div>
          </nav>

          <div className="header__actions">
            <button className="header__login">Login</button>
            <button className="header__signup">Sign Up</button>
            <button
              className="header__mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="header__mobile-toggle-icon"></span>
              <span className="header__mobile-toggle-icon"></span>
              <span className="header__mobile-toggle-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

