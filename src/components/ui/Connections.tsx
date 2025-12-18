import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

const Connections = () => (
  <div className="border-2 border-border rounded-lg p-5 w-full">
    {/* Heading */}
    <h4 className="text-lg font-semibold text-primary mb-4">Connect with me</h4>
    <ul>

      {/* GitHub */}
      <li className="flex items-center gap-4 mb-2">
        <div className="bg-accent/15 rounded-md w-min p-1 text-accent">
          <GitHub />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">GitHub</span>
          <a
            href="https://github.com/arthurstevens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition duration-150"
          >
            @arthurstevens
          </a>
        </div>
      </li>

      {/* LinkedIn */}
      <li className="flex items-center gap-4 mb-2">
        <div className="bg-accent/15 rounded-md w-min p-1 text-accent">
          <LinkedIn />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/arthur-srodzinski-stevens-2bab09350/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition duration-150"
          >
            Arthur Srodzinski-Stevens
          </a>
        </div>
      </li>

    </ul>
  </div>
);

export default Connections

