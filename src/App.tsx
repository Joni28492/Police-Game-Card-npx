import { Tablero, Mano, Navbar } from './components/UI';
import './App.css'
import { useContext } from 'react';
import { UIContext } from './context/UI';
function App() {
  const { openHandMenu } = useContext(UIContext)

  return (

    <div className="App">

      <Navbar />
      <Tablero />
      {
        (openHandMenu) && <Mano />
      }
    </div>

  )
}

export default App;
