import CodeIcon from './ui/CodeIcon.tsx'

const Header = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full py-4 z-20 bg-background-accent border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-1.5">
          <CodeIcon className="h-8 w-8 text-accent" />
          <span className="text-primary font-bold text-xl">Arthur Srodzinski-Stevens</span>
        </div>
        <nav className="w-1/2">
          <ul className="flex w-full justify-evenly">
            {sections.map((section) => (
              <li key={section.id} className="cursor-pointer font-bold text-secondary hover:text-accent transition-colors duration-500 ease-in-out">
                <a href={`#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
