import Education from "./icons/Education"

const EducationCard = () => {
  return (
    <div className="flex flex-col space-y-3 justify-center p-10 rounded-lg border-1 border-border">
      <div className="flex space-x-3 text-accent">
        <Education />
        <h4 className="text-lg font-semibold text-primary">Education</h4>
      </div>
      <p className="font-medium">Bachelor of Science in Computing Science</p>
      <p className="text-secondary">University of East Anglia • 2024-2028</p>
      <p className="text-secondary text-sm">
        Relevant Coursework: Database Systems, Programming (Java OOP), Advanced Mathematics, Web-Based Programming, Principles of Computing
      </p>
    </div>
  )
}

export default EducationCard
