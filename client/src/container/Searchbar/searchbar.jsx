import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBreed } from "../redux/actions/productActions";
import "./searchbar.css"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(setBreed(name));
        console.log(name)
    }


    return(
        <div className="containersb">
            <input className="input" type="text" onChange={handleInput} placeholder="Search..."/>
            <button className="button" type='submit' onClick={(e) => handleSubmit(e)} >Search!</button>
        </div>
    )
}
