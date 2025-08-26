const Terminal = () => {
  return (
    <div className="bg-card border border-accent/30 rounded p-6 mx-auto min-w-lg max-w-md text-sm backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-red-300" />
        <div className="w-2 h-2 rounded-full bg-orange-300" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-secondary text-xs ml-2">terminal</span>
      </div>
      <div className="text-left space-y-1">
        <div className="text-accent">$ whoami</div>
        <div className="text-primary">arthur_srodzinski-stevens</div>
        <div className="text-secondary">// Skills...</div>
        <div className="text-primary">const skills = [</div>
        <div className="pl-4 text-accent">'Java', 'Python', 'Go', 'SQL', ...</div>
        <div className="text-primary">];</div>
        <div className="text-secondary">
          Status: <span className="text-accent">LEARNING</span>
        </div>
        <div className="text-accent terminal-cursor w-min">$</div>
      </div>
    </div>
  )
}

export default Terminal
