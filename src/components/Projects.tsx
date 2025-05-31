import ProjectCard from "./ProjectCard"
import { projects } from "../data/db"

export default function Projects() {

  return (

    <section className="mt-10">
      <h2 id="projects" className="text-center text-orange-400 text-xl font-black">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-lg md:max-w-5xl mx-auto mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>

  )
}
