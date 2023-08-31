import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Work/Projects';
import ChangeTheme from './components/NavBar/ChangeTheme/ChangeTheme';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${theme === "light" ? "bg-light-primary" : "bg-dark-primary"}`}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ChangeTheme/>
    </div>
  );
}

export default App;

