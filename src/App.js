import './App.css'
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Intro />
      </div>
    </>
  )
}

export default App;