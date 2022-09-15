import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDogs , FilterByTemp , getTemps,filterCreated } from "../redux/actions/productActions";

export default function Filter() {
  const dispatch = useDispatch();
   // const allDogs = useSelector((state) => state.dogs);
    const allTemp= useSelector((state) => state.temperaments)

    useEffect(() => {
      dispatch(getDogs());
    }, [dispatch]);
  
    useEffect(() => {
      dispatch(getTemps());
    }, [dispatch]);

    function handleFilterTemp(e) {
      dispatch(FilterByTemp(e.target.value));
    }
  
    function handleFilterCreated(e) {
      dispatch(filterCreated(e.target.value));
    }

      return(
        <div>
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
  
        <select  onChange={(e) => handleFilterCreated(e)}>
          <option value="all">All</option>
          <option value="exist">Existing</option>
          <option value="created">Created</option>
        </select>
      </div>
      )
}