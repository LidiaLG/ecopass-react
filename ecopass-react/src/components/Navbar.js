import React from 'react';
import './Navbar.css';
import Logo from '../assets/logo.svg';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  /**Cuando hago click en .button, lLink clase .nav activLink el TOGGLE 'activo' */
  useEffect(() => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');

    menu.addEventListener('click', () => {
      if (nav) {
        nav.classList.toggle('activo');
      }
    });
  }, []);
  return (
    <header className="header">

      <button className="menu">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

    <Link to="." className="a">
        <img className="logo" src={Logo} alt="logo" />
      </Link>

      <nav className="nav">
        <ul className="ul">
          <li className="li"><Link to="." className="a">Home</Link></li>
          <li className="li"><Link to="/register" className="a">Registrarse</Link></li>
          <li className="li"><Link to="." className="a">Evento del mes</Link></li>
          <li className="li"><Link to="/sobrenos" className="a">Sobre Nosotros</Link></li>
          <li className="li"><Link to="/faq" className="a">FAQ</Link></li>
        </ul>
      </nav>

      <div className="buttons">
        <button className="login"><Link to="/login">Login</Link></button>
        <button className="register"><Link to="/register">Register</Link></button>
        <button id="user-icon"><Link to="."><i className="fLink fa-user"></i></Link></button>
    </div>

    </header>
  )
}

export default Navbar