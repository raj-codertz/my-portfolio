import './App.css'
import About from './components/About';
import Hero from './components/Hero';
import Navbar from "./components/Navbar.jsx";
import Skills from './components/Skills';
import Work from './components/Work';

function App() {

  return (
      <div>
         <Navbar />
         <Hero />
         <About />
         <Skills />
         <Work />
      </div>
  )
}

export default App
