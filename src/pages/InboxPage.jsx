import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Inbox, 
  BookOpen, 
  ClipboardList, 
  Users, 
  Settings, 
  LogOut,
  Search,
  Menu,
  X,
  Mail,
  Star,
  Archive,
  Trash2,
  Reply,
  ReplyAll,
  Forward,
  MoreVertical,
  Filter
} from 'lucide-react'
import './InboxPage.css'

const InboxPage = () => {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('inbox')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(null)

  const handleLogout = () => {
    navigate('/login')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'inbox', label: 'Inbox', icon: Inbox, path: '/inbox' },
    { id: 'lesson', label: 'Lesson', icon: BookOpen, path: '/dashboard' },
    { id: 'task', label: 'Task', icon: ClipboardList, path: '/dashboard' },
    { id: 'group', label: 'Group', icon: Users, path: '/dashboard' },
  ]

  const messages = [
    {
      id: 1,
      from: 'Ibrahim Musa',
      subject: 'Welcome to Business Planning Course',
      preview: 'Congratulations on enrolling in our Business Planning course. This course will help you develop...',
      time: '2 hours ago',
      unread: true,
      starred: false
    },
    {
      id: 2,
      from: 'Aminu Abdullahi',
      subject: 'Financial Management Assignment Due',
      preview: 'Reminder: Your Financial Management assignment is due in 3 days. Please submit...',
      time: '5 hours ago',
      unread: true,
      starred: true
    },
    {
      id: 3,
      from: 'Fatima Usman',
      subject: 'Marketing Strategy Workshop Invitation',
      preview: 'You are invited to attend our upcoming Marketing Strategy workshop scheduled for...',
      time: '1 day ago',
      unread: false,
      starred: false
    },
    {
      id: 4,
      from: 'Hassan Bello',
      subject: 'Course Progress Update',
      preview: 'Great progress on your entrepreneurship course! You have completed 60% of the modules...',
      time: '2 days ago',
      unread: false,
      starred: false
    },
    {
      id: 5,
      from: 'Aisha Lawal',
      subject: 'Business Development Resources',
      preview: 'I have compiled a list of additional resources that will help you in your business development journey...',
      time: '3 days ago',
      unread: false,
      starred: true
    },
    {
      id: 6,
      from: 'Ibrahim Musa',
      subject: 'Weekly Business Tips Newsletter',
      preview: 'This week we focus on customer retention strategies and building long-term relationships...',
      time: '4 days ago',
      unread: false,
      starred: false
    }
  ]

  const handleMessageClick = (message) => {
    setSelectedMessage(message)
  }

  const handleBackToList = () => {
    setSelectedMessage(null)
  }

  return (
    <div className="inbox-page">
      {isMobileMenuOpen && (
        <div className="inbox-page__overlay" onClick={closeMobileMenu}></div>
      )}
      <aside className={`inbox-page__sidebar ${isMobileMenuOpen ? 'inbox-page__sidebar--open' : ''}`}>
        <button className="inbox-page__mobile-close" onClick={closeMobileMenu}>
          <X size={24} />
        </button>
        <div className="inbox-page__logo">
          <span className="inbox-page__logo-text">KASEDA</span>
        </div>

        <nav className="inbox-page__nav">
          <div className="inbox-page__nav-content">
            <div className="inbox-page__nav-section">
              <h3 className="inbox-page__nav-title">OVERVIEW</h3>
              <ul className="inbox-page__nav-list">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <button
                        className={`inbox-page__nav-item ${activeNav === item.id ? 'inbox-page__nav-item--active' : ''}`}
                        onClick={() => {
                          setActiveNav(item.id)
                          closeMobileMenu()
                          navigate(item.path)
                        }}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="inbox-page__nav-footer">
            <div className="inbox-page__nav-section">
              <h3 className="inbox-page__nav-title">SETTINGS</h3>
              <ul className="inbox-page__nav-list">
                <li>
                  <button className="inbox-page__nav-item" onClick={closeMobileMenu}>
                    <Settings size={20} />
                    <span>Settings</span>
                  </button>
                </li>
                <li>
                  <button className="inbox-page__nav-item inbox-page__nav-item--logout" onClick={() => {
                    handleLogout()
                    closeMobileMenu()
                  }}>
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>

      <main className="inbox-page__main">
        <button className="inbox-page__mobile-toggle" onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>

        {!selectedMessage ? (
          <>
            <div className="inbox-page__header">
              <h1 className="inbox-page__title">Inbox</h1>
              <div className="inbox-page__header-actions">
                <button className="inbox-page__action-btn">
                  <Filter size={18} />
                </button>
                <div className="inbox-page__search">
                  <Search size={18} />
                  <input type="text" placeholder="Search messages..." />
                </div>
              </div>
            </div>

            <div className="inbox-page__toolbar">
              <div className="inbox-page__toolbar-left">
                <button className="inbox-page__toolbar-btn">
                  <Archive size={18} />
                  Archive
                </button>
                <button className="inbox-page__toolbar-btn">
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
              <div className="inbox-page__toolbar-right">
                <span className="inbox-page__count">{messages.filter(m => m.unread).length} unread</span>
              </div>
            </div>

            <div className="inbox-page__messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`inbox-page__message ${message.unread ? 'inbox-page__message--unread' : ''}`}
                  onClick={() => handleMessageClick(message)}
                >
                  <div className="inbox-page__message-checkbox">
                    <input type="checkbox" />
                  </div>
                  <button className="inbox-page__message-star">
                    <Star size={18} fill={message.starred ? 'currentColor' : 'none'} />
                  </button>
                  <div className="inbox-page__message-content">
                    <div className="inbox-page__message-header">
                      <span className="inbox-page__message-from">{message.from}</span>
                      <span className="inbox-page__message-time">{message.time}</span>
                    </div>
                    <div className="inbox-page__message-subject">{message.subject}</div>
                    <div className="inbox-page__message-preview">{message.preview}</div>
                  </div>
                  <button className="inbox-page__message-more">
                    <MoreVertical size={18} />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="inbox-page__message-view">
            <button className="inbox-page__back-btn" onClick={handleBackToList}>
              ← Back to Inbox
            </button>
            <div className="inbox-page__message-detail">
              <div className="inbox-page__message-detail-header">
                <div>
                  <h2 className="inbox-page__message-detail-subject">{selectedMessage.subject}</h2>
                  <div className="inbox-page__message-detail-meta">
                    <span className="inbox-page__message-detail-from">From: {selectedMessage.from}</span>
                    <span className="inbox-page__message-detail-time">{selectedMessage.time}</span>
                  </div>
                </div>
                <div className="inbox-page__message-detail-actions">
                  <button className="inbox-page__detail-action">
                    <Reply size={18} />
                  </button>
                  <button className="inbox-page__detail-action">
                    <ReplyAll size={18} />
                  </button>
                  <button className="inbox-page__detail-action">
                    <Forward size={18} />
                  </button>
                  <button className="inbox-page__detail-action">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
              <div className="inbox-page__message-detail-body">
                <p>{selectedMessage.preview}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default InboxPage

