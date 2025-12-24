import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
    }
  }

  const navItems = [
    { label: 'Home', href: '#home', path: '/' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <img src={logo} alt="KASEDA Digital Academy" className="header__logo-img" />
          </Link>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="header__nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="header__nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button className="header__search-btn" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/login" className="header__signin">
              <User size={18} />
              <span>Sign in</span>
            </Link>
            <button
              className="header__mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
