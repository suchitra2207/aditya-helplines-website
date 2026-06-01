import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"
import project6 from "../assets/project6.jpg"
import project7 from "../assets/project7.jpg"
import project8 from "../assets/project8.jpg"
import project9 from "../assets/project9.jpg"
import project10 from "../assets/project10.jpg"

function Projects() {

  const projects = [
  {
    image: project1,
    title: "Cricket AstroTurf Installation"
  },
  {
    image: project2,
    title: "Box Cricket Arena"
  },
  {
    image: project3,
    title: "Outdoor Sports Stadium"
  },
  {
    image: project4,
    title: "Digital Scoreboard"
  },
  {
    image: project5,
    title: "Basketball Court (Indoor & Outdoor)"
  },
  {
    image: project6,
    title: "Badminton Court (Indoor & Outdoor)"
  },
  {
    image: project7,
    title: "Cricket Apparel & Equipment"
  },
  {
    image: project8,
    title: "Long Tennis Court (Indoor & Outdoor)"
  },
  {
    image: project9,
    title: "Cricket Pitch Roller"
  },
  {
    image: project10,
    title: "Movable Cricket Net"
  }
]

  return (
    <section id="projects" className="bg-white text-black py-32 px-10">

      <div className="container mx-auto">

        <div className="mb-20">

          <p className="text-green-600 uppercase tracking-widest mb-4">
            Our Services
          </p>

          <h2 className="text-5xl font-bold max-w-3xl leading-tight">
            Built To Perform.
            Designed To Inspire.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl relative"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-8 text-white">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects