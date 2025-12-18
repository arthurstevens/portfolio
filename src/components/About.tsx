import EducationCard from './ui/EducationCard';
import headshot from '/headshot.jpg'

const About = () => (
  <section id="about" className="flex justify-center min-h-full p-5 text-primary">
    <div className="w-full max-w-5xl">

      {/* Title */}
      <div className="flex flex-col items-center mt-20 mb-15">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto text-center">
          A passionate computer science student with a hunger to listen, practice, and create.
        </p>
      </div>

      {/* Content */}
      <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
        {/* Left */}
        <div className="flex align-middle justify-center items-center flex-col max-w-[450px]">
          <img 
            alt="Headshot"
            src={headshot}
            className="border-5 border-accent/80 rounded-xl max-w-full sm:max-w-md max-h-[450px] h-auto object-contain shadow-[0_0_15px_theme(colors.accent)]"
          />

          {/* Education */}
          <div className="mt-4 mb-4">
            <EducationCard />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-3 sm:pl-6">
          <h3 className="text-2xl font-semibold">Hello! I'm Arthur.</h3>
          {/* About */}
          <p className="text-secondary">
            I am learning <strong>full-stack</strong> and <strong>systems-level solutions</strong>, with experience in building backend systems, databases, and 
            deploying applications to cloud.
            <br /><br />
            I'm a second-year computer science student at university, with a drive for problem solving and
            creating innovative solutions. My journey in computing began with wanting to know <strong>how</strong> 
            something operates, not just what it achieves. Perhaps one of my weaknesses, not accepting an interface 
            and needing to diving into its dependency-hell.
            <br /><br />
            This curisoity rooted itself and is ever-growing into the love I have for tech today. I've applied this 
            interest to real projects: from building a <strong>custom load balancer</strong> exploring concurrency, 
            fault tolerance, and custom CLI tooling, to a <strong>web-based monitoring tool</strong> for data visualisation 
            and KPIs. I currently enjoy solving day-to-day problems whilst bettering my understanding of low-level systems.
          </p>

          {/* Extra */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Other Interests</h4>
            <p className="text-secondary">
              When I'm not exploring new or old technologies, you'll find me adventuring ⛰️, working out in the gym 🏋️, or enjoying a cosy night in ☕.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About
