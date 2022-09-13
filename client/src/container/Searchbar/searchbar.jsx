import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBreed } from "../redux/actions/productActions";
import "./searchbar.css"

export default function SearchBar({setPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(setBreed(name));
        setPage(1);
        setName("")
    }

    return(
        <div className="containersb">
            <input className="input" type="text" onChange={handleInput} placeholder="Search..."/>
            <button className="button" type='submit' onClick={(e) => handleSubmit(e)} >Search!</button>
        </div>
    )
}
