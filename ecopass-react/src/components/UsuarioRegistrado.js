import "./UsuarioRegistrado.css"

export default function () {
    

return(
<div class="container">

<div class="card-container">
    <div class="usuario">
        <img src="./images/imagen_perfil_1.jpg"/>
    </div>
    <h3>@Marta34</h3>
    <p id="frase">Carpe Diem</p>
    <p>Me gusta el Rock y pasear a mis perros.</p>
</div>

<div class="foto-container">

    <div class="foto">
        <img src="./images/concert (1).jpg" alt="Personas bailando en un concierto."/>
    </div>
    <div class="foto">
        <img src="./images/concert (2).jpg" alt="Fotografía de una batería."/>
    </div>
    <div class="foto">
        <img src="./images/concert (3).jpg" alt="Una mujer tocando la guitarra eléctrica."/>
    </div>
    <div class="foto">
        <img src="./images/concert (4).jpg" alt="Un chico tocando la guitarra eléctrica"/>
    </div>
    <div class="foto">
        <img src="./images/concert (5).jpg" alt="Una persona cantando en medio de un escenario."/>
    </div>
    <div class="foto">
        <img src="./images/concert (6).jpg" alt="Personas bailando en un concierto."/>
    </div>
    <div class="foto">
        <img src="../assets/camera-solid.svg" alt="icono de cámara" id="camera-icon" 
        style= {{height: "80px", width: "100px", alignSelf: "center"}}/>
    </div>
</div>


</div>
)
}