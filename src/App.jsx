import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import InboxPage from './pages/InboxPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inbox" element={<InboxPage />} />
      </Routes>
    </Router>
  )
}

export default App
