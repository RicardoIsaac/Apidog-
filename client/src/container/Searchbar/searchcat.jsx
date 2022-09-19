import React from "react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import { getNameCats } from "../redux/actions/productActions";
import "../Styles/Styles.css" 

export default function Searchcat( { setPage } ) {
    const dispatch = useDispatch();
    const [name, SetName] = useState("");
    function handleInput(e) {
        e.preventDefault();
        SetName(e.target.value)
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNameCats(name));
        setPage(1);
      }
    
      return (
        <div className="containersb">
          <input className="input" type= 'text' placeholder='Search cat...' onChange={(e) => handleInput(e)}/>
          <button className="button" type='submit' onClick={(e) => handleSubmit(e)} >Search!</button>
        </div>
      )
    }
