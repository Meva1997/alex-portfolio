import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <div id="contact" className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 py-4 border-b border-gray-700">
        <p>Connect with me:</p>
        <ul className="flex space-x-6 md:text-2xl">
          <li>
            <a
              href="https://www.linkedin.com/in/alejandro-medina-web-developer"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Meva1997"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub /> GitHub
            </a>
          </li>
          <li>
            <p className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">alexmedval2@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="text-center px-6 py-3 border-b border-gray-700">
        © 2025 Alejandro Medina. All rights reserved.
      </div>

      <div className="text-center px-6 py-3 text-gray-400">
        Made with ❤️ using React and Tailwind CSS
      </div>
    </>
  );
}
