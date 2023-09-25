
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import Routing from './Routing';
import Evento from './components/Evento';

/*

  const [modal, setModal] = useState(true)

  function desactivaModal() {
    setModal(false); //ir a ...
  }
  console.log(modal)
  {modal && <LoguearseModal closed={desactivaModal} />}
  return (
    */

export function App() {

  <div className='App'>

    <Navbar />
    <Evento />
    <Footer />

  </div>
}

export default App;
