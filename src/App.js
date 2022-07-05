import './App.css';
import AboutMe from './components/AboutMe';
import CV from './components/CV';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
}

export default App;
