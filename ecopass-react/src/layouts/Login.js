import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
      <div class="containerFather">
          <h3 class="titleLogin">LOGIN</h3>
          <div class="container">
              <label for="name" class="name label">Nombre:</label>
              <input type="text" class="input" id="name" placeholder="Escribe tu nombre"/>
              <label for="password" class="password label">Contraseña:</label>
              <input type="password" class="input" id="password" placeholder="Escribe tu contraseña"/>
              <a href="." class="forgotPassword">Has olvidado tu contraseña?</a>
              <button class="buttonSend"><a href="./perfil_usuario_registrado.html">Enviar</a></button>
          </div>
      </div>
    </>

  )
}

export default Login