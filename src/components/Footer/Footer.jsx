import { MapPin, Mail, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Courses', href: '#courses' },
      { label: 'About Us', href: '#about' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Lessons', href: '#lessons' },
      { label: 'Assessments', href: '#assessments' },
      { label: 'Tips & Guides', href: '#guides' },
      { label: 'Support', href: '#support' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="footer__logo">
              <span className="footer__logo-icon">K</span>
              <span className="footer__logo-text">KASEDA Digital Academy</span>
            </div>
            <p className="footer__description">
              Empowering entrepreneurship through quality digital education and continuous learning.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Resources</h3>
            <ul className="footer__links">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <MapPin className="footer__contact-icon" size={18} />
                <span>Katsina, Nigeria</span>
              </li>
              <li className="footer__contact-item">
                <Mail className="footer__contact-icon" size={18} />
                <span>contact@kaseda.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            {footerLinks.legal.map((link, index) => (
              <span key={link.label}>
                {index > 0 && ' | '}
                <a href={link.href} className="footer__legal-link">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
          <p className="footer__copyright">
            © {currentYear} KASEDA Digital Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

