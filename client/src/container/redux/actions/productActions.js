
import axios from "axios"

export function setDogs ()  {
    return function (dispatch) {
        return axios.get("http://localhost:3001/dogs")
        .then((response)=>{            
            dispatch({
                type:" SET_DOGS",
                payload: response.data,
            })
        })
    }
}
///////////////
export function setTemperaments(){
    return  function (dispatch) {
        return axios.get("http://localhost:3001/temperamento")
        .then((response)=>{
            dispatch({
               type: "SET_TEMPERAMENTS",
               payload: response.data,
           })
        })
    }
}
///////////////
export function setBreed (name)  {
    return async function (dispatch) {
            var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type:"SET_BREED",
                payload: json.data,
            })

    }
}
///////////////
export function FilterByTemperament  (payload)  {
    return {
        type: "SET_FILTER_TEMPERAMENTS",
        payload
    }
}
///////////////
export function OrderName (payload)  {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}
///////////////
export function OrderWeight (payload)  {
    return{
        type:"ORDER_BY_WEIGHT",
        payload
    }
}
///////////////
export function selectesDogs (id)  {
    return async function (dispatch) {
            var json= await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: "SELECTED_DOG",
                payload:json.data,
            })

    }
}
///////////////
export function postDog (payload)  {
    return async function (dispatch) {
        const response= await axios.post("http://localhost:3001/dogs/create",payload)
        return dispatch({
            type: "POST_DOG",
            payload: response.data
        })
    }
}

//////

export function filterCreated(payload) {
    return{
        type:"FILTER_CREATED",
        payload
    }
}