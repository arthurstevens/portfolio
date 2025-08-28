import { useState } from 'react';
import type { NavItem } from '../../types.ts';
import Menu from './icons/Menu';
import Cross from './icons/Cross';

const Navbar = ({ sections }: { sections: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-background text-secondary font-bold">
      <div className="mx-auto flex items-center p-x-4 justify-end">

        {/* Desktop menu */}
        <ul className="hidden w-full sm:flex justify-evenly">
          {sections.map((section) => (
            <li key={section.id} className="cursor-pointer hover:text-accent transition-colors duration-300">
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          className="sm:hidden text-primary z-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Cross size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile menu*/}
      {isOpen && (
        <ul className="fixed top-0 left-0 w-full h-screen text-primary bg-background-accent/85 flex flex-col justify-center items-center z-30 sm:hidden divide-y divide-border">
          {sections.map((section) => (
            <li
              key={section.id}
              className="p-4 text-2xl cursor-pointer hover:text-accent text-center transition-colors duration-300 w-1/2"
            >
              <a
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar
