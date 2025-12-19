import Code from './ui/icons/Code';
import Navbar from './ui/Navbar';

const Header = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full max-w-dvw py-4 z-20 bg-background-accent border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
        <div className="flex items-center space-x-1.5 sm:w-1/2">
          <Code className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
          <span className="text-primary font-bold text-lg text-nowrap sm:text-2xl">
              <span className="block sm:hidden">Arthur S-S</span>
              <span className="hidden sm:block">Arthur Srodzinski-Stevens</span>
          </span>
        </div>
        <div className="sm:w-1/2">
          <Navbar sections={sections} />
        </div>
      </div>
    </header>
  );
};

export default Header
