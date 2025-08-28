import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Header />
      <main className="min-h-screen w-screen">
        <Home />
        <About />
        <Projects />
        {/* <Contact /> */}
      </main>
      <hr className="max-w-7xl border-t-1 border-secondary mx-auto" />
      <Footer />
    </div>
  )
}

export default App
