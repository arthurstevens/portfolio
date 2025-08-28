// import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
