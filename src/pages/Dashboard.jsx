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
  Send,
  Bell,
  Folder,
  MoreVertical,
  Play,
  ChevronLeft,
  ChevronRight,
  Plus,
  Menu,
  X
} from 'lucide-react'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inbox', label: 'Inbox', icon: Inbox },
    { id: 'lesson', label: 'Lesson', icon: BookOpen },
    { id: 'task', label: 'Task', icon: ClipboardList },
    { id: 'group', label: 'Group', icon: Users },
  ]

  const progressCards = [
    { watched: '2/8', title: 'Business Planning' },
    { watched: '3/8', title: 'Financial Management' },
    { watched: '1/8', title: 'Marketing Strategy' },
  ]

  const continueCourses = [
    { 
      category: 'BUSINESS', 
      title: "Essential Business Planning and Strategy Development",
      instructor: 'Ibrahim Musa',
      role: 'Business Consultant'
    },
    { 
      category: 'FINANCE', 
      title: "Financial Management for Small Business Owners",
      instructor: 'Aminu Abdullahi',
      role: 'Financial Advisor'
    },
    { 
      category: 'MARKETING', 
      title: "Digital Marketing and Customer Acquisition Strategies",
      instructor: 'Fatima Usman',
      role: 'Marketing Expert'
    },
  ]

  const mentors = [
    { name: 'Ibrahim Musa', date: '25/2/2023', type: 'BUSINESS', course: 'Strategic Business Planning' },
    { name: 'Aminu Abdullahi', date: '25/2/2023', type: 'FINANCE', course: 'Financial Management Fundamentals' },
  ]

  const mentorList = [
    { name: 'Ibrahim Musa', role: 'Business Consultant' },
    { name: 'Aminu Abdullahi', role: 'Financial Advisor' },
    { name: 'Fatima Usman', role: 'Marketing Expert' },
    { name: 'Hassan Bello', role: 'Entrepreneurship Coach' },
    { name: 'Aisha Lawal', role: 'Business Development Specialist' },
  ]

  const progressData = [65, 80, 45, 90, 70]

  return (
    <div className="dashboard">
      {isMobileMenuOpen && (
        <div className="dashboard__overlay" onClick={closeMobileMenu}></div>
      )}
      <aside className={`dashboard__sidebar ${isMobileMenuOpen ? 'dashboard__sidebar--open' : ''}`}>
        <button className="dashboard__mobile-close" onClick={closeMobileMenu}>
          <X size={24} />
        </button>
        <div className="dashboard__logo">
          <span className="dashboard__logo-text">KASEDA</span>
        </div>

        <nav className="dashboard__nav">
          <div className="dashboard__nav-content">
            <div className="dashboard__nav-section">
              <h3 className="dashboard__nav-title">OVERVIEW</h3>
              <ul className="dashboard__nav-list">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                    <button
                      className={`dashboard__nav-item ${activeNav === item.id ? 'dashboard__nav-item--active' : ''}`}
                      onClick={() => {
                        setActiveNav(item.id)
                        closeMobileMenu()
                        if (item.id === 'inbox') {
                          navigate('/inbox')
                        }
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

          <div className="dashboard__nav-footer">
            <div className="dashboard__nav-section">
              <h3 className="dashboard__nav-title">SETTINGS</h3>
              <ul className="dashboard__nav-list">
                <li>
                  <button className="dashboard__nav-item" onClick={closeMobileMenu}>
                    <Settings size={20} />
                    <span>Settings</span>
                  </button>
                </li>
                <li>
                  <button className="dashboard__nav-item dashboard__nav-item--logout" onClick={() => {
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

      <main className="dashboard__main">
        <button className="dashboard__mobile-toggle" onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>
        <div className="dashboard__header">
          <div className="dashboard__search">
            <Search size={20} />
            <input type="text" placeholder="Search your course here...." />
          </div>
          <button className="dashboard__send-btn">
            <Send size={20} />
          </button>
        </div>

        <div className="dashboard__banner">
          <div className="dashboard__banner-content">
            <div className="dashboard__banner-badge">ONLINE COURSE</div>
            <h2 className="dashboard__banner-title">Sharpen Your Skills With Professional Online Courses</h2>
            <button className="dashboard__banner-btn">
              <Play size={16} fill="currentColor" />
              Join Now
            </button>
          </div>
        </div>

        <div className="dashboard__progress-cards">
          {progressCards.map((card, index) => (
            <div key={index} className="dashboard__progress-card">
              <Bell size={24} />
              <div className="dashboard__progress-info">
                <div className="dashboard__progress-watched">{card.watched} Watched</div>
                <div className="dashboard__progress-title">{card.title}</div>
              </div>
              <button className="dashboard__progress-more">
                <MoreVertical size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="dashboard__section">
          <h3 className="dashboard__section-title">Continue</h3>
          <div className="dashboard__continue-header">
            <button className="dashboard__nav-arrow">
              <ChevronLeft size={20} />
            </button>
            <button className="dashboard__nav-arrow">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="dashboard__continue-cards">
            {continueCourses.map((course, index) => (
              <div key={index} className="dashboard__continue-card">
                <div className="dashboard__continue-image">
                  <div className="dashboard__continue-overlay">
                    {index === 0 && 'How To Create Your Online Course Step 3'}
                    {index === 1 && 'LEARN SOFTWARE DEVELOPMENT WITH US!'}
                  </div>
                </div>
                <div className="dashboard__continue-content">
                  <div className="dashboard__continue-category">{course.category}</div>
                  <h4 className="dashboard__continue-title">{course.title}</h4>
                  <div className="dashboard__continue-instructor">
                    <div className="dashboard__continue-avatar"></div>
                    <div>
                      <div className="dashboard__continue-name">{course.instructor}</div>
                      <div className="dashboard__continue-role">{course.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard__section">
          <div className="dashboard__section-header">
            <h3 className="dashboard__section-title">Your Mentor</h3>
            <Link to="#" className="dashboard__see-all">See All</Link>
          </div>
          <div className="dashboard__mentor-table">
            <div className="dashboard__mentor-row dashboard__mentor-row--header">
              <div>Instructor Name & Date</div>
              <div>Course Type</div>
              <div>Course Title</div>
              <div>Actions</div>
            </div>
            {mentors.map((mentor, index) => (
              <div key={index} className="dashboard__mentor-row">
                <div className="dashboard__mentor-name-date">
                  <div className="dashboard__mentor-name">{mentor.name}</div>
                  <div className="dashboard__mentor-date">{mentor.date}</div>
                </div>
                <div className="dashboard__mentor-type">{mentor.type}</div>
                <div className="dashboard__mentor-course">{mentor.course}</div>
                <button className="dashboard__mentor-action">SHOW DETAILS</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <aside className="dashboard__rightbar">
        <div className="dashboard__rightbar-header">
          <h3 className="dashboard__rightbar-title">Your Profile</h3>
          <button className="dashboard__rightbar-more">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="dashboard__profile">
          <div className="dashboard__profile-avatar-wrapper">
            <div className="dashboard__profile-avatar"></div>
            <div className="dashboard__profile-ring"></div>
          </div>
          <h4 className="dashboard__profile-greeting">Good Morning Adnan</h4>
          <p className="dashboard__profile-message">Continue Your Journey And Achieve Your Target</p>
        </div>

        <div className="dashboard__profile-actions">
          <button className="dashboard__profile-action">
            <Bell size={20} />
          </button>
          <button className="dashboard__profile-action">
            <Folder size={20} />
          </button>
          <button className="dashboard__profile-action">
            <Settings size={20} />
          </button>
        </div>

        <div className="dashboard__progress-chart">
          <div className="dashboard__chart-bars">
            {progressData.map((height, index) => (
              <div key={index} className="dashboard__chart-bar" style={{ height: `${height}%` }}></div>
            ))}
          </div>
        </div>

        <div className="dashboard__mentor-section">
          <div className="dashboard__mentor-section-header">
            <h3 className="dashboard__mentor-section-title">Your Mentor</h3>
            <button className="dashboard__mentor-add">
              <Plus size={18} />
            </button>
          </div>
          <ul className="dashboard__mentor-list">
            {mentorList.map((mentor, index) => (
              <li key={index} className="dashboard__mentor-item">
                <div className="dashboard__mentor-avatar"></div>
                <div className="dashboard__mentor-info">
                  <div className="dashboard__mentor-item-name">{mentor.name}</div>
                  <div className="dashboard__mentor-item-role">{mentor.role}</div>
                </div>
                <button className="dashboard__mentor-follow">Follow</button>
              </li>
            ))}
          </ul>
          <Link to="#" className="dashboard__mentor-see-all">See All</Link>
        </div>
      </aside>
    </div>
  )
}

export default Dashboard

