import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { validate } from "./Validator";
import {getCatTemps,postCAT } from "../redux/actions/productActions";
import Headercat from "../Header/Header";
import "../Styles/Styles.css"
export default function CatCreate() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.cattemperaments);
    const [errors, setErrors] = useState({});
    const [temps, setTemps] = useState([]);
    const [input, setInput] = useState({
        name: "",
        origin: "",
        weightMin: "",
        weightMax: "",
        lifeSpan: "",
        image: "",
        temperament: [],
      })
      useEffect(() => {
        dispatch(getCatTemps());
      }, [dispatch])
      function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value,
        })
        );
      }
      function handleSelect(e) {
        if (!temps.includes(e.target.value)) {
          if (temps.length > 0) {
            setTemps([...temps, e.target.value]);
          } else {
            setTemps([e.target.value]);
          }
        }
      }
      function handleDelete(e) {
        e.preventDefault();
        setTemps(temps.filter((temp) => temp !== e.target.value));
      }
    

      function handleSubmit(e) {
        if (
          input.name &&
          input.weightMin &&
          input.origin &&
          input.weightMax &&
          input.temperament) {
          const newCat = {
            name: input.name,
            origin: input.origin,
            weight: [input.weightMin,input.weightMax],
            life_span: input.lifeSpan+" years",
            createdInDb:true,
            temperament: temps,
          }
          e.preventDefault();
          dispatch(postCAT(newCat))
          alert("The new Lady has come")
          setInput({
            name: "",
            min_weight: "",
            max_weight: "",
            origin: "",
            life_span: "",
            temperament: [],
          });
          setTemps([])
        } else { return alert(errors.map((errors)=>errors)) }
        console.log(errors)
      }



    return (
        <div className="detail">
        <div className="Titulo" >
          <Headercat/>
        </div>
        <div className="Cuerpo">
          <div className="containerc">
            <img src="https://i.imgur.com/pqYBXWo.png" alt="titulo" className="imgdetail3" />
            <form  onSubmit={(e) => handleSubmit(e)}>
  
              <div >
                <input 
                className="inputs" 
                type="text" 
                placeholder="name"
                value={input.name} 
                name="name" 
                onChange={(e) => handleChange(e)} 
                />
  
              </div>
              {/*  /////////////////*/}
              <div >
                <input 
                className="inputs" 
                type="text" 
                value={input.origin}
                name="origin" 
                placeholder="origin"
                onChange={(e) => handleChange(e)} 
                />

              </div>
              <div className="weight">
                <input 
                className="inputs" 
                type="number" 
                value={input.weightMin} 
                name="weightMin" 
                placeholder="Weight min"
                onChange={(e) => handleChange(e)} 
                />
                <input 
                className="inputs" 
                type="number" 
                value={input.weightMax} 
                name="weightMax" 
                placeholder="Weight Max"
                onChange={(e) => handleChange(e)} 
                />
              </div>
              {/*  /////////////////*/}
              <div >
                <input 
                className="inputs" 
                type="number" 
                value={input.lifeSpan} 
                name="lifeSpan" 
                onChange={(e) => handleChange(e)} 
                placeholder="life_span"/>
             
              </div>
              {/*  /////////////////*/}
              <div >
                <select className="inputs" 
                name="temperament" onChange={(e) => handleSelect(e)} placeholder="Temperaments">
                  {temperaments.map((temp, id) => (
                    <option key={id} value={null}>
                      {temp.name}
                    </option>
                  ))}
                </select>
                {temps.map((temp, id) => {
                  return (
                    <React.Fragment key={id}>
                      <div>
                        {" "}
                        {temp}
                        <button  value={temp} onClick={(e) => handleDelete(e)}>
                        x
                      </button>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
              {/*  /////////////////*/}
              <div>
                <button className="inputs" type="submit">Add Lord </button>
              </div>
  
            </form>
          </div>
          <div>{
  
          }</div>
          <div className="containerc">
            <img alt="imgdog" className="imgdetail2" src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ffc6e4e6-db43-4f8d-8398-20b36dca79f7/dds9ily-ee89f7f3-9c3f-454a-b56d-5e223ebe9f18.jpg/v1/fill/w_900,h_1723,q_75,strp/royal_cat_portrait_painting___regal_queen_cat_by_heymillymay_dds9ily-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyMyIsInBhdGgiOiJcL2ZcL2ZmYzZlNGU2LWRiNDMtNGY4ZC04Mzk4LTIwYjM2ZGNhNzlmN1wvZGRzOWlseS1lZTg5ZjdmMy05YzNmLTQ1NGEtYjU2ZC01ZTIyM2ViZTlmMTguanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.e8YAVBJ2afgwUuj30UL0lVKb41jXBuAgMojDM46RG2o"} />
            {<p>Lady name:{input.name}</p>}
            {<p>Lands:{input.origin}</p>}
            {<p>Weight:{input.weightMin}-{input.weightMax}</p>}
            {<p>Life Span:{input.lifeSpan}</p>}
            {/*errors.name &&(<p>{errors.name}</p>)*/}
          </div>
        </div>
      </div>
    )
}