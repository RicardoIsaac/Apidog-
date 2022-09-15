import React from "react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import { getNameDogs } from "../redux/actions/productActions";
import "./searchbar.css"

export default function SearchBar( { setPage } ) {
    const dispatch = useDispatch();
    const [name, SetName] = useState("");
  
    function handleInput(e) {
      e.preventDefault();
      SetName(e.target.value)
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(getNameDogs(name));
      setPage(1);
    }
  
    return (
      <div className="containersb">
        <input className="input" type= 'text' placeholder='Search dog...' onChange={(e) => handleInput(e)}/>
        <button className="button" type='submit' onClick={(e) => handleSubmit(e)} >Search!</button>
      </div>
    )
  }

