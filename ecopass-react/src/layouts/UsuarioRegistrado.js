import "./UsuarioRegistrado.css";
import Photo from './../assets/imagen_perfil_1.jpg'

const UsuarioRegistrado = () => {
  return (
    <div class="containerU">
      <div class="card-container">
        <div class="usuario">
          <img src={Photo} alt="foto usuario" />
        </div>
        <h3>@Marta34</h3>
        <p id="frase">Carpe Diem</p>
        <p>Me gusta el Rock y pasear a mis perros.</p>
      </div>

      <div class="foto-container">
        <div class="foto">
          <img
            src="./images/concert (1).jpg"
            alt="Personas bailando en un concierto."
          />
        </div>
        <div class="foto">
          <img
            src="./images/concert (2).jpg"
            alt="Fotografía de una batería."
          />
        </div>
        <div class="foto">
          <img
            src="./images/concert (3).jpg"
            alt="Una mujer tocando la guitarra eléctrica."
          />
        </div>
        <div class="foto">
          <img
            src="./images/concert (4).jpg"
            alt="Un chico tocando la guitarra eléctrica"
          />
        </div>
        <div class="foto">
          <img
            src="./images/concert (5).jpg"
            alt="Una persona cantando en medio de un escenario."
          />
        </div>
        <div class="foto">
          <img
            src="./images/concert (6).jpg"
            alt="Personas bailando en un concierto."
          />
        </div>
        <div class="foto">
      
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4FC0D0"
            alt="icono de cámara"
            id="camera-icon"
            style={{ height: "80px", width: "100px", alignSelf: "center", cursor: "pointer" }}
          >
            <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>

        </div>
      </div>
    </div>
  )
}

export default UsuarioRegistrado;