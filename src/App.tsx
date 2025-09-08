import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div className="min-h-full bg-background-primary">
    <Header />
    <main className="min-h-full w-full">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    <hr className="border-t-1 border-secondary mx-auto" />
    <Footer />
  </div>
);

export default App
