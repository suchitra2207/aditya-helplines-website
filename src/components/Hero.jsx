import heroImage from "../assets/hero.jpg"

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-32 md:pt-0">

        <div className="max-w-4xl">

          <p className="text-green-400 uppercase tracking-[4px] text-sm md:text-base mb-6 mt-16 md:mt-0">
            Sports Infrastructure Specialists
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] text-white">
            Building World-Class
            <br />
            Sports Infrastructure
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mt-8 leading-relaxed max-w-2xl">
            Premium cricket turf pitches, indoor stadiums,
            sports courts, playgrounds and infrastructure
            solutions designed for performance and durability.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
  href="#services" className="bg-green-500 hover:bg-green-400 hover:scale-105 transition duration-300 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl">
              View Projects
            </a>

            <a
  href="#projects" className="bg-green-500 hover:bg-green-400 hover:scale-105 transition duration-300 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl">
              View Services
            </a>

            <a
  href="#contact" className="border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl text-white font-bold text-lg backdrop-blur-sm">
              Contact Us
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero