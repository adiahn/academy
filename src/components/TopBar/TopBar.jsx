import { useState } from 'react'
import './TopBar.css'

const TopBar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English')

  const languages = ['English', 'Hausa', 'Yoruba', 'Igbo']

  const socialLinks = [
    { name: 'Facebook', icon: 'f', href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: 'in', href: 'https://linkedin.com' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me' },
    { name: 'YouTube', icon: '▶', href: 'https://youtube.com' },
  ]

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__content">
          <div className="topbar__left">
            <div className="topbar__info">
              <span className="topbar__icon">📍</span>
              <span className="topbar__text">Katsina</span>
            </div>
            <div className="topbar__info">
              <span className="topbar__icon">✉</span>
              <span className="topbar__text">contact@kaseda.ng</span>
            </div>
          </div>

          <div className="topbar__right">
            <span className="topbar__follow">Follow Us On :</span>
            <div className="topbar__social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="topbar__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="topbar__divider"></div>
            <div className="topbar__language">
              <button
                className="topbar__language-button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                {selectedLanguage}
                <span className="topbar__language-arrow">▼</span>
              </button>
              {isLanguageOpen && (
                <div className="topbar__language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className="topbar__language-option"
                      onClick={() => {
                        setSelectedLanguage(lang)
                        setIsLanguageOpen(false)
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar

