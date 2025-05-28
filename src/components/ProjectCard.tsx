import type { Project } from "../types";

type ProjectCardProps = Project

// components/ProjectCard.jsx
export default function ProjectCard({ title, image, description, link } : ProjectCardProps) {
  return (
    <div className="project-card flex flex-col justify-between p-4 border border-orange-500 rounded-lg shadow-md bg-gray-900 h-full min-h-[460px]">
      <div>
        <h3 className="text-lg font-semibold text-center py-2">{title}</h3>
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} className="h-60 w-fit object-contain mx-auto" />
        <p className="text-center mt-2">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 text-lg underline mt-4 inline-block w-full text-center hover:scale-105 hover:text-orange-600 transition-all"
      >
        View Project
      </a>
    </div>
  );
}
