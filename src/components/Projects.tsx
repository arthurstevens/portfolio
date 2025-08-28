import type { Project } from "../types.ts";
import ProjectCard from "./ui/ProjectCard"
import Code from "./ui/icons/Code"

const projectData: Project[] = [
  {
    "title" : "Project 1",
    "description" : "Some project about something random",
    "tools" : ["react", "something else", "whoop"],
    "linkGit" : "1",
    "linkDemo" : ""
  },
  {
    "title" : "Project 2",
    "description" : "Another supposed project???",
    "tools" : ["js"],
    "linkGit" : "1",
    "linkDemo" : ""
  },
  {
    "title" : "Project 3",
    "description" : "Wow, very compelling project numero tres!!",
    "tools" : ["python", "java"],
    "linkGit" : "1",
    "linkDemo" : ""
  },
  {
    "title" : "Project 4",
    "description" : "And finally, a fourth...",
    "tools" : ["react", "something else", "whoop"],
    "linkGit" : "1",
    "linkDemo" : "there isn't one"
  }
]

const Projects = () => (
  <section id="projects" className="flex justify-center w-full min-h-screen p-5 text-primary">
    <div className="w-6xl mt-20 mb-15">
      <span className="text-sm text-accent mb-2">$ ls -la ~/projects</span>
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-accent">{'> '}</span>
        PROJECTS
      </h2>
      <p className="text-secondary max-w-2xl mb-10">
        A collection of systems and tools showcasing technical problem solving.
      </p>
      <ul className="grid grid-cols-2 gap-4 mb-20">
          {projectData.map(project => (
            <li>
              <ProjectCard project={project} />
            </li>
          ))}
      </ul>
      <div className="flex justify-center">
        <a
          href="https://github.com/arthurstevens/"
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
)

export default Projects
