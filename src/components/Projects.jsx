import { motion } from "framer-motion";
import chai from "../assets/chai.png"
import kc from "../assets/kc.png"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Chai Lovers Cafe",
      description: "Modern responsive website with advance features",
      img: chai,
    },
    {
      title: "Burgur Hut Website",
      description: "Well designed and attactive restraurent website",
      img: "https://i.ytimg.com/vi/wNq88IFlAwo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCTUh9CWAuxLaWC883qa1cQkhWFpg",
    },
    {
      title: "Khokhar Construction Website",
      description: "Interactive and responsive futuristic website with reactjs and tailwind css.",
      img: kc,
    },
    {
      title: "Admin Page",
      description: "High-end page for Admin.",
      img: "https://camo.envatousercontent.com/2c81b5033b2c5ef2285b9c2ccce9e1c2ed25b16c/68747470733a2f2f636f64657276656e742e636f6d2f6d61746f78692f6173736574732f696d616765732f30312e706e67",
    },
  ];

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            My Projects
          </h2>
          <p className="text-gray-700 text-lg">
            A selection of my recent work showcasing modern web solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group w-full rounded-2xl overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl cursor-pointer transition"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm group-hover:text-gray-900 transition">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
