import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
