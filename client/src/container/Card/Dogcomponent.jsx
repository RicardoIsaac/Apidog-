import React from "react";
import "../Styles/Styles.css"


export default function Card ({image,name,temperament,weight,TempDogs})  {

let texto="";
    if(temperament){
    for (let i = 0; i < temperament.length; i++) {
        texto = texto+temperament[i]+" ";
        
    }
    }
    if(TempDogs){
        for (let i = 0; i < TempDogs.length; i++) {
            texto = texto+TempDogs[i]+" ";
            
        }

      
    }

        return (
           <div>
               
            <div className="card"> 
                <div className="flip-card">
                <div className="card-front">
                    <img className="img" src={image} alt={name} />
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

    
 


