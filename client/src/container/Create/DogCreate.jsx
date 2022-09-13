import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { validate } from "./Validator";
import { setTemperaments, postDog } from "../redux/actions/productActions";
import Header from "../Header/Header";
import "./Create.css"


export default function DogCreate() {
  const dispatch = useDispatch();
  //const navigate= useNavigate()
  const temperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});
  const [temps, setTemps] = useState([]);
  const [input, setInput] = useState({
    name: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    life_span: "",
    temperament: []
  })

  useEffect(() => {
    dispatch(setTemperaments());
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


  /*function handleSelect(e) {
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
  }*/

  function handlesubmit(e) {
    if (input.name && input.min_weight && input.max_weight
      && input.min_height && input.max_height && input.life_span && input.temperament) {
      const newDog = {
        name: input.name,
        min_height:input.min_height,
        max_height:input.max_height,
        min_weight: input.min_weight,
        max_weight:input.max_weight,
        life_span: input.life_span,
        
      }
      e.preventDefault();
      dispatch(postDog(newDog))
      alert("The new Lord has come")
      setInput({
        name: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        life_span: "",
        temperament: [],
      });
      setTemps([])
    } else { return alert("We need more information of the Lord") }
  }








  return (
    <div className="detailall">
    <div className="Titulo" >
      <Header />
    </div>
    <div className="Cuerpo">
<div className="contenedor">
      <form onSubmit={(e) => handlesubmit(e)}>

        <div className="name">
          <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="name"></input> 
        </div>
        {/*  /////////////////*/}
        <div className="height">
          <input type="number" name="min_height" value={input.min_height} onChange={handleChange}placeholder="Height min"></input>
          <input type="number" name="max_height" value={input.max_height} onChange={handleChange}placeholder="Height Max"></input>
          </div>
          <div className="weight">
          <input type="number" name="min_weight" value={input.min_weight} onChange={handleChange}placeholder="Weight min"></input>
          <input type="number" name="max_weight" value={input.max_weight} onChange={handleChange}placeholder="Weight Max"></input>
        </div>
        {/*  /////////////////*/}
        <div className="lifespan">
          <input type="number" name="life_span" value={input.life_span} onChange={handleChange}placeholder="life_span"></input>
        </div>
        {/*  /////////////////*/}
        <div className="temperament">
        <select name="temperament" onChange={handleChange} placeholder="Temperaments">
          {temperaments.map((temp,id)=>(
            <option key={id} value={null}>
              {temp.name}
            </option>
          ))}
        </select>
        {temps.map((temp,id)=>{
          return(
            <React.Fragment key={id}>
                <div>
                  {" "}
                  {temp}
                  <button value={temp} onClick={handleChange}> </button>
                </div>
            </React.Fragment>
          )
        })}
        </div>
        {/*  /////////////////*/}
        <div>
          <button type="submit">Add Lord </button>
        </div>

      </form>
      </div>
      <div>{
        
      }</div>
      <div className="contenedor">
        {errors.name && (<p>{errors.name}</p>)}
        {errors.min_height && (<p>{errors.min_height}</p>)}
        {errors.max_height && (<p>{errors.max_height}</p>)}
        {errors.altura &&(<p>{errors.altura}</p>)}
        {errors.min_weight && (<p>{errors.min_weight}</p>)}
        {errors.max_weight && (<p>{errors.max_weight}</p>)}
        {errors.peso &&(<p>{errors.peso}</p>)}
        {errors.number &&(<p>{errors.number}</p>)}
        {errors.life_span && (<p>{errors.life_span}</p>)}
      </div>
      </div>
    </div>
  )

}


