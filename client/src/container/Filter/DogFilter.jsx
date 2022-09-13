import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setDogs , FilterByTemperament , setTemperaments,filterCreated } from "../redux/actions/productActions";

export default function Filter() {
    const dispatch = useDispatch();
  //  const allDogs = useSelector((state) => state.dogs);
    const allTemp= useSelector((state) => state.temperaments)

    useEffect(() => {
        dispatch(setDogs());
      }, [dispatch])

      useEffect(() => {
        dispatch(setTemperaments());
      }, [dispatch])


      function handleFilterTemp(e) {
        dispatch(FilterByTemperament(e.target.value))
      }
      function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value));
      }

      return(
        <div>

        <select className="tempsFilter" onChange={(e) => handleFilterTemp(e)}>
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
      <select onChange={(e)=>handleFilterCreated(e)}>
        <option value="all">all</option>
        <option value="exist">exist</option>
        <option value="created">created</option>

      </select>
        </div>
      )




}