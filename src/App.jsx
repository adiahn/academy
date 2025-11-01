import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

/**
 * Main App Component
 * KASEDA Digital Academy - Root component
 */
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
