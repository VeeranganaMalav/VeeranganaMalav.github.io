import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
