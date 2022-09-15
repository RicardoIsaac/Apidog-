import React from "react";
import "./DogComponent.css"


export default function Card ({image,name,temperament,weight,TempDogs})  {
    console.log(temperament)
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
        console.log("siuu")
console.log(TempDogs)
      
    }
//console.log(name)
//console.log("//////////////////")

        return (
           <div>
               
            <div className="card"> 
                <div className="flip-card">
                <div className="card-front">
                    <img className="img" src={image} alt={name} />
                </div>
                <div className="card-back">
                <div>Nombre: {name}</div>
 {/*texto para cambiar valores*/}           {texto?(<div>Temperamento: {texto}</div>):( <div>The temperament of this dog has been lost in the great war</div>) }

              { /* <div>Temperamento: </div>
                <div>
                    <p>{texto}</p>
                </div>
        */}
                <div>Tamaño: {weight[0]}-{weight[1]} cm</div>
                </div>
                </div>
            </div>
            
            </div>

            ); 
 
    }

    
 


