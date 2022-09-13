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
        weight: input.min_weight + "-" + input.max_weight,
        height: input.min_height + "-" + input.max_height,
        life_span: input.life_span,
        temperament: temps
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
    <div >
      <Header />
      <h1>titulo placeholder</h1>

      <form onSubmit={(e) => handlesubmit(e)}>
        <div >
          <label>name</label>
          <input type="text" name="name" value={input.name} onChange={handleChange}></input>
          {errors.name && (<p>{errors.name}</p>)}
        </div>
        {/*  /////////////////*/}

        <div>
          <label>Height min</label>
          <input type="number" name="min_height" value={input.min_height} onChange={handleChange}></input>
          {errors.min_height && (<p>{errors.min_height}</p>)}
          <label>Height Max</label>
          <input type="number" name="max_height" value={input.max_height} onChange={handleChange}></input>
          {errors.max_height && (<p>{errors.max_height}</p>)}

          {errors.altura &&(<p>{errors.altura}</p>)}
        </div>
        {/*  /////////////////*/}

        <div>
          <label>Weight min</label>
          <input type="number" name="min_weight" value={input.min_weight} onChange={handleChange}></input>
          {errors.min_weight && (<p>{errors.min_weight}</p>)}
          <label>Weight Max</label>
          <input type="number" name="max_weight" value={input.max_weight} onChange={handleChange}></input>
          {errors.max_weight && (<p>{errors.max_weight}</p>)}

          {errors.peso &&(<p>{errors.peso}</p>)}
        </div>
        {/*  /////////////////*/}

        <div>
          <label>life_span</label>
          <input type="number" name="life_span" value={input.life_span} onChange={handleChange}></input>
          {errors.life_span && (<p>{errors.life_span}</p>)}
        </div>
        {errors.number &&(<p>{errors.number}</p>)}
        {/*  /////////////////*/}
        <div>
        <label>Temperaments:</label>
        <select name="temperament" onChange={handleChange}>
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

  )

}


