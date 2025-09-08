const Terminal = () => {
  const skills = {
    Backend: ["Go", "TypeScript/JavaScript (Node.js)"],
    Frontend: ["React", "TypeScript/JavaScript", "EJS", "Tailwind CSS"],
    Databases: ["PostgreSQL", "SQLite"],
    Programming: ["Python", "Java"],
  };

  return (
    <div className="bg-card border border-accent/30 rounded p-6 mx-auto w-full max-w-md text-sm backdrop-blur-sm">
      
      {/* Title bar */}
      <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-red-300" />
        <div className="w-2 h-2 rounded-full bg-orange-300" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-secondary text-xs ml-2">terminal</span>
      </div>

      {/* Content */}
      <div className="text-left space-y-1">
        <div className="text-accent">$ whoami</div>
        <div className="text-primary">arthur_srodzinski-stevens</div>
        <div className="text-secondary">// Skills...</div>
        <div className="text-primary">const skills = {'{'}</div>

        {/* Skills */}
        <div className="pl-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="text-accent">
              <span className="text-secondary">"{category}"</span>
              <span>: [</span>
              <span className="text-muted">
                {items.map((item, i) => (
                  <span key={i}>
                    "{item}"{i < items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
              <span>],</span>
            </div>
          ))}
        </div>

        <div className="text-primary">{'}'};</div>
        <div className="text-secondary">
          Status: <span className="text-accent">Building and tinkering... 🔧</span>
        </div>

        {/* Cursor */}
        <div className="text-accent terminal-cursor w-min">$</div>
      </div>
    </div>
  );
};

export default Terminal
