const Terminal = () => {
  const tools = {
    Programming: ["C", "C++", "Python", "Java"],
    Backend: ["Go", "TS/JS (Node.js)"],
    Databases: ["PostgreSQL", "SQLite"],
    Frontend: ["React", "TS/JS", "EJS", "Tailwind"],
  };

  return (
    <div className="bg-card border-2 shadow-[0_0_5px_theme(colors.accent)] border-accent/30 rounded-md pt-1 pb-1 mx-auto w-full max-w-md text-sm backdrop-blur-sm">
      
      {/* Title bar */}
      <div className="flex items-center space-x-2 mb-4 pl-2 pr-2 pb-1 border-b border-accent/20">
        <div className="w-2 h-2 rounded-full bg-red-300" />
        <div className="w-2 h-2 rounded-full bg-orange-300" />
        <div className="w-2 h-2 rounded-full bg-green-600" />
        <code className="text-secondary text-s ml-2">kitty</code>
      </div>

      {/* Content */}
      <div className="text-left space-y-1 pl-3 pr-3 pb-1">
        <code className="text-accent">$ whoami</code><br/>
        <code className="text-primary">arthur_srodzinski-stevens</code><br/>
        <code className="text-accent">{'$ echo "${toolkit[@]}";'}</code><br/>
        <code className="text-secondary text-s">// suspiciously incorrect bash...</code><br/>
        <code className="text-primary">toolkit = {'{'}</code><br/>

        {/* Toolkit */}
        <div className="pl-3">
          {Object.entries(tools).map(([category, items]) => (
            <div key={category} className="text-accent">
              <code className="text-secondary">{category}</code>
              <code>: [</code>
              <code className="text-muted">
                {items.map((item, i) => (
                  <code key={i}>
                    '{item}'{i < items.length - 1 ? ", " : ""}
                  </code>
                ))}
              </code>
              <code>],</code>
            </div>
          ))}
        </div>

        <code className="text-primary">{'}'};</code><br/>
        <code className="text-accent">$ systemctl status</code><br/>
        <code className="text-secondary">
          Active: <span className="text-accent">active (studying)</span>
        </code><br/>

        {/* Cursor */}
        <code className="text-accent w-min">$<span className="animate-blink">|</span></code>
      </div>
    </div>
  );
};

export default Terminal
