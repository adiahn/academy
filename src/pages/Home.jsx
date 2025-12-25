import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Resources from '../components/Resources/Resources'
import Courses from '../components/Courses/Courses'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Resources />
        <Courses />
      </main>
      <Footer />
    </div>
  )
}

export default Home


