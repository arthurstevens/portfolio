import SendMessage from './icons/SendMessage';

const ContactForm = () => (
  <div className="border-1 border-border h-full rounded-lg p-5 w-full">
    {/* Heading */}
    <h4 className="flex gap-2 items-center text-lg font-semibold text-accent mb-4">
      <SendMessage size={32} />
      <span className="text-primary">Send me a message</span>
    </h4>

    {/* Contact form */}
    <form
      action="https://formspree.io/f/xldwdnlq"
      method="POST"
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Name */}
        <label className="flex-1">
          <span className="font-medium">Name</span>
          <input 
            name="name"
            placeholder="Your name"
            required
            className="flex w-full mt-1 border border-border rounded-sm px-3 py-1 focus:border-accent focus:ring-accent/50 focus:ring-[3px] focus:outline-none transition duration-150"
          />
        </label>

        {/* Email */}
        <label className="flex-1">
          <span className="font-medium">Email</span>
          <input 
            type="email" 
            name="email" 
            required
            placeholder="your.name@example.com"
            className="flex w-full mt-1 border border-border rounded-sm px-3 py-1 focus:border-accent focus:ring-accent/50 focus:ring-[3px] focus:outline-none transition duration-150"
          />
        </label>
      </div>

      {/* Subject */}
      <label>
        <span className="font-medium">Subject</span>
        <input 
          name="subject" 
          placeholder="What's this about?"
          required
          className="flex w-full mt-1 border border-border rounded-sm px-3 py-1 focus:border-accent focus:ring-accent/50 focus:ring-[3px] focus:outline-none transition duration-150"
        />
      </label>

      {/* Message */}
      <label>
        <span className="font-medium">Message</span>
        <textarea 
          name="message" 
          placeholder="Tell me about your project or just say hello!"
          required
          className="flex w-full mt-1 min-h-32 border border-border rounded-sm px-3 py-1 focus:border-accent focus:ring-accent/50 focus:ring-[3px] focus:outline-none transition duration-150"
        />
      </label>

      {/* Submit */}
      <button 
        type="submit" 
        className="flex justify-center mt-5 mb-5 items-center gap-2 font-medium bg-accent hover:bg-accent/90 text-black py-1.5 rounded-sm"
      >
        <SendMessage />
        <span>Send Message</span>
        
      </button>
    </form>
  </div>
);

export default ContactForm
