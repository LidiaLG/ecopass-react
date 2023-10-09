import './main.css'

export default function CardEP({event_img, event_name, localitation, event_date, event_desc}){
    return(
        <div class="row" id="upcomingevent"><h1 class="prox">¡¡PRÓXIMO EVENTO!!</h1>
            <div class="card mb-3 card-events" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={event_img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><strong> {event_name} </strong></h5>
                            <p class="card-text">{event_desc}</p>
                            <p class="card-text"><small class="text-body-secondary">{localitation}</small></p>
                            <p class="card-text"><small class="text-body-secondary">{event_date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}