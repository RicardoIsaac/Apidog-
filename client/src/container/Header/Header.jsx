import React from "react"
import "./Header.css"

const Header = () => {
    return (
  <div className="navicon">
  <a href="/" className="active">Seleccionar especie</a>
  <a href="/dogs">Home</a>
  <a href="/dogs/create">Create</a>
  </div>


    )
}
export default Header;
