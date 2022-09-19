import React from "react";
import "../Styles/Styles.css"

export default function CatCard({image,name,temperament,weight,TempCat,createdindb}) {
    let texto="";
    let img="";
    if(temperament){
    for (let i = 0; i < temperament.length; i++) {
        texto = texto+temperament[i]+" ";
        
    }
    }
    if(TempCat){
        for (let i = 0; i < TempCat.length; i++) {
            texto = texto+TempCat[i]+" ";
            
        }     
    }
    console.log(image)
    return (
        <div>
            
         <div className="card"> 
             <div className="flip-card">
             <div className="card-front">

                {image?
            image.id?(<img className="img" src={`https://cdn2.thecatapi.com/images/${image.id}.jpg`} alt={name} />):(<img className="img" src={image} alt={name} />)   
            : <img className="img" src={"https://i.imgur.com/4zIcitq.png"} alt={name} />
            }

                


                 {/*<img className="img" src={`https://cdn2.thecatapi.com/images/${image.id}.png`} alt={name} />*/}
             </div>
             <div className="card-back">
             <div>Nombre: {name}</div>
 {texto?(<div>Temperamento: {texto}</div>):( <div>The temperament of this lady has been lost in the great war</div>) }

             <div>Tamaño: {weight[0]}-{weight[1]} cm</div>
             </div>
             </div>
         </div>
         
         </div>

         ); 
}