import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Experience from './sections/Experience/Experience'
import Stacks from './sections/Stacks/Stacks'
import Education from './sections/Education/Education'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Stacks />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
