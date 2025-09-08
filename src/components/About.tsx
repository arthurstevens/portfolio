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
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Left */}
        <div className="flex justify-center items-center">
          <img 
            alt="Headshot"
            src={headshot}
            className="border-5 border-accent/80 rounded-xl max-w-full sm:max-w-md max-h-[400px] h-auto object-contain shadow-[0_0_15px_theme(colors.accent)]"
          />
        </div>

        {/* Right */}
        <div className="space-y-3 sm:pl-6">
          <h3 className="text-2xl font-semibold">Hello! I'm Arthur.</h3>
          {/* About */}
          <p className="text-secondary">
            I'm a second-year computer science student at university, with a passion for problem solving and
            creating innovative solutions. My journey in computing began with my incessant questioning — 
            great for me, a grievance for others — landing me on the internet.
            <br /><br />
            This root grew into the deep love I have for tech today. Impactful solutions and inventive
            experiences. I have solved issues for myself, my friends and family, and I want to extend that 
            reach.
          </p>

          {/* Education */}
          <div className="mt-4 mb-4">
            <EducationCard />
          </div>

          {/* Extra */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Other Interests</h4>
            <p className="text-secondary">
              When I'm not exploring new or old technologies, you'll find me adventuring ⛰️, in the gym 🏋️, or having 
              a cosy night in ☕. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About
