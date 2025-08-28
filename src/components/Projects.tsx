import type { Project } from '../types.ts';
import ProjectCard from './ui/ProjectCard';
import Code from './ui/icons/Code';

const Projects = () => {
  const projectData: Project[] = [
    {
      "title" : "Water Warden",
      "description" : "A web-based monitoring tool designed to track and analyse water supply, designed for the Engineering For People Design Challenege 2024-2025. It demonstrates integration between frontend rendering and backend logic, with an emphasis on data visualisation and reporting.",
      "tools" : ["JavaScript", "EJS", "Python"],
      "linkGit" : "https://github.com/arthurstevens/water-warden",
      "linkDemo" : ""
    },
    {
      "title" : "Custom Load Balancer",
      "description" : "A lightweight load balancer with interchangeable algorithms. This project explores concurrency, fault tolerance, and performance testing to better understand systems-level problem solving.",
      "tools" : ["Go", "Docker"],
      "linkGit" : "https://github.com/TresMichitos/custom-load-balancer",
      "linkDemo" : ""
    },
    {
      "title" : "Exam Management System",
      "description" : "A backend-driven system for scheduling, managing, and storing exam information for students. Implemented using Python and PL/pgSQL, it provides automated workflows and structured database interactions, with a focus on consistency in data handling and heavy business logic.",
      "tools" : ["Python", "PLpgSQL"],
      "linkGit" : "https://github.com/arthurstevens/exam-management-system",
      "linkDemo" : ""
    },
    {
      "title" : "Arcade Simulator",
      "description" : "A Java-based simulator replicating an arcade. It highlights object-oriented design, event-driven programming, and thoughtful design",
      "tools" : ["Java"],
      "linkGit" : "https://github.com/arthurstevens/uea-arcade-simulator",
      "linkDemo" : ""
    }
  ];

  return (
    <section id="projects" className="flex justify-center w-full min-h-screen p-5 text-primary">
      <div className="w-6xl mt-20 mb-15">

        {/* Heading */}
        <span className="text-sm text-accent mb-2">$ ls -la ~/projects</span>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-accent">{'> '}</span>
          PROJECTS
        </h2>
        <p className="text-secondary max-w-2xl mb-10">
          A collection of systems and tools showcasing technical problem solving.
        </p>

        {/* Project cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {projectData.map(project => (
              <li>
                <ProjectCard project={project} />
              </li>
            ))}
        </ul>

        {/* Git repositories link */}
        <div className="flex justify-center">
          <a
            href="https://github.com/arthurstevens?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center space-x-2 w-min px-3 py-1 text-nowrap font-semibold border-2 rounded-lg text-accent hover:text-primary transition duration-200"
          >
            <Code size={28} />
            <span>View All Projects</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects
