import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Skill from './Skill';

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Portfolio />
     <Skill />
     <Contact />
    </>

  );
}

export default App;
