import React from "react";
import "../Styles/Styles.css"
import { Link } from "react-router-dom";

const Landingpage=()=>{
return (

<div class="container">
  <div class="box">
  <Link to="/dogs">
    <img src="https://i.imgur.com/6sWnJIj.jpg" alt="Dogs" />

  </Link>
  </div>

  <div class="box">
  <Link to="/cats">
    <img src="https://i.imgur.com/qZk0dt7.jpg" alt="Cats"/>

    </Link>
  </div>

</div>
  

)

}

export default Landingpage

/*
    <div>
<a href="/dogs">perros</a>
  <a href="/cats">gatos</a>
    </div>
*/