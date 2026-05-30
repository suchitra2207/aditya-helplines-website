import { motion } from "framer-motion"
function About() {
  return (
    <motion.section
    
      id="about"
      className="bg-black text-white py-24 md:py-32 px-6 md:px-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className="container mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>

            <p className="text-green-600 uppercase tracking-[4px] text-sm mb-5">
              About Us
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
              Guided By Experts.
              Built For Performance.
            </h2>

          </div>

          <div className="space-y-8">

            <p className="text-white text-lg leading-relaxed">
              Every project at Aditya Helplines is led by seasoned
              professionals with deep technical expertise in sports
              infrastructure. From planning to execution, we create
              high-performance facilities designed for durability,
              safety, and long-term excellence.
            </p>

            <p className="text-white text-lg leading-relaxed">
              We specialize in outdoor playgrounds, indoor arenas,
              sports courts, cricket turf pitches and multi-purpose
              recreational spaces that inspire active lifestyles.
            </p>

          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default About