import { useState } from "react"
import logo from "../assets/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">

      <div className="container mx-auto px-6 md:px-10 pt-10 pb-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">

          <img
            src={logo}
            alt="Aditya Helplines Logo"
            className="h-8 md:h-16 w-auto"
          />

          <div>
            <h2 className="text-sm md:text-2xl font-bold leading-tight">
              Aditya Helplines
            </h2>

            <p className="hidden md:block text-sm text-gray-300">
              Sports Infrastructure
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 text-sm font-semibold uppercase tracking-wide">

          <a
            href="#about"
            className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
          >
            Services
          </a>

          <a
            href="#projects"
            className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 text-lg uppercase">

          <a href="#about" className="border border-white/20 rounded-lg p-3">
            About
          </a>

          <a href="#services" className="border border-white/20 rounded-lg p-3">
            Services
          </a>

          <a href="#projects" className="border border-white/20 rounded-lg p-3">
            Projects
          </a>

          <a href="#contact" className="border border-white/20 rounded-lg p-3">
            Contact
          </a>

        </div>

      )}

    </nav>
  )
}

export default Navbar