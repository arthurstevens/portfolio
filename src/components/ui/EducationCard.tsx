import Education from './icons/Education';

const EducationCard = () => (
  <div className="flex flex-col space-y-3 justify-center p-6 rounded-lg border-1 border-border">
    <div className="flex space-x-3 text-accent">
      <Education />
      <h4 className="text-lg font-semibold text-primary">Education</h4>
    </div>

    {/* University */}
    <p className="font-medium">Bachelor of Science in Computer Science</p>
    <p className="text-secondary">University of East Anglia • 2024-2028</p>
    <p className="text-secondary text-sm">
      <strong>Relevant Coursework:</strong> Database Systems, Programming (Java OOP), Advanced Mathematics, Web-Based Programming, Principles of Computing
    </p>
    <p className="text-secondary text-sm">
      Currently building skills in backend systems, full-stack development, and systems-level problem solving through hands-on projects.
    </p>

    {/* A-Levels */}
    <p className="font-medium">A-Levels</p>
    <p className="text-secondary">Self-studied • 2023-2024</p>
    <p className="text-secondary text-sm">
      <strong>Subjects:</strong> Mathematics, Physics, and Computer Science
    </p>
  </div>
);

export default EducationCard
