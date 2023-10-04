import { Outlet,Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo.svg';
import { useEffect } from 'react';

const Navbar = () => {
  /**Cuando hago click en .button, la clase .nav activa el TOGGLE 'activo' */
  useEffect(() => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');

    menu.addEventListener('click', () => {
      nav.classList.toggle('activo')
    });
  }, []);
  return (
    <header class="header">

      <button class="menu">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>


      </button>

      <a href="#" class="a">
        <img className="logo" src={Logo} alt="logo" />
      </a>

      <nav class="nav">
        <ul class="ul">
          <li class="li"><a href="" class="a">Home</a></li>
          <li class="li"><a href="" class="a">Registrarse</a></li>
          <li class="li"><a href="" class="a">Evento del mes</a></li>
          <li class="li"><a href="" class="a">Sobre Nosotros</a></li>
          <li class="li"><a href="" class="a">FAQ</a></li>
        </ul>
      </nav>

      <div class="buttons">
        <button class="login"><a href="./../login/login.html">Login</a></button>
        <button class="register"><a href="#">Register</a></button>
        <button id="user-icon"><a href="#"><i class="fa fa-user"></i></a></button>
      </div>

    </header>
  )
}

export default Navbar