import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between 
        bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">
          <span className="text-purple-600">Peter</span>Khokhar
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li><a href="#home" className="hover:text-purple-600 transition">Home</a></li>
          <li><a href="#works" className="hover:text-purple-600 transition">My Works</a></li>
          <li><a href="#about" className="hover:text-purple-600 transition">About</a></li>
          <li><a href="#contact" className="hover:text-purple-600 transition">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#hire"
          className="hidden md:inline-block px-5 py-2 rounded-xl bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed top-0 right-0 w-3/4 h-screen bg-white/40 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium shadow-xl border-l border-white/30"
          > 
            <button
          className=" md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
            <a href="#home" className="text-black hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#works" className="text-black hover:text-purple-600" onClick={() => setIsOpen(false)}>My Works</a>
            <a href="/aboutme" className=" text-black hover:text-purple-600" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="text-black hover:text-purple-600" onClick={() => setIsOpen(false)}>Contact</a>
            <a
              href="#hire"
              className="px-5 py-2 rounded-xl bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
