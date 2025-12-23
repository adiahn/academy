# Component Hierarchy & Dependency Map

## Component Tree Structure

```
App (Router)
├── Home (/)
│   ├── Header
│   │   └── Navigation Links (Home, Courses, About, Resources, Contact)
│   │   └── Sign In Link → /login
│   ├── Hero
│   │   ├── Search Bar (non-functional)
│   │   ├── CTA Buttons (non-functional)
│   │   └── Statistics Display
│   ├── About
│   │   └── Learn More Button (non-functional)
│   ├── Resources
│   │   └── 3 Flip Cards (Lessons, Assessments, Tips)
│   ├── Courses
│   │   └── 6 Course Cards
│   │       └── Enroll Now Buttons (non-functional)
│   ├── VideoHighlight
│   │   └── Video Player
│   └── Footer
│       ├── Quick Links
│       ├── Resources Links
│       ├── Contact Info
│       └── Social Media Links
│
├── LoginPage (/login)
│   ├── Brand Panel (left)
│   └── Login Form (right)
│       ├── Email Input
│       ├── Password Input
│       ├── Remember Me Checkbox
│       ├── Forgot Password Link
│       ├── Sign In Button → /dashboard
│       ├── Sign Up Link → /signup (not implemented)
│       └── Back to Home Link → /
│
├── Dashboard (/dashboard)
│   ├── Sidebar (left)
│   │   ├── Logo
│   │   ├── Navigation Menu
│   │   │   ├── Dashboard (active)
│   │   │   ├── Inbox → /inbox
│   │   │   ├── Lesson (inactive)
│   │   │   ├── Task (inactive)
│   │   │   └── Group (inactive)
│   │   ├── Settings (inactive)
│   │   └── Logout → /login
│   ├── Main Content (center)
│   │   ├── Mobile Menu Toggle
│   │   ├── Search Bar (non-functional)
│   │   ├── Send Button (non-functional)
│   │   ├── Welcome Banner
│   │   ├── Progress Cards (3 cards)
│   │   ├── Continue Section
│   │   │   └── 3 Course Cards with Instructors
│   │   └── Mentor Table (2 mentors)
│   └── Right Sidebar (right)
│       ├── Profile Section
│       │   ├── Avatar
│       │   ├── Greeting
│       │   └── Quick Actions (Bell, Folder, Settings)
│       ├── Progress Chart
│       └── Mentor List (5 mentors)
│           └── Follow Buttons (non-functional)
│
└── InboxPage (/inbox)
    ├── Sidebar (left) - same as Dashboard
    └── Main Content (center)
        ├── Mobile Menu Toggle
        ├── Message List View (default)
        │   ├── Header with Search
        │   ├── Toolbar (Archive, Delete)
        │   └── Message List (6 messages)
        │       ├── Checkbox
        │       ├── Star Button
        │       ├── Message Content
        │       └── More Button
        └── Message Detail View (when message clicked)
            ├── Back to Inbox Button
            ├── Message Header
            ├── Action Buttons (Reply, Reply All, Forward)
            └── Message Body
```

---

## Component Import/Export Map

### Centralized Exports (`src/components/index.js`)
```javascript
Header          → './Header/Header'
Hero            → './Hero/Hero'
VideoHighlight  → './VideoHighlight/VideoHighlight'
Resources       → './Resources/Resources'
Courses         → './Courses/Courses'
About           → './About/About'
Footer          → './Footer/Footer'
```

### Component Files & Dependencies

#### **Header** (`src/components/Header/Header.jsx`)
**Dependencies**:
- `react` → useState
- `react-router-dom` → Link
- `lucide-react` → Search, Menu, X, ChevronDown, ShoppingCart, User
- `./Header.css`

**State**: 
- `isMobileMenuOpen` (boolean)
- `searchQuery` (string)

**Props**: None

---

#### **Hero** (`src/components/Hero/Hero.jsx`)
**Dependencies**:
- `react` → useState
- `./Hero.css`

**State**: 
- `searchQuery` (string)

**Props**: None

**External Resources**:
- Background image: Unsplash

---

#### **About** (`src/components/About/About.jsx`)
**Dependencies**:
- `react` → useEffect, useRef, useState
- `lucide-react` → ArrowRight
- `./About.css`

**State**: 
- `isVisible` (boolean) - for animations

**Props**: None

**External Resources**:
- Image: Unsplash

---

#### **Resources** (`src/components/Resources/Resources.jsx`)
**Dependencies**:
- `react` → useEffect, useRef, useState
- `./Resources.css`

**State**: 
- `isVisible` (boolean)

**Props**: None

**Data**: 3 resource objects (hardcoded)

---

#### **Courses** (`src/components/Courses/Courses.jsx`)
**Dependencies**:
- `react` → useEffect, useRef, useState
- `lucide-react` → ArrowRight, Clock, Users, Star
- `./Courses.css`

**State**: 
- `isVisible` (boolean)

**Props**: None

**Data**: 6 course objects (hardcoded)

**External Resources**:
- Course images: Unsplash

---

#### **VideoHighlight** (`src/components/VideoHighlight/VideoHighlight.jsx`)
**Dependencies**:
- `react` → useEffect, useRef, useState
- `lucide-react` → Play
- `./VideoHighlight.css`

**State**: 
- `isVisible` (boolean)
- `isPlaying` (boolean)

**Refs**:
- `videoRef` → video element

**Props**: None

**External Resources**:
- Thumbnail: Unsplash
- Video: Google Cloud Storage sample

---

#### **Footer** (`src/components/Footer/Footer.jsx`)
**Dependencies**:
- `lucide-react` → MapPin, Mail, Facebook, Linkedin, MessageCircle, Youtube
- `./Footer.css`

**State**: None

**Props**: None

**Data**: 
- Footer links (hardcoded)
- Social links (hardcoded)

---

### Page Components

#### **Home** (`src/pages/Home.jsx`)
**Dependencies**:
- All main components: Header, Hero, VideoHighlight, Resources, Courses, About, Footer

**State**: None

**Props**: None

**Layout**: Vertical stack of sections

---

#### **LoginPage** (`src/pages/LoginPage.jsx`)
**Dependencies**:
- `react` → useState
- `react-router-dom` → Link, useNavigate
- `./LoginPage.css`

**State**: 
- `formData` → { email, password }

**Navigation**:
- On submit → `/dashboard`

**Props**: None

---

#### **Dashboard** (`src/pages/Dashboard.jsx`)
**Dependencies**:
- `react` → useState
- `react-router-dom` → Link, useNavigate
- `lucide-react` → 21 icons
- `./Dashboard.css`

**State**: 
- `activeNav` (string) - current navigation item
- `isMobileMenuOpen` (boolean)

**Navigation**:
- Inbox button → `/inbox`
- Logout button → `/login`

**Data** (all hardcoded):
- `navItems` (5 items)
- `progressCards` (3 items)
- `continueCourses` (3 items)
- `mentors` (2 items)
- `mentorList` (5 items)
- `progressData` (5 values)

**Props**: None

---

#### **InboxPage** (`src/pages/InboxPage.jsx`)
**Dependencies**:
- `react` → useState
- `react-router-dom` → Link, useNavigate
- `lucide-react` → 23 icons
- `./InboxPage.css`

**State**: 
- `activeNav` (string) - current navigation item
- `isMobileMenuOpen` (boolean)
- `selectedMessage` (object | null) - for detail view

**Navigation**:
- Dashboard button → `/dashboard`
- Logout button → `/login`

**Data** (hardcoded):
- `navItems` (5 items)
- `messages` (6 items)

**Props**: None

---

## Shared Patterns

### Navigation Sidebar Pattern
Used in: **Dashboard**, **InboxPage**

**Structure**:
```jsx
<aside className="page__sidebar">
  <div className="page__logo">KASEDA</div>
  <nav className="page__nav">
    <div className="page__nav-section">
      <h3>OVERVIEW</h3>
      <ul>{navItems.map(...)}</ul>
    </div>
  </nav>
  <div className="page__nav-footer">
    <div className="page__nav-section">
      <h3>SETTINGS</h3>
      <ul>Settings + Logout</ul>
    </div>
  </div>
</aside>
```

**State**:
- `activeNav` → tracks which nav item is active
- `isMobileMenuOpen` → controls mobile menu visibility

---

### Mobile Menu Pattern
Used in: **Header**, **Dashboard**, **InboxPage**

**Structure**:
```jsx
{isMobileMenuOpen && <div className="overlay" onClick={close} />}
<button className="mobile-toggle" onClick={toggle}>
  <Menu />
</button>
```

**CSS Classes**:
- `component__sidebar--open` or `component__nav--open`
- Adds transform/opacity transitions

---

### Intersection Observer Pattern
Used in: **About**, **Resources**, **Courses**, **VideoHighlight**

**Implementation**:
```javascript
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
    { threshold: 0.1 } // varies by component
  )
  
  observer.observe(sectionRef.current)
  return () => observer.unobserve(sectionRef.current)
}, [])
```

**Usage**: Triggers CSS animations when section scrolls into view

---

## Data Flow Patterns

### Form Submission Pattern
Used in: **LoginPage**

```javascript
const [formData, setFormData] = useState({ email: '', password: '' })

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
```

### List Rendering Pattern
Used in: **Courses**, **Resources**, **Dashboard**, **InboxPage**

```javascript
const items = [/* hardcoded data */]

return (
  <div>
    {items.map((item, index) => (
      <div key={item.id || index}>
        {/* render item */}
      </div>
    ))}
  </div>
)
```

**Note**: Sometimes uses `index` as key (not best practice for dynamic lists)

---

## Icon Usage Map

### Lucide React Icons Used

| Component | Icons |
|-----------|-------|
| **Header** | Search, Menu, X, ChevronDown, ShoppingCart, User |
| **Hero** | None (relies on text/images) |
| **About** | ArrowRight |
| **Resources** | None |
| **Courses** | ArrowRight, Clock, Users, Star |
| **VideoHighlight** | Play |
| **Footer** | MapPin, Mail, Facebook, Linkedin, MessageCircle, Youtube |
| **Dashboard** | LayoutDashboard, Inbox, BookOpen, ClipboardList, Users, Settings, LogOut, Search, Send, Bell, Folder, MoreVertical, Play, ChevronLeft, ChevronRight, Plus, Menu, X |
| **InboxPage** | LayoutDashboard, Inbox, BookOpen, ClipboardList, Users, Settings, LogOut, Search, Menu, X, Mail, Star, Archive, Trash2, Reply, ReplyAll, Forward, MoreVertical, Filter |

**Total Unique Icons**: ~30

---

## CSS File Dependencies

Each component has its own CSS file:

```
components/
├── About/About.css
├── Courses/Courses.css
├── Footer/Footer.css
├── Header/Header.css
├── Hero/Hero.css
├── Resources/Resources.css
└── VideoHighlight/VideoHighlight.css

pages/
├── Dashboard.css
├── InboxPage.css
└── LoginPage.css

styles/
├── global.css
└── variables.css
```

**Global CSS Import Order** (`index.css`):
1. `variables.css` - CSS custom properties
2. `global.css` - Base styles
3. Tailwind components
4. Tailwind utilities

---

## State Management Overview

### Current Approach
- **Local State Only**: Each component manages its own state with `useState`
- **No Global State**: Context API setup but not used
- **No State Persistence**: State lost on page refresh

### State by Component

| Component | State Variables | Purpose |
|-----------|----------------|---------|
| Header | `isMobileMenuOpen`, `searchQuery` | Mobile menu, search input |
| Hero | `searchQuery` | Search input |
| About | `isVisible` | Scroll animation |
| Resources | `isVisible` | Scroll animation |
| Courses | `isVisible` | Scroll animation |
| VideoHighlight | `isVisible`, `isPlaying`, `videoRef` | Scroll animation, video control |
| LoginPage | `formData` | Form inputs |
| Dashboard | `activeNav`, `isMobileMenuOpen` | Navigation, mobile menu |
| InboxPage | `activeNav`, `isMobileMenuOpen`, `selectedMessage` | Navigation, mobile menu, message view |

---

## Navigation Flow Map

```
User Flow Diagram:

START
  ↓
[Landing Page /]
  ├── Click "Sign In" → [Login /login]
  ├── Click Course CTA → (inactive)
  └── Click Footer Links → (anchor scrolling)

[Login /login]
  ├── Submit Form → [Dashboard /dashboard]
  ├── Click "Sign Up" → /signup (not implemented)
  └── Click "Back to Home" → [Landing Page /]

[Dashboard /dashboard]
  ├── Click "Inbox" → [Inbox /inbox]
  ├── Click "Logout" → [Login /login]
  ├── Click Other Nav → (stay on dashboard)
  └── Click Course/Mentor → (inactive)

[Inbox /inbox]
  ├── Click "Dashboard" → [Dashboard /dashboard]
  ├── Click "Logout" → [Login /login]
  ├── Click Message → (show detail view)
  └── Click "Back to Inbox" → (show list view)
```

---

## External Dependencies Map

### Images (Unsplash CDN)
- Hero background
- About section image
- Course card images (6 different)
- VideoHighlight thumbnail

### Video
- Google Cloud Storage: BigBuckBunny.mp4 (sample video)

### Fonts
- System font stack (no external font files)

### CDNs
- None currently used
- All dependencies from npm

---

## Potential Refactoring Opportunities

### 1. **Extract Sidebar Component**
Current: Duplicated in Dashboard and InboxPage
Solution: Create `<Sidebar />` component with props

### 2. **Extract Navigation Items**
Current: Defined in each page
Solution: Move to `src/constants/navigation.js`

### 3. **Extract Data Models**
Current: Hardcoded in components
Solution: Move to `src/constants/mockData.js`

### 4. **Create Custom Hooks**
Opportunities:
- `useIntersectionObserver` (used in 4 components)
- `useMobileMenu` (used in 3 components)
- `useFormState` (for forms)

### 5. **Extract Card Components**
Current: Inline JSX in parent components
Solution: 
- `<CourseCard />`
- `<ResourceCard />`
- `<ProgressCard />`
- `<MentorCard />`
- `<MessageCard />`

---

**Last Updated**: December 23, 2025  
**Maintained By**: AI Assistant
