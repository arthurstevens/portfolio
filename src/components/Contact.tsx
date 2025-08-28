import ContactForm from './ui/ContactForm'

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
        <div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
