import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for text
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden text-center px-6">
      {/* === Background Shapes === */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.4), rgba(139,92,246,0.1))",
          filter: "blur(60px)",
        }}
        animate={{
          borderRadius: ["40%", "50%", "20%", "60%", "40%"],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(56,189,248,0.3), rgba(59,130,246,0.1))",
          filter: "blur(80px)",
        }}
        animate={{
          borderRadius: ["60%", "30%", "50%", "20%", "60%"],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* === Hero Content === */}
      <div className="relative z-10 max-w-2xl">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Hi! I’m <span className="text-purple-600">Peter Khokhar</span>
        </motion.h1>

        <motion.h2
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl md:text-2xl text-gray-700 mb-6"
        >
          Web Designer & Developer
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-gray-600 mb-8 text-lg"
        >
          I build modern, responsive, and user-friendly websites for businesses
          and startups.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex gap-4 justify-center"
        >
          <a
            href="#works"
            className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-md hover:bg-purple-700 transition"
          >
            My Works
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </div>
  );
}
