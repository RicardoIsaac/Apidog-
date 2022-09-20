import React from "react"
import "../Styles/Styles.css"

const Headercat = () => {
    return (
  <div className="navicon">
  <a href="/" className="active">Seleccionar especie</a>
  <a href="/cats">Home</a>
  <a href="/cats/create">Create</a>
  <a href="/creditscat">Credits</a>
  </div>


    )
}
export default Headercat;
