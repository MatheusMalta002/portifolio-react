import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Work/Projects';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;

