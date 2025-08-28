import Email from './icons/Email'
import Location from './icons/Location'

const ContactInformation = () => (
  <div className="border-1 border-border rounded-lg p-5 w-full">
    <h4 className="text-lg font-semibold text-primary mb-4">Contact Information</h4>
    <ul>
      {/* Email */}
      <li className="flex items-center gap-4 mb-2">
        <div className="bg-accent/15 rounded-md w-min p-1 text-accent">
          <Email />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">Email</span>
          <a 
            href="mailto:arthursrodzinskistevens@gmail.com"
            className="text-secondary hover:text-accent transition duration-150"
          >
            arthursrodzinskistevens@gmail.com
          </a>
        </div>
      </li>
      {/* Location */}
      <li className="flex items-center gap-4 mb-2">
        <div className="bg-accent/15 rounded-md w-min p-1 text-accent">
          <Location />
        </div>
        <div className="flex flex-col">
          <span className="font-medium">Location</span>
          <span className="text-secondary">Cambridge, UK</span>
        </div>
      </li>
    </ul>
  </div>
)

export default ContactInformation
