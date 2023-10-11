

export default function Event({event_img, event_name, localitation, event_date}){

    return(
        <div class="container">
            <div class="row" id="newestevents"><h1>¡¡EVENTO ANTERIOR!!</h1></div>
            <div class="card mb-3 card-events" style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={event_img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title"><strong> {event_name} </strong></h2>
                            <h3 class="card-text"><small>{localitation}</small></h3>
                            <h3 class="card-text"><small>{event_date}</small></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}