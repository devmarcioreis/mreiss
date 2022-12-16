import './App.css'
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Intro />
        <About />
      </div>
    </>
  )
}

export default App;