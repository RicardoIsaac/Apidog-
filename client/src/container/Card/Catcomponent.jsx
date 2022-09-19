import React from "react";
import "../Styles/Styles.css"

export default function CatCard({image,name,temperament,weight,TempCat}) {
    let texto="";
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
    return (
        <div>
            
         <div className="card"> 
             <div className="flip-card">
             <div className="card-front">
                {image?(<img className="img" src={`https://cdn2.thecatapi.com/images/${image.id}.jpg`} alt={name} />):(<img className="img" src={null} alt={name} />)}


                 {/*<img className="img" src={`https://cdn2.thecatapi.com/images/${image.id}.png`} alt={name} />*/}
             </div>
             <div className="card-back">
             <div>Nombre: {name}</div>
 {texto?(<div>Temperamento: {texto}</div>):( <div>The temperament of this dog has been lost in the great war</div>) }

             <div>Tamaño: {weight[0]}-{weight[1]} cm</div>
             </div>
             </div>
         </div>
         
         </div>

         ); 
}