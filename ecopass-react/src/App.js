
import Router from './Router'


/*

  const [modal, setModal] = useState(true)

  function desactivaModal() {
    setModal(false); //ir a ...
  }
  console.log(modal)
  {modal && <LoguearseModal closed={desactivaModal} />}
  return (
    <> 
        <Router>
        </Router>
    </>
  
  );
}

    return (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/UsuarioRegistrado' element={<UsuarioRegistrado />} />
              <Route path='/EventoDetalles' element={<EventoDetalles/>} />
              <Route path='/ApuntadoEventoModal' element={<ApuntadoEventoModal/>} />
              <Route path='/LoguearseModal' element={<LoguearseModal/>} />
              <Route path='/RegistradoModal' element={<RegistradoModal/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        );
      }
