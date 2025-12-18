import ContactForm from './ui/ContactForm';
import ContactInformation from './ui/ContactInformation';
import Connections from './ui/Connections';
import FadeUpSection from './ui/FadeUpSection';

const Contact = () => (
  <section id="contact" className="flex justify-center w-full min-h-full p-5 mb-5 text-primary">
    <div className="max-w-6xl">

      {/* Title */}
      <div className="flex flex-col items-center mt-20 mb-15">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto text-center">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Contact form */}
        <FadeUpSection>
          <ContactForm />
        </FadeUpSection>

        {/* Other details and fluff */}
        <div className="space-y-4">
          <FadeUpSection>
            <ContactInformation />
          </FadeUpSection>

          <FadeUpSection>
            <Connections />
          </FadeUpSection>

          <FadeUpSection>
            <div className="flex flex-col text-center justify-center items-center bg-accent text-black rounded-lg p-5 w-full">
              <h4 className="text-lg font-semibold mb-4">Interested in collaborating?</h4>
              <p>I'm always excited to work on new projects and learn from experienced developers.</p>
            </div>
          </FadeUpSection>
        </div>

      </div>
    </div>
  </section>
);

export default Contact
