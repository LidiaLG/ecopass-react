import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faq from './layouts/Faq'
import MisionVision from './layouts/MisionVision'
import RegisterForm from './layouts/RegisterForm'
import Login from './layouts/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EventoDetalles from './layouts/EventoDetalles'
import UsuarioRegistrado from './layouts/UsuarioRegistrado'
import ApuntadoEventoModal from './components/ApuntadoEventoModal'
import RegisterModal from './components/RegisterModal'
import Home from './layouts/Home'


const Router = () => {
  return (
    <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<RegisterForm/>}></Route>
                <Route path="/event" element={<EventoDetalles/>}></Route>
                <Route path="/sobrenos" element={<MisionVision/>}></Route>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/userRegist" element={<UsuarioRegistrado/>}></Route>
                <Route path="/apuntadoEventoModal" element={<ApuntadoEventoModal/>}/>
                <Route path='/registerModal' element={<RegisterModal/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
  )
}

export default Router