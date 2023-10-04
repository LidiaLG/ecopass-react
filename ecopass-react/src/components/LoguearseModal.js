import "./LoguearseModal.css";

export default function LoguearseModal({ closed }) {
    return (
        <div className="modal-overlay">
        <div className="containerModal">
            <div className="callout">
            <button className="closebtn" style={{ textDecoration: 'none' }}  onClick={closed}>&times;</button>
                <div className="callout-container">
                    <p>Tiene que estar logueado a la página para poder registrarse a un evento.</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#4FC0D0" className="user"
                    >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                </div>
            </div>
        </div >
        </div >
    );
}
