function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-32 px-10">

      <div className="container mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-green-400 uppercase tracking-widest mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Let’s Build Your Next Sports Facility
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Whether it’s a cricket turf pitch, indoor arena,
              sports court or recreational facility — our team
              is ready to bring your vision to life.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10">

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Phone
              </h3>

              <p className="text-gray-400">
                +91 90903 30664
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Email
              </h3>

              <p className="text-gray-400">
                adityahelplines1969@gmail.com
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Location
              </h3>

              <p className="text-gray-400">
                Odisha, India
              </p>
            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://wa.me/919090330664?text=Hello%20Aditya%20Helplines,%20I%20would%20like%20to%20discuss%20a%20sports%20infrastructure%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition duration-300"
              >
                💬 Chat on WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/company/aditya-help-lines/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact