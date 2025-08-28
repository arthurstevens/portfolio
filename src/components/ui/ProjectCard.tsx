import type { Project } from "../../types.ts";
import GitHub from "./icons/GitHub.tsx"
import Website from "./icons/Website.tsx"

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project:
  { title, description, tools, linkGit, linkDemo }
}: ProjectCardProps) => (
  <div className="flex flex-col justify-center p-10 rounded-lg border-1 h-full border-border hover:border-accent transition duration-100 ease-in">
    <h4 className="text-xl font-semibold mb-1">{ title }</h4>
    <p className="text-secondary mb-4">{ description }</p>
    <ul className="flex space-x-2 mb-3">
      {tools.map(tool => (
        <li className="text-primary text-sm text-center px-2 py-0.5 rounded-md bg-secondary/35">{ tool }</li>
      ))}
    </ul>
    <div className="flex space-x-2">
      {linkGit && 
        <a
          href={linkGit}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-min space-x-2 px-3 py-1.5 border-1 border-border rounded-md text-sm font-medium hover:text-black hover:bg-accent transition duration-200"
        >
          <GitHub size={16}/>
          <span>Code</span>
        </a>
      }
      {linkDemo &&
        <a
          href={linkDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-min space-x-2 px-3 py-1.5 border-1 border-primary/50 rounded-md text-sm font-medium text-black bg-accent hover:bg-accent/70"
        >
          <Website size={16}/>
          <span>Code</span>
        </a>
      }
    </div>
  </div>
)

export default ProjectCard
