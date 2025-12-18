import HomeBackground from './ui/HomeBackground';
import Socials from './ui/Socials';
import Terminal from './ui/Terminal';
import Code from './ui/icons/Code';
import ArrowDown from './ui/icons/ArrowDown';

const Home = () => (
  <section id="home" className="relative w-full min-h-[max(100vh,800px)] flex items-center justify-center">
    <HomeBackground />
    <div className="absolute text-center text-primary w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center space-y-10">

        {/* Heading */}
        <div className="flex flex-col max-w-sm sm:max-w-4xl space-y-5">

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter">
            <span className="text-accent">{"> "}</span> 
            <span className="text-foreground">ARTHUR</span>{" "}
            <span className="text-secondary">SRODZINSKI-STEVENS</span>
            <span className="text-accent animate-blink">_</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Computer science student studying at UEA, I currently most enjoy learning C and FPGA development.
          </p>
        </div>
        <Terminal />

        {/* Links */}
        <div className="flex items-stretch justify-center gap-4 sm:gap-0 w-full h-12 max-w-md mx-auto z-1">

          {/* Projects link */}
          <a 
            href="#projects"
            className="peer/projects order-1 flex-1 basis-0 box-border text-center cursor-pointer flex items-center justify-center p-2 space-x-1 h-full rounded-md text-black hover:text-primary bg-accent hover:bg-transparent border border-accent hover:border-white transition duration-300 ease-in-out"
          >
            <Code />
            <span className="font-semibold text-lg">View Projects</span>
          </a>

          {/* Social links */}
          <div className="peer/socials order-3 flex-1 basis-0 box-border flex justify-center">
            <Socials />
          </div>

          {/* Divider / line */}
          <span className="hidden my-auto sm:inline order-2 w-15 h-1 border-t-1 border-b-1 border-dashed border-black bg-gradient-to-r from-accent peer-hover/projects:from-primary to-primary/5 peer-hover/socials:to-primary transition duration-300 ease-in-out" />
        </div>
      </div>
    </div>

    {/* Scroll icon */}
    <div className="absolute bottom-2 flex flex-col justify-center items-center w-full">
      <a href="#about" className="text-xs text-secondary hover:text-accent">
        <p>SCROLL</p>
        <div className="flex animate-bounce justify-center">
          <ArrowDown size={32}/>
        </div>
      </a>
    </div>

  </section>
);

export default Home;
