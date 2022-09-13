import React from "react";
import "./DogComponent.css"


const Card = ({image,name,temperament,weight}) => {
    let texto="";
    for (let i = 0; i < temperament.length; i++) {
        texto = texto+temperament[i]+" ";
        
    }
console.log(name)
console.log("//////////////////")

        return (
           <div>
               
            <div className="card"> 
                <div className="flip-card">
                <div className="card-front">
                    <img className="img" src={image} alt={name} />
                </div>
                <div className="card-back">
                <div>Nombre: {name}</div>
                <div>Temperamento: </div>
                <div>
                    <p>{texto}</p>
 
                </div>
                <div>Tamaño: {weight[0]}-{weight[1]} cm</div>
                </div>
                </div>
            </div>
            
            </div>

            ); 
 
    }

    
 

export default Card
