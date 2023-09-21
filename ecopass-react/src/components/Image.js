
function getFotos(){

    const fotos = [
        {
          "id": 1,
          "fotoName": "concert(1)",
          "fotoDesc": "Personas bailando en un concierto.",
          "img": "./images/concert (1).jpg"
        },
        {
          "id": 2,
          "fotoName": "concert(2)",
          "fotoDesc": "Fotografía de una batería.",
          "img": "./images/concert (2).jpg"
        },
        {
          "id": 3,
          "fotoName": "concert(3)",
          "fotoDesc": "Una mujer tocando la guitarra eléctrica.",
          "img": "./images/concert (3).jpg"
        },
        {
          "id": 4,
          "fotoName": "concert(4)",
          "fotoDesc": "Un chico tocando la guitarra eléctrica",
          "img": "./images/concert (4).jpg"
        },
        {
          "id": 5,
          "fotoName": "concert(5)",
          "fotoDesc": "Una persona cantando en medio de un escenario.",
          "img": "./images/concert (5).jpg"
        },
        {
          "id": 6,
          "fotoName": "concert(6)",
          "fotoDesc": "Personas bailando en un concierto.",
          "img": "./images/concert (6).jpg"
        }
      ];
}



function Image({img, desc}){
    return (
        <div className="foto">
          <img src={img} alt={desc} />
        </div>
    )

}

export default Image;