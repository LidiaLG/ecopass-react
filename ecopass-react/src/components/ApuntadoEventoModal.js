import "./ApuntadoEventoModal.css"

export default function ApuntadoEventoModal() {
    
    return (
      <div className="callout">
        <a href="evento.html" className="closebtn" style={{ textDecoration: 'none' }}>&times;</a>
        <div className="callout-container">
          <p>Te has apuntado satisfactoriamente al evento, recibirás un email de confirmación!</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-check" fill="#4FC0D0">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </div>
      </div>
    );
  }
