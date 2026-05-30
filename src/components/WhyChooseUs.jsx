function WhyChooseUs() {

  const features = [
    {
      title: "Certified Expertise",
      description:
        "Led by experienced professionals with deep technical knowledge in sports infrastructure and cricket facility development."
    },

    {
      title: "End-To-End Execution",
      description:
        "From planning and design to final installation, we handle every stage with precision and professionalism."
    },

    {
      title: "Durable Infrastructure",
      description:
        "We build high-performance sports facilities designed for long-term durability, safety, and consistent performance."
    },

    {
      title: "Trusted By Clients",
      description:
        "Our completed projects reflect reliability, quality workmanship, and a commitment to excellence."
    }
  ]

  return (
    <section className="bg-white text-black py-32 px-10">

      <div className="container mx-auto">

        <div className="mb-20">

          <p className="text-green-500 uppercase tracking-widest mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold leading-tight max-w-4xl">
            Built On Experience,
            Driven By Excellence.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-10 hover:border-green-500 hover:shadow-lg transition duration-300"
            >

              <h3 className="text-3xl font-semibold mb-6 text-black">
                {feature.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-lg">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs