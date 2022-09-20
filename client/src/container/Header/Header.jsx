import React from "react"
import "../Styles/Styles.css"

const Headerdog = () => {
    return (
  <div className="navicon">
  <a href="/" className="active">Seleccionar especie</a>
  <a href="/dogs">Home</a>
  <a href="/dogs/create">Create</a>
  <a href="/creditsdog">Credits</a>
  </div>


    )
}
export default Headerdog;
