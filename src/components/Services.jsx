function Services() {

  const services = [
    "Nimpur Sporrts Club, Cuttack",
    "Railway Stadium, Sambalpur",
    "Rao Cricket Academy, Bhubaneswar",
    "Sambalpur University, Khurda",
    "Hi-Tech Medical College, Bhubaneswar",
    "IOSR, Paradeep",
    "Ramco Pvt. Ltd., Bhubaneswar",
    "NISER, Bhubaneswar",
    "Kalpataru Mini-Stadium, Bhubaneswar",
    "Railway Stadium, Khurda",
    "Railway Football Stadium, Sambalpur",
    "Bhubaneswar Raily Stadium, Bhubaneswar",
  ]

  return (
    <section id="services" className="bg-black text-white py-32 px-10">

      <div className="container mx-auto">

        <div className="mb-20">

          <p className="text-green-400 uppercase tracking-widest mb-4">
          Our Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
            Trusted By Leading Institutions Across Odisha
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            
            <div
              key={index}
              className="border border-white/10 p-8 rounded-2xl hover:bg-green-500 hover:text-black transition duration-300"
            >
              
              <h3 className="text-2xl font-semibold leading-snug">
                {service}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services