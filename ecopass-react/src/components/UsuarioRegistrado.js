import "./UsuarioRegistrado.css";
import "./UserEvents"
import UserEvents from "./UserEvents";

export default function UsuarioRegistrado(){

    return (
        <div class="container">

            <div class="card-container">
                <div class="usuario">
                    <img src="./images/imagen_perfil_1.jpg" />
                </div>
                <h3>@Marta34</h3>
                <p id="frase">Carpe Diem</p>
                <p>Me gusta el Rock y pasear a mis perros.</p>
            </div>

           <UserEvents />


        </div>
    )
}