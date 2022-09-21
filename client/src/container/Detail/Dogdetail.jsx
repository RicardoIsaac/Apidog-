import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import Headerdog from "../Header/Header";
import { getDetail } from "../redux/actions/productActions";
import "../Styles/Styles.css"

export default function DogDetails() {
    
    const { id } = useParams()
    const dispatch = useDispatch();
    const myDog = useSelector((state) => state.detail);



    useEffect(() => {
      dispatch(getDetail(id));
    }, [dispatch, id]);



    return(
        <div className="detail">
            <Headerdog/>
        {myDog !== undefined ? (
          <div className="containerc">
            <img className="imgdetail" src={myDog[0].image} 
            alt={myDog[0].name}  />
            <h1>Lord {myDog[0].name} </h1>
            <div className="letters">
            <p>Weight: {myDog[0].weight[0]}-{myDog[0].weight[1]} kg</p>
            <p>Height: {myDog[0].height[0]}-{myDog[0].height[1]} cm</p>
            <p>Life Span: {myDog[0].life_span}</p>
            <p>
              Temperaments: {myDog[0].temperaments? myDog[0].temperaments.map((el) => el + ', '):myDog[0].TempDogs.map(({name , value}) => ( name + ', ' ))}
            </p>
            </div>
          </div>
        ) : ( <p>loading...</p>
        )}
        <div>
       
        </div>
      </div>
    )

}

