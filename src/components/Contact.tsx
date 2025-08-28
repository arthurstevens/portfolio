import ContactForm from './ui/ContactForm'
import ContactInformation from './ui/ContactInformation'

const About = () => {
  return (
    <section id="contact" className="flex justify-center w-full min-h-screen p-5 text-primary">
      <div className="max-w-6xl">
        {/* Title */}
        <div className="flex flex-col items-center mt-20 mb-15">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto text-center">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactInformation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
