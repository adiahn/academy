# Quick Reference Guide - KASEDA Academy

## 🚀 Common Development Tasks

### Starting the Development Server
```bash
npm run dev
```
**Opens at**: http://localhost:5173

### Building for Production
```bash
npm run build
```
**Output**: `dist/` folder

### Running the Linter
```bash
npm run lint
```

---

## 📂 File Locations - Quick Access

### Key Configuration Files
| File | Purpose | Location |
|------|---------|----------|
| Package dependencies | `package.json` | Root |
| Vite config | `vite.config.js` | Root |
| Tailwind config | `tailwind.config.js` | Root |
| ESLint config | `eslint.config.js` | Root |
| PostCSS config | `postcss.config.js` | Root |
| Entry HTML | `index.html` | Root |
| Git ignore | `.gitignore` | Root |

### Main Source Files
| File | Purpose | Location |
|------|---------|----------|
| App entry point | `main.jsx` | `src/` |
| Route definitions | `App.jsx` | `src/` |
| Global CSS | `index.css` | `src/` |
| CSS variables | `variables.css` | `src/styles/` |
| Base styles | `global.css` | `src/styles/` |

### Page Components
| Page | File | Route |
|------|------|-------|
| Landing | `Home.jsx` | `/` |
| Login | `LoginPage.jsx` | `/login` |
| Dashboard | `Dashboard.jsx` | `/dashboard` |
| Inbox | `InboxPage.jsx` | `/inbox` |

---

## 🎨 Design System Cheat Sheet

### Colors (CSS Variables)
```css
/* Primary */
--color-primary: #4a7c2a
--color-primary-light: #6ba83f
--color-primary-dark: #3a6320

/* Accent */
--color-accent-blue: #4a90e2
--color-accent-coral: #ff6b5a
--color-accent-amber: #ffa726

/* Text */
--color-text-primary: #2d4a1f
--color-text-secondary: #4a7c2a

/* Background */
--color-white: #ffffff
--color-off-white: #f8f9f7
```

### Spacing Scale
```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
```

### Breakpoints
```css
/* Mobile */ max-width: 767px
/* Tablet */ min-width: 768px
/* Desktop */ min-width: 1024px
/* Large Desktop */ min-width: 1280px
```

### Font Weights
```css
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

---

## 🧩 Component Quick Reference

### Adding a New Component

**1. Create component files**:
```bash
src/components/NewComponent/
├── NewComponent.jsx
└── NewComponent.css
```

**2. Component template**:
```jsx
import './NewComponent.css'

const NewComponent = () => {
  return (
    <div className="new-component">
      {/* Component content */}
    </div>
  )
}

export default NewComponent
```

**3. Export from index.js**:
```javascript
// src/components/index.js
export { default as NewComponent } from './NewComponent/NewComponent'
```

**4. CSS template**:
```css
.new-component {
  /* Styles using BEM naming */
}

.new-component__element {
  /* Child element styles */
}

.new-component__element--modifier {
  /* Modified element styles */
}
```

---

## 🔗 Routing Quick Reference

### Current Routes
```javascript
/                → Home
/login           → LoginPage
/dashboard       → Dashboard
/inbox           → InboxPage
```

### Adding a New Route

**In `src/App.jsx`**:
```jsx
import NewPage from './pages/NewPage'

// Add route
<Route path="/new-page" element={<NewPage />} />
```

### Navigation Methods

**Link component** (preferred for internal links):
```jsx
import { Link } from 'react-router-dom'

<Link to="/dashboard">Go to Dashboard</Link>
```

**Programmatic navigation**:
```jsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/dashboard')
```

---

## 🎯 Common Code Patterns

### State Management
```jsx
import { useState } from 'react'

const [value, setValue] = useState(initialValue)
```

### Form Handling
```jsx
const [formData, setFormData] = useState({
  field1: '',
  field2: ''
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Handle form submission
}
```

### Intersection Observer (Scroll Animations)
```jsx
import { useEffect, useRef, useState } from 'react'

const [isVisible, setIsVisible] = useState(false)
const sectionRef = useRef(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    },
    { threshold: 0.1 }
  )

  const currentSection = sectionRef.current
  if (currentSection) {
    observer.observe(currentSection)
  }

  return () => {
    if (currentSection) {
      observer.unobserve(currentSection)
    }
  }
}, [])

// Use in JSX
<section ref={sectionRef} className={isVisible ? 'visible' : ''}>
```

### List Rendering
```jsx
const items = [/* data array */]

return (
  <div>
    {items.map((item, index) => (
      <div key={item.id || index}>
        {item.name}
      </div>
    ))}
  </div>
)
```

### Mobile Menu Toggle
```jsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen)
}

const closeMobileMenu = () => {
  setIsMobileMenuOpen(false)
}
```

---

## 🎨 CSS Naming Convention

### BEM Pattern
```css
/* Block */
.component-name { }

/* Element */
.component-name__element { }

/* Modifier */
.component-name__element--modifier { }

/* State */
.component-name__element--active { }
.component-name__element--open { }
.component-name__element--visible { }
```

### Examples from Project
```css
.header { }
.header__logo { }
.header__nav { }
.header__nav--open { }
.header__nav-item { }
.header__nav-item--active { }
```

---

## 🛠️ Common Fixes

### Issue: Page not rendering
**Check**:
1. Component imported correctly?
2. Route defined in `App.jsx`?
3. Export statement present?
4. Console errors?

### Issue: Styles not applying
**Check**:
1. CSS file imported in component?
2. Class name matches CSS file?
3. CSS variables defined in `variables.css`?
4. No typos in class names?

### Issue: Icons not showing
**Check**:
1. Lucide-react imported?
2. Icon name correct? (case-sensitive)
3. Size prop provided?

```jsx
import { IconName } from 'lucide-react'

<IconName size={20} />
```

### Issue: Navigation not working
**Check**:
1. react-router-dom installed?
2. Component wrapped in `<Router>`?
3. Using `<Link>` or `useNavigate()`?
4. Route path matches exactly?

---

## 📦 Icon Usage

### Import
```jsx
import { IconName, AnotherIcon } from 'lucide-react'
```

### Usage
```jsx
<IconName size={20} />
<IconName size={20} color="#4a7c2a" />
<IconName size={20} fill="currentColor" />
```

### Commonly Used Icons
- Search
- Menu, X (for mobile menu)
- User
- Bell
- Settings
- LogOut
- Play
- Star
- ArrowRight
- ChevronLeft, ChevronRight

**Full list**: https://lucide.dev/icons/

---

## 🎬 Animation Classes

### Fade In on Scroll
```jsx
<section className={`component ${isVisible ? 'component--visible' : ''}`}>
```

```css
.component {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.component--visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Staggered Animation
```jsx
<div 
  className={`card ${isVisible ? 'card--visible' : ''}`}
  style={{ animationDelay: `${index * 0.1}s` }}
>
```

```css
.card {
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
  animation-play-state: paused;
}

.card--visible {
  animation-play-state: running;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 📱 Responsive Design Helpers

### Container
```jsx
<div className="container">
  {/* Content auto-centered with max-width 1280px */}
</div>
```

### Media Queries
```css
/* Mobile first */
.element {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
  }
}
```

### Hide on Mobile
```css
.element {
  display: none;
}

@media (min-width: 768px) {
  .element {
    display: block; /* or flex, grid, etc. */
  }
}
```

### Show on Mobile Only
```css
.element {
  display: block;
}

@media (min-width: 768px) {
  .element {
    display: none;
  }
}
```

---

## 🗄️ Data Locations

### Mock Data Files

| Data Type | Located In | Variable Name |
|-----------|-----------|---------------|
| Courses | `Courses.jsx` | `courses` |
| Resources | `Resources.jsx` | `resources` |
| Navigation items | `Dashboard.jsx` | `navItems` |
| Messages | `InboxPage.jsx` | `messages` |
| Mentors | `Dashboard.jsx` | `mentors`, `mentorList` |
| Progress data | `Dashboard.jsx` | `progressCards`, `progressData` |

### Moving Data to Constants

**Create**: `src/constants/mockData.js`
```javascript
export const COURSES = [/* course array */]
export const RESOURCES = [/* resource array */]
export const MESSAGES = [/* message array */]
```

**Import**:
```javascript
import { COURSES, RESOURCES } from '../constants/mockData'
```

---

## 🔍 Debugging Tips

### React DevTools
Install: [React DevTools Extension](https://react.dev/learn/react-developer-tools)

**Use to**:
- Inspect component tree
- View props and state
- Check hooks
- Profile performance

### Console Logging
```javascript
// Log state changes
useEffect(() => {
  console.log('State changed:', stateVariable)
}, [stateVariable])

// Log form data
console.log('Form data:', formData)

// Log props
console.log('Props:', props)
```

### Common Console Errors

**"Cannot read property of undefined"**
- Check if data exists before accessing
- Use optional chaining: `object?.property`

**"React Hook useEffect has missing dependencies"**
- Add dependencies to dependency array
- Or use ESLint disable comment if intentional

**"Each child should have a unique key prop"**
- Add `key` prop to list items
- Use unique ID, not index if list can change

---

## 🚨 Common Mistakes to Avoid

### 1. Using Index as Key
```jsx
// ❌ Bad (if list can change)
{items.map((item, index) => <div key={index}>{item}</div>)}

// ✅ Good
{items.map((item) => <div key={item.id}>{item}</div>)}
```

### 2. Forgetting to Import CSS
```jsx
// ❌ Missing
import Component from './Component'

// ✅ Complete
import './Component.css'
import Component from './Component'
```

### 3. Not Preventing Default on Forms
```jsx
// ❌ Missing preventDefault
const handleSubmit = (e) => {
  navigate('/dashboard')
}

// ✅ Correct
const handleSubmit = (e) => {
  e.preventDefault()
  navigate('/dashboard')
}
```

### 4. Direct State Mutation
```jsx
// ❌ Wrong
const addItem = () => {
  items.push(newItem)
  setItems(items)
}

// ✅ Correct
const addItem = () => {
  setItems([...items, newItem])
}
```

---

## 📝 Git Workflow

### Check Status
```bash
git status
```

### Stage Changes
```bash
git add .
# or specific files
git add src/components/NewComponent.jsx
```

### Commit Changes
```bash
git commit -m "Add new component for feature X"
```

### Push to Repository
```bash
git push origin main
```

### Pull Latest Changes
```bash
git pull origin main
```

---

## 🎓 Learning Resources

### Official Documentation
- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

### Useful Tools
- [Can I Use](https://caniuse.com) - Browser compatibility
- [CSS-Tricks](https://css-tricks.com) - CSS references
- [MDN Web Docs](https://developer.mozilla.org) - Web API docs

---

## 🔧 Useful VS Code Extensions

Recommended for this project:
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **ESLint** - Linting in editor
- **Prettier** - Code formatting
- **Auto Rename Tag** - Rename paired HTML/JSX tags
- **CSS Peek** - Jump to CSS definitions

---

## 💡 Quick Snippets

### New Page Template
```jsx
const PageName = () => {
  return (
    <div className="page-name">
      <h1>Page Title</h1>
      {/* Page content */}
    </div>
  )
}

export default PageName
```

### Button with Icon
```jsx
import { IconName } from 'lucide-react'

<button className="btn">
  <IconName size={18} />
  Button Text
</button>
```

### Card Component
```jsx
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  )
}
```

---

**Quick Access**: Save this file for immediate reference when coding!  
**Last Updated**: December 23, 2025
