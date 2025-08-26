import GitHub from "./icons/GitHub";
import Email from "./icons/Email";
import LinkedIn from "./icons/LinkedIn";

const Socials = () => {
  return (
    <div className="flex w-min border-1 border-accent/80 hover:border-neutral-100 rounded-md transition duration-300">
      <a
        href="https://github.com/arthurstevens/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer px-4 py-2 hover:bg-neutral-100 hover:text-accent hover:shadow-[0_0_15px_theme(colors.primary)] transition-all duration-300 ease-in-out"
      >
        <GitHub size={28} />
      </a>
      <hr className="border border-dotted h-auto border-accent/50" />
      <a
        href="mailto:arthursrodzisnkistevens@gmail.com"
        className="cursor-pointer px-4 py-2 hover:bg-neutral-100 hover:text-accent hover:shadow-[0_0_15px_theme(colors.primary)] transition-all duration-300 ease-in-out"
      >
        <Email size={28} />
      </a>
      <hr className="border border-dotted h-auto border-accent/50" />
      <a
        href="https://www.linkedin.com/in/arthur-srodzinski-stevens-2bab09350/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer px-4 py-2 hover:bg-neutral-100 hover:text-accent hover:shadow-[0_0_15px_theme(colors.primary)] transition-all duration-300 ease-in-out"
      >
        <LinkedIn size={28} />
      </a>
    </div>
  )
}

export default Socials
