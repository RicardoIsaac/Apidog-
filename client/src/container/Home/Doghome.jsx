import React, {/* useEffect */ } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setDogs, OrderName, OrderWeight } from "../redux/actions/productActions.js";
//import {setTemperaments, setBreed, FilterByTemperament, selectesDogs, postDog } from "../redux/actions/productActions.js";
import Card from "../Card/Dogcomponent.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../Searchbar/searchbar.jsx";
import Header from "../Header/Header.jsx";
import Filter from "../Filter/DogFilter.jsx";
import "./home.css"

const Doghome = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  /////////////
  const [Page, setPage] = useState(1)
  const [dogPage, setdogPage] = useState(8)
  const lastdog = Page * dogPage;
  const firstdog = lastdog - dogPage;
  const currentDogs = allDogs.splice(firstdog, lastdog);

  const paginated = (pageNumber) => {
    setPage(pageNumber)
  };
  const [orden, setorden] = useState("");
//////////////////
  useEffect(() => {
    dispatch(setDogs());
  }, [dispatch])
//////////////////
  function handleReset(e) {
    e.preventDefault();
    dispatch(setDogs())
  }


  function handleOrderName (e)  {
    e.preventDefault();
    dispatch(OrderName(e.target.value));
    setPage(1)
    setorden(e.target.value)
  }

  function handleOrderWeight (e)  {
    e.preventDefault();
    dispatch(OrderWeight(e.target.value));
    setPage(1)
    setorden(e.target.value)
  }
  return (
    <div className="homebody">
      <Header/>
    <div>
      <div className="homesearch">
    <SearchBar setPage={setPage}/>
       <Filter />

        <select onChange={(e) => handleOrderName(e)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>


        <select onChange={(e) => handleOrderWeight(e)}>
          <option> Weight</option>
          <option value="weightMin">Lower weight</option>
          <option value="weightMax">Greater weight</option>
        </select>

        <button onClick={(e) => {handleReset(e);}}>Refresh</button>

      </div>
    </div>

  
    <div className="container">
      
      {currentDogs ? (
        currentDogs.map((el) => {
          return (
            <div key={el.id}>
              <Link to={"/dogs/" + el.id}>
                <Card
                  key={el.id}
                  name={el.name}
                  image={el.image}
                  temperament={el.temperaments
                  }
                  weight={el.weight}
                />
              </Link>
              {console.log(currentDogs)}
            </div>
          );
        })
      ) : (
        <p >loading...</p>
      )}
    </div>
    <Paginated
        dogPage={dogPage}
        allDogs={allDogs.length}
        paginado={paginated}
      />
  </div>
);

}

export default Doghome