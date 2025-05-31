import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiVite } from 'react-icons/si';

export default function TechStack() {
  return (
    <section id='tech' className="mt-20 mx-auto max-w-4xl px-4">
      <h2 className="text-center font-bold text-3xl text-orange-400 mb-8">Tech Stack</h2>
      
      {/* Grid flexible que pasa a fila en pantallas md+ */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:justify-center md:gap-10 gap-6">
        {[ 
          { Icon: SiReact, color: "text-cyan-400" },
          { Icon: SiTypescript, color: "text-blue-500" },
          { Icon: SiJavascript, color: "text-yellow-400" },
          { Icon: SiHtml5, color: "text-orange-600" },
          { Icon: SiCss3, color: "text-blue-700" },
          { Icon: SiTailwindcss, color: "text-cyan-400" },
          { Icon: SiVite, color: "text-yellow-500" },
        ].map(({ Icon, color }, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center ${color} hover:scale-110 transform transition-transform duration-300 cursor-pointer`}
          >
            <Icon className="text-7xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
