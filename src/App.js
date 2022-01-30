import Preloader from './components/Preloader'
import Timer from './components/Timer'
import Contact from './components/Contact'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>
          MMBC
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Contact />
        <Preloader />
      </div>
    </div>
  )
}

export default App
