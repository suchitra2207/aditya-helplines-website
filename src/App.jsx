import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import WhyChooseUs from "./components/WhyChooseUs"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="overflow-x-hidden">

      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <About />

      <WhyChooseUs />

      <Contact />

    </main>
  )
}

export default App