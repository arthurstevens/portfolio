import Education from './icons/Education';

const EducationCard = () => (
  <div className="flex flex-col space-y-3 justify-center p-10 rounded-lg border-1 border-border">
    <div className="flex space-x-3 text-accent">
      <Education />
      <h4 className="text-lg font-semibold text-primary">Education</h4>
    </div>
    <p className="font-medium">Bachelor of Science in Computing Science</p>
    <p className="text-secondary">University of East Anglia • 2024-2028</p>
    <p className="text-secondary text-sm">
      <strong>Relevant Coursework:</strong> Database Systems, Programming (Java OOP), Advanced Mathematics, Web-Based Programming, Principles of Computing
    </p>
    <p className="text-secondary text-sm">
      Currently building skills in backend systems, full-stack development, and systems-level problem solving through hands-on projects.
    </p>
  </div>
);

export default EducationCard
