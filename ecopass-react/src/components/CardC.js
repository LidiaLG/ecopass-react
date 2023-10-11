


export default function CardC({event_img, event_name}){
    return(
        <>
        

            <img src={event_img} alt="" className="imagenCarousel" style={{width:'300px'}} />

            <h5><strong>{event_name}</strong></h5>
        
            
        </>
    )

}