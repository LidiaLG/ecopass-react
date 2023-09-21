import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div class="container-footer">
        <h4 class="contact">Contacta con nosotros</h4>
        <ul class="rrss">
            <li class="iconsRrss"><a href="."><i class="fa-brands fa-facebook-f"></i></a></li>
            <li class="iconsRrss"><a href="."><i class="fa-brands fa-twitter"></i></a></li>
            <li class="iconsRrss"><a href="."><i class="fa-brands fa-instagram"></i></a></li>
            <li class="iconsRrss"><a href="."><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="iconsRrss"><a href="."><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
    </div>
    </>
  )
}

export default Footer