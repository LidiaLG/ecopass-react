import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faq from './layouts/Faq'
import MisionVision from './layouts/MisionVision'
import RegisterForm from './layouts/RegisterForm'
import Login from './layouts/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Router = () => {
  return (
    <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/sobrenos" element={<MisionVision/>}/>
                <Route path="/faq" element={<Faq/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
  )
}

export default Router