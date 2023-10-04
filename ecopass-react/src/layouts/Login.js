import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="containerFather">
          <h3 className="titleLogin">LOGIN</h3>
          <div className="container">
              <label for="name" className="name label">Nombre:</label>
              <input type="text" className="input" id="name" placeholder="Escribe tu nombre"/>
              <label for="password" className="password label">Contraseña:</label>
              <input type="password" className="input" id="password" placeholder="Escribe tu contraseña"/>
              <a href="." className="forgotPassword">Has olvidado tu contraseña?</a>
              <button className="buttonSend"><Link to="/userRegist">Enviar</Link></button>
          </div>
      </div>
    </>

  )
}

export default Login