import UserEvent from "./UserEvent";
import cameraIcon from '../assets/camera-solid.svg';

const ueData =
  [
    //eventos del usuario

    { foto: "./images/concert (1).jpg", desc: "Personas bailando en un concierto." },
    { foto: "./images/concert (2).jpg", desc: "Una mujer tocando la guitarra eléctrica." },
    { foto: "./images/concert (3).jpg", desc: "Fotografía de una batería." },
    { foto: "./images/concert (4).jpg", desc: "Un chico tocando la guitarra eléctrica" },
    { foto: "./images/concert (5).jpg", desc: "Una persona cantando en medio de un escenario." },
    { foto: "./images/concert (6).jpg", desc: "Personas bailando en un concierto." }
  ]


export default function UserEvents() {
  return (
    <div className="foto-container">

      {//llave para salir de html y entrar en javascript
        ueData.map( //
          (item) => {
            return <UserEvent image={item.foto} descr={item.descr} />
          }
        )}

      <div className="foto">
        <img src={cameraIcon} alt="icono de cámara" id="camera-icon"
          style={{ height: "80px", width: "100px", alignSelf: "center" }} />
      </div>
    </div>
  );
}
