

export default function EventList({event_img}){
    return(
        
        <div className="card-galery">
            <div class="card mb-3 card-events-galery" id="cardg" style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-12" id="div-image">
                        <img src={event_img} class="image-galery" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}