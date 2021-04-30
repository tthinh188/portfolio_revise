import './App.css';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Home from './componenets/Home/Home';
import Nav from './componenets/Nav/Nav';
import Projects from './componenets/Projects/Projects';
import Skills from './componenets/Skills/Skills';
import background from './assets/background_small.jpg';

function App() {
  return (
    <div className="app">
      <img src={background} className="app_background"></img>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
