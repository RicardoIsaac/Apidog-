import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCats, getCatTemps, getNameCats, FilterByTempCat, filterCreatedCat, OrderNameCat, OrderWeightCat} from "../redux/actions/productActions"
import CatCard from "../Card/Catcomponent";
import Paginated from "../Paginated/Paginated";
import Searchcat from "../Searchbar/searchcat";
import Headercat from "../Header/Headercat";

import "../Styles/Styles.css"

const Cathome = () => {
    ///////--State & Dispatch--//////
    const dispatch = useDispatch();
    const allCats = useSelector((state) => state.cats)
    const allTempcat = useSelector((state) => state.cattemperaments)
    ///////--Paginado--//////
    const [page, setPage] = useState(1);
    const [catsPage, setCatsPage] = useState(8);
    const lastCat = page * catsPage;
    const firstCat = lastCat - catsPage
    const currentCats = allCats.slice(firstCat, lastCat)
    const paginated = (pageNumber) => {
        setPage(pageNumber);
    };
    ///////--orden--//////
    const [orden, setorden] = useState("")
    ///////--UseEffect--//////
    useEffect(() => {
        dispatch(getCats())
    }, [dispatch])
    useEffect(() => {
        dispatch(getCatTemps())
    }, [dispatch])
    ///////--Reset--//////
    function handleReset(e) {
        let name = ""
        e.preventDefault();
        dispatch(getNameCats(name))
        setPage(1)
    }
    ///////--filtro por temperamento--//////
    function handleFilterTemp(e) {

        dispatch(FilterByTempCat(e.target.value));
        setPage(1)
    }
    ///////--filtro por creacion--//////
    function handleFilterCreatedcat(e) {

        dispatch(filterCreatedCat(e.target.value));
        setPage(1)
    }
      ///////--Ordenar Nombre--//////
  function handleOrderName(e) {
    e.preventDefault();
    dispatch(OrderNameCat(e.target.value));
    setPage(1)
    setorden(`Sorted ${e.target.value}`)
  }
  ///////--Ordenar Peso--//////
  function handleOrderWeight(e) {
    e.preventDefault();
    dispatch(OrderWeightCat(e.target.value));
    setPage(1)
    setorden(`Sorted ${e.target.value}`)
  }


    return (
        <div>
                  {/*///////--Navegador--////// */}
            <div className="homebody">
            <Headercat />
            <div className="Filters_search">
            <div className="homesearch">
            <Searchcat setPage={setPage} />

        <select  onChange={(e) => handleFilterTemp(e)}>
          <option key={0} value="temperament">
            Temperament
          </option>
          {allTempcat?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <select  onChange={(e) => handleFilterCreatedcat(e)}>
          <option value="all">All</option>
          <option value="exist">Existing</option>
          <option value="created">Created</option>
        </select>
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
                <div>
                    <Paginated
                        dogsPage={catsPage}
                        allDogs={allCats.length}
                        paginated={paginated}
                    />
                </div>

                </div>

            </div>





            <div className="containerhome">
                {currentCats ? (
                    currentCats.map((el) => {
                      
                        return (
                            <div key={el.id}>
                                <Link to={"/cats/" + el.id}>
                                    <CatCard
                                        key={el.id}
                                        name={el.name}
                                        image={el.image}
                                        weight={el.weight}
                                        createdInDb={el.createdInDb?true:null}
                                        temperament={
                                            el.temperament
                                                ? el.temperament
                                                : el.temperaments &&
                                                el.temperaments.map((temperaments) => (temperaments))
                                        }
                                        TempCat={
                                            el.TempCat ?
                                                el.TempCat.map((TempCat) => (
                                                    TempCat.name)) : false
                                        } />
                                </Link>
                            </div>
                        );
                    })
                ) : (<p>loading...</p>)}
            </div>
            <div>
                    <Paginated
                        dogsPage={catsPage}
                        allDogs={allCats.length}
                        paginated={paginated}
                    />
                </div>
        </div>
        </div>
    )
}

export default Cathome