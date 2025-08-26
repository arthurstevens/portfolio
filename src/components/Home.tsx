import HomeBackground from "./ui/HomeBackground";
import Socials from "./ui/Socials"
import Terminal from "./ui/Terminal"
import Code from "./ui/icons/Code"

const Home = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center">
      <HomeBackground />
      <div className="absolute text-center text-white px-4">
        <div className="flex flex-col space-y-10">
          {/* Title */}
          <div className="flex flex-col space-y-5">
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              <span className="text-accent">{"> "}</span> 
              <span className="text-foreground">ARTHUR</span>{" "}
              <span className="text-secondary">SRODZINSKI-STEVENS</span>
              <span className="text-accent animate-pulse">_</span>
            </h1>
            {/* Subtext */}
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Computer Science Student — building for my future.
            </p>
          </div>
          <Terminal />
          {/* Links */}
          <div className="flex justify-center items-center">
            {/* Order had to be used for peer groups */}
            <a 
              href="#projects"
              className="peer/projects order-1 cursor-pointer flex items-center p-2 space-x-1 h-auto rounded-md  text-black hover:text-white bg-accent hover:bg-transparent border-1 border-accent hover:border-white transition duration-300 ease-in-out"
            >
              <Code />
              <span className="font-semibold">View Projects</span>
            </a>
            <div className="peer/socials order-3">
              <Socials />
            </div>
            <span className="order-2 w-15 h-1 bg-gradient-to-r from-accent peer-hover/projects:from-primary to-primary/5 peer-hover/socials:to-primary transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;