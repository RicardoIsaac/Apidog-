import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getCatDetail } from "../redux/actions/productActions";
import Headercat from "../Header/Header";
import "../Styles/Styles.css"

export default function CatDetails() {

    const {id}=useParams();
    const dispatch = useDispatch();
    const myCat = useSelector((state) => state.detailcat);
   
    useEffect(() => {
        dispatch(getCatDetail(id));
      }, [dispatch, id]);
    

      return(
        <div className="detail">
            <Headercat/>
        {myCat[0] !== undefined ? (
          <div className="containerc">
            
            <img className="imgdetail" src={myCat[0].image.url?myCat[0].image.url:myCat[0].image} 
            alt={myCat[0].name}  />
            <h1>Lady {myCat[0].name} </h1>
            <div className="letters">
            <p>Weight: {myCat[0].weight[0]}-{myCat[0].weight[1]} kg</p>
            <p>Life Span: {myCat[0].life_span}</p>
            <p>Kingdom: {myCat[0].origin}</p>
            <p>
              Temperaments: {myCat[0].temperaments? myCat[0].temperaments.map((el) => el + ', '):myCat[0].TempCats.map(({name , value}) => ( name + ', ' ))}
            </p>
            </div>
          </div>
        ) : ( <p>loading...</p>
        )}


        </div>
      )


}