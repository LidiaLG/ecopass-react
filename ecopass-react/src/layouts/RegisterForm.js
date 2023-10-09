import RegisterModal from '../components/RegisterModal'
import './RegisterForm.css'
import { Link } from 'react-router-dom'

export default function RegisterForm() {

    return (
        <>
            <div className="row"><div className="divider"></div></div>
            <div className="title"><div className="titlesection"><h1>¡REGÍSTRATE!</h1></div></div>
            <div className="registercontainer">
                <div className="row"><div className="divider"></div></div>
                <div className="row" id="formulario">
                    <div className="registerbox">
                        <form id="registerform" action="/my-handling-form-page" method="post">
                            <p><label for="name">Nombre:</label></p>
                            <p><input type="text" id="name" required /></p>
                            <p><label for="birthdate">Fecha de nacimiento:</label></p>
                            <p><input type="date" id="birthdate" min="2005-01-01" max="2009-12-31" required /></p>
                            <p><label for="email">Email:</label></p>
                            <p><input type="email" id="email" required /></p>
                            <p><label for="phonenumber">Teléfono:</label></p>
                            <p><input type="tel" id="phonenumber" pattern="[0-9]{9}" required /></p>
                            <p><label for="pwd1">Contraseña:</label></p>
                            <p><input type="password" id="pwd1" minlength="8" maxlength="12"
                                placeholder="Entre 8 y 12 caracteres" required /></p>
                            <p><label for="pwd2">Confirmar contraseña:</label></p>
                            <p><input type="password" id="pwd2" minlength="8" maxlength="12"
                                placeholder="Entre 8 y 12 caracteres" required /></p>
                            <p>
                                <input type="checkbox" id="aceptoterminosycondiciones" />
                                <label for="aceptoterminosycondiciones">He leído y acepto los <a href="./terminosyc.html">términos y condiciones de uso</a></label>
                            </p>
                            <Link to='/registerModal'>
                                <p><button type="submit" id="registerbutton" value="REGISTRARSE">REGISTRARSE</button></p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row"><div className="divider"></div></div>
        </>
    )
}