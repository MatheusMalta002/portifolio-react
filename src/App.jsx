import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import { About } from './components/About/About.jsx'

function App() {


  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center'>
      <NavBar />
      <Home />
      <About />
    </div>
  )
}

export default App
