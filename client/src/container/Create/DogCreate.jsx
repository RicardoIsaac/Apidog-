import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { validate } from "./Validator";
import { getTemps, postDog } from "../redux/actions/productActions";
import Header from "../Header/Header";
import "../Styles/Styles.css"


export default function DogCreate() {
  const dispatch = useDispatch();
  //const navigate= useNavigate()
  const temperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});
  const [temps, setTemps] = useState([]);
  const [input, setInput] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeSpan: "",
    image: "",
    temperament: [],
  })

  useEffect(() => {
    dispatch(getTemps());
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
      input.heightMax &&
      input.weightMax &&
      input.heightMin &&
      input.temperament) {
      const newDog = {
        name: input.name,
        height: [input.heightMin,input.heightMax],
        weight: [input.weightMin,input.weightMax],
        life_span: input.lifeSpan+" years",
        createdInDb:true,
        temperament: temps,
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
    } else { return alert(errors.map((errors)=>errors)) }
    console.log(errors)
  }
  return (
    <div className="detail">
      <div className="Titulo" >
        <Header />
      </div>
      <div className="Cuerpo">
        <div className="containerc">
          <img src="https://i.imgur.com/sEQ4sI3.png" alt="titulo" className="imgdetail3" />
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
              type="number" 
              value={input.heightMin}
              name="heightMin" 
              placeholder="Height min"
              onChange={(e) => handleChange(e)} 
              />
              <input 
              className="inputs" 
              type="number" 
              value={input.heightMax}
              name="heightMax" 
              placeholder="Height Max"
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
          <img alt="imgdog" className="imgdetail2" src={"https://cdn.shopify.com/s/files/1/0420/1801/3336/products/1_fda6f71c-fef0-4d3c-a901-bb0c094ccf48_1024x1024@2x.jpg?v=1623862299"} />
          {<p>Lord name:{input.name}</p>}
          {<p>Height:{input.heightMin}-{input.heightMax}</p>}
          {<p>Weight:{input.weightMin}-{input.weightMax}</p>}
          {<p>Life Span:{input.lifeSpan}</p>}
          {/*errors.name &&(<p>{errors.name}</p>)*/}
        </div>
      </div>
    </div>
  )

}


