
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//importar las diferentes páginas
import UsuarioRegistrado from './components/UsuarioRegistrado';
import LoguearseModal from './components/LoguearseModal';
import ApuntadoEventoModal from './components/ApuntadoEventoModal';
import EventoDetalles from './components/EventoDetalles.js';

/*

  const [modal, setModal] = useState(true)

  function desactivaModal() {
    setModal(false); //ir a ...
  }
  console.log(modal)
  {modal && <LoguearseModal closed={desactivaModal} />}
  return (
    */

export default function App() {



    return (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/UsuarioRegistrado' element={<UsuarioRegistrado />} />
              <Route path='/EventoDetalles' element={<EventoDetalles/>} />
              <Route path='/ApuntadoEventoModal' element={<ApuntadoEventoModal/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        );
      }
