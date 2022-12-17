import './App.css'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
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
        <Footer />
      </div>
    </>
  )
}

export default App;