import type { Project } from '../../types';
import GitHub from './icons/GitHub';
import Website from './icons/Website';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project:
  { title, description, tools, linkGit, linkDemo }
}: ProjectCardProps) => (
  <div className="flex flex-col p-10 rounded-lg border-2 hover:shadow-[0_0_10px_theme(colors.accent)] transition ease-out duration-300 hover:-translate-y-1 h-full border-border hover:border-accent">
    {/* Heading */}
    <h4 className="text-xl font-semibold mb-1">{ title }</h4>

    {/* Content */}
    <p className="text-secondary mb-4">{ description }</p>
    <ul className="flex space-x-2 mb-3">
      {tools.map(tool => (
        <li className="text-primary text-sm text-center px-2 py-0.5 rounded-md bg-secondary/35">{ tool }</li>
      ))}
    </ul>

    {/* Links */}
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
          className="flex items-center justify-center w-min space-x-2 px-3 py-1.5 rounded-md text-sm font-medium text-black bg-accent hover:bg-accent/70"
        >
          <Website size={16}/>
          <span>Demo</span>
        </a>
      }
      
    </div>
  </div>
);

export default ProjectCard
