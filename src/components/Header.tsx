import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Íconos de hamburguesa y cerrar
import TechStack from "./TechStack";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between relative z-50 lg:max-w-5xl mx-auto">
        <p className="font-bold text-orange-400 text-2xl">Alejandro Medina</p>

        {/* Menú escritorio */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-orange-400 font-bold">About Me</a></li>
            <li><a href="#tech" className="hover:text-orange-400 font-bold">Tech Stack</a></li>
            <li><a href="#projects" className="hover:text-orange-400 font-bold">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-400 font-bold">Contact</a></li>
          </ul>
        </nav>

        {/* Ícono hamburguesa */}
        <button 
          className="md:hidden text-3xl text-orange-400" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú móvil */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-gray-900 p-4 md:hidden shadow-md animate-slide-down">
            <ul className="flex flex-col space-y-4 text-center">
              <li><a href="#about" onClick={toggleMenu} className="hover:text-orange-400 font-bold">About Me</a></li>
              <li><a href="#tech" onClick={toggleMenu} className="hover:text-orange-400 font-bold">Tech Stack</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="hover:text-orange-400 font-bold">Projects</a></li>
              <li><a href="#certifications" onClick={toggleMenu} className="hover:text-orange-400 font-bold">Certifications</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="about" className="flex flex-col items-center justify-center bg-gray-900 text-white text-center rounded-lg shadow-2xl p-5 mt-10 w-11/12 md:w-2/3 mx-auto"> 
        <h1  className="text-lg text-center font-black">Hi, I'm Alejandro Medina</h1>
        <p className="text-4xl mt-5 text-orange-400">Creative Front-End Developer</p>
        <p className="mt-5 text-balance font-bold">
          I’m from Jalisco, Mexico, with U.S. citizenship. I build responsive, accessible, and high-performance web apps using React, TypeScript, and TailwindCSS. I'm passionate about clean code, UX, and modern frontend practices. Open to remote roles and relocation.
        </p>
      </section>

      <TechStack />
    </>
  );
}