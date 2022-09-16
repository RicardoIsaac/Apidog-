import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getDogs, OrderName, OrderWeight, getTemps, FilterByTemp,filterCreated, getNameDogs } from "../redux/actions/productActions.js";
//import {, setBreed, FilterByTemperament, selectesDogs, postDog } from "../redux/actions/productActions.js";
import Card from "../Card/Dogcomponent.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../Searchbar/searchbar.jsx";
import Header from "../Header/Header.jsx";

import "./home.css"

const Doghome = () => {
  ///////--State & Dispatch--//////
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemp= useSelector((state) => state.temperaments)


  ///////--Paginado--//////
  const [page, setPage] = useState(1);
  const [dogsPage, setDogsPage] = useState(8);
  const lastDog = page * dogsPage;
  const firstDog = lastDog - dogsPage;
  const currentDogs = allDogs.slice(firstDog, lastDog);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };

  ///////--orden--//////
  const [orden, setorden] = useState("");

  ///////--UseEffect--//////
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch])

  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);


  ///////--Reset--//////
  function handleReset(e) {
    let name=""
    e.preventDefault();
    dispatch(getNameDogs(name))
    setPage(1)
  }
  ///////--filtro por temperamento--//////
  function handleFilterTemp(e) {

    dispatch(FilterByTemp(e.target.value));
    setPage(1)
  }
  ///////--filtro por creacion--//////
  function handleFilterCreated(e) {
  
    dispatch(filterCreated(e.target.value));
    setPage(1)
  }

  ///////--Ordenar Nombre--//////
  function handleOrderName(e) {
    e.preventDefault();
    dispatch(OrderName(e.target.value));
    setPage(1)
    setorden(`Sorted ${e.target.value}`)
  }
  ///////--Ordenar Peso--//////
  function handleOrderWeight(e) {
    e.preventDefault();
    dispatch(OrderWeight(e.target.value));
    setPage(1)
    setorden(`Sorted ${e.target.value}`)
  }
  return (
    <div>
      {/*///////--Navegador--////// */}
      <div className="homebody">
        <Header />
        <div>

          {/*///////--Search,fiter--////// */}
          <div className="homesearch">
            <SearchBar setPage={setPage} />

          {/*///////--Filter Temps Database--////// */}
          <select  onChange={(e) => handleFilterTemp(e)}>
          <option key={0} value="temperament">
            Temperament
          </option>
          {allTemp?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
  {/*///////--Filter db, exist--////// */}
        <select  onChange={(e) => handleFilterCreated(e)}>
          <option value="all">All</option>
          <option value="exist">Existing</option>
          <option value="created">Created</option>
        </select>

          {/*///////--Filter weight name--////// */}
            <select onChange={(e) => handleOrderName(e)}>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <select onChange={(e) => handleOrderWeight(e)}>
              <option> Weight</option>
              <option value="weightMin">Lower weight</option>
              <option value="weightMax">Greater weight</option>
            </select>

            <button onClick={(e) => { handleReset(e); }}>Refresh</button>
{/*///////--paginado--////// */}
            <div>
              <Paginated
                dogsPage={dogsPage}
                allDogs={allDogs.length}
                paginated={paginated}
              />
            </div>
          </div>
        </div>

        {/*///////--Renderisado--////// */}
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
                    temperament={
                      el.temperament
                        ? el.temperament
                        : el.temperaments &&
                        el.temperaments.map((temperaments)=>(temperaments))
                      }
                      TempDogs={
                        el.TempDogs?
                        el.TempDogs.map((TempDogs)=>(
                          TempDogs.name)):false
                      }

                      weight={el.weight}
                      />
                </Link>

                      
                      
              </div>
              
            );
          })
        ) : (
          <p >loading...</p>
        )}
        </div>
        <div>
              <Paginated
                dogsPage={dogsPage}
                allDogs={allDogs.length}
                paginated={paginated}
              />
            </div>
      </div>
    </div>
  );

}

export default Doghome