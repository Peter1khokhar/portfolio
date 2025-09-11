import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo / Name */}
        <div className="text-white text-xl font-bold">
          Peter Khokhar
        </div>

        {/* Navigation / Links */}
        <div className="flex space-x-6 text-gray-300 font-medium">
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-300 text-lg">
          <a href="https://instagram.com/peterkhokhar_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/peterkhokhar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/peter1khokhar" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 mb-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Peter Khokhar. All rights reserved.
      </div>
    </footer>
  );
}
