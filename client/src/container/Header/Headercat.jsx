import React from "react"
import "../Styles/Styles.css"

const Header = () => {
    return (
  <div className="navicon">
  <a href="/" className="active">Seleccionar especie</a>
  <a href="/cats">Home</a>
  <a href="/cats/create">Create</a>
  </div>


    )
}
export default Header;
