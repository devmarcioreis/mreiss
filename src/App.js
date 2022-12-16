import './App.css'
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Intro />
        <About />
        <Portfolio />
      </div>
    </>
  )
}

export default App;