import GitHub from './icons/GitHub';
import Email from'./icons/Email';
import LinkedIn from'./icons/LinkedIn';

const Socials = () => (
  <div className="group flex h-auto w-full border-1 sm:border-l-black sm:border-r-black items-center text-accent hover:text-primary border-accent hover:border-neutral-100 rounded-md transition-all duration-300">
    {/* GitHub */}
    <a
      href="https://github.com/arthurstevens/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center rounded-l-md cursor-pointer flex-1 py-2 hover:bg-neutral-100 hover:text-black hover:shadow-[0_0_15px_theme(colors.primary)] transition-all duration-300 ease-in-out"
    >
      <GitHub size={28} />
    </a>
    
    <span className="border border-dotted self-stretch border-accent/60 group-hover:border-primary transition duration-300" />
    
    {/* Email */}
    <a
      href="mailto:arthursrodzisnkistevens@gmail.com"
      className="flex justify-center cursor-pointer flex-1 py-2 hover:bg-neutral-100 hover:text-black  hover:shadow-[0_0_15px_theme(colors.primary)] transition-all duration-300 ease-in-out"
    >
      <Email size={28} />
    </a>

    <span className="border border-dotted self-stretch border-accent/60 group-hover:border-primary transition duration-300" />
    
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/arthur-srodzinski-stevens-2bab09350/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center rounded-r-md cursor-pointer flex-1 py-2 hover:bg-neutral-100 hover:text-black  hover:shadow-[0_0_15px_theme(colors.primary)] transition-all duration-300 ease-in-out"
    >
      <LinkedIn size={28} />
    </a>
  </div>
);

export default Socials
