import EducationCard from "./ui/EducationCard"

const About = () => {
  return (
    <section id="about" className="flex justify-center w-full min-h-screen p-5 text-primary">
      <div className="max-w-6xl">
        {/* Title */}
        <div className="flex flex-col items-center mt-20 mb-15">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto text-center">
            A passionate computer science student with a hunger to listen, practice, and create.
          </p>
        </div>
        {/* Content */}
        <div className="flex space-x-15">
          {/* Left */}
          <div className="w-1/2 flex items-center justify-center">
            <img 
              alt="Headshot"
              src="src/assets/headshot.jpg"
              className="border-5 border-accent/80 rounded-xl max-w-md shadow-[0_0_15px_theme(colors.accent)]"
            />
          </div>
          {/* Right */}
          <div className="w-1/2 space-y-3">
            <h3 className="text-2xl font-semibold">Hello! I'm Arthur.</h3>
            <p className="text-secondary">
              I'm a second year computer sccience student at University with a passion for problem solving, 
              creating innovative solutions. My journey in computing began with my incessant questioning — 
              great for me, a grievance for others, landing me on the internet.
              <br /><br />
              This root grew into the deep love I have for tech today. Impactful solutions, inventive
              experiences. I have solved issues for myself, my friends and family, and I hope to extend that 
              reach.
            </p>
            <div className="mt-4 mb-4">
              <EducationCard />
            </div>
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
  )
}

export default About
