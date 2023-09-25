import { Link } from "react-router-dom";
import LoguearseModal from "./LoguearseModal"

export default function Evento({eventName, eventDate,img,eventTime,location,description}) {

    return (
        <div>
            <div className="title">
                <div className="titlesection" id="titlesection">
                    {`<h1>${eventName} ${eventDate}</h1>`}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="divider"></div>
                </div>
                <div className="row">
                    <div className="box">
                        <div id="eventfoto">
                            {`<img src=${img} alt="" />`}
                        </div>
                        <div id="eventdetails">
                            {`<p>Fecha: ${eventDate}</p>
                        <p>Hora: ${eventTime}</p>
                        <p>Ubicación: ${location}</p>`}
                        </div>
                        <div id="eventdescription">
                            {<p>{description}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="divider"></div>
                </div>
                <div className="row">
                    <div className="calltoaction">
                        <button id="calltoaction">
                        {/* Usar Link para navegar a LoguearseModal */}
                        <Link to="/loguearse-modal">¡Apúntate!</Link>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="divider"></div>
                </div>
            </div>
        </div>
    )
}