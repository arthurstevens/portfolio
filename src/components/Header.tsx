import Code from './icons/Code'

const Header = () => {
  return (
    <header className="fixed top-0 w-full py-6 bg-accent border-b border-primary">
      <div className="max-w-7xl mx-auto flex items-center flex-row">
        <div className="flex space-x-1.5 mr-auto">
          <Code className="h-8 w-8 text-accent" />
          <span className="text-primary font-bold text-xl">Arthur Srodzinski-Stevens</span>
        </div>
      </div>
    </header>
  )
}

export default Header
