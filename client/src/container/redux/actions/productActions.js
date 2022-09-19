
import axios from "axios"

export function getDogs() {
    return function (dispatch) {
        return axios.get("http://localhost:3001/dogs")
            .then((response) => {
                dispatch({
                    type: " GET_DOGS",
                    payload: response.data,
                })
            })
    }
}
///////////////
export function getTemps() {
    return function (dispatch) {
        return axios.get("http://localhost:3001/temperamento")
            .then((response) => {
                dispatch({
                    type: "GET_TEMPERAMENTS",
                    payload: response.data,
                })
            })
    }
}
///////////////
export function getNameDogs(name) {
 
        return async function (dispatch) {
            let json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: "GET_NAME",
                payload: json.data,
            })
        }


}

///////////////
export function FilterByTemp(payload) {
    return {
        type: "FILTER_TEMPERAMENTS",
        payload
    }
}
//////

export function filterCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload
    }
}
///////////////
export function OrderName(payload) {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}
///////////////
export function OrderWeight(payload) {
    return {
        type: "ORDER_BY_WEIGHT",
        payload
    }
}
///////////////
export function getDetail(id) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: "GET_DETAIL",
            payload: json.data,
        })

    }
}
///////////////
export function postDog(payload) {
    

        return async function (dispatch) {
            const response = await axios.post("http://localhost:3001/dogs/create", payload)
            return dispatch({
                type: "POST_DOG",
                payload: response.data
            })
        }

}
////////////////////////// Cat Actions ////////////////////////////////////////

export function getCats() {
    return function (dispatch) {
        return axios.get("http://localhost:3001/cats")
        .then((response)=>{
            dispatch({
                type:"GET_CATS",
                payload:response.data
            })
        })
    }
}
export function getCatTemps() {
    return function (dispatch) {
        return axios.get("http://localhost:3001/temperamentocat")
        .then((response)=>{
            dispatch({
                type:"GET_CAT_TEMPERAMENTS",
                payload:response.data
            })
        })
    }
}
export function getNameCats(name) {
 
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/cats?name=${name}`)
        return dispatch({
            type: "GET_CAT_NAME",
            payload: json.data,
        })
    }
}
export function FilterByTempCat(payload) {
    return {
        type: "FILTER_CAT_TEMPERAMENTS",
        payload
    }
}
export function filterCreatedCat(payload) {
    return {
        type: "FILTER_CAT_CREATED",
        payload
    }
}
export function OrderNameCat(payload) {
    return {
        type: "ORDER_BY_CAT_NAME",
        payload
    }
}
export function OrderWeightCat(payload) {
    return {
        type: "ORDER_BY_CAT_WEIGHT",
        payload
    }
}
export function getCatDetail(id) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/cats/${id}`)
        return dispatch({
            type: "GET_CAT_DETAIL",
            payload: json.data,
        })
    }
}
export function postCAT(payload) {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/cats/create", payload)
        return dispatch({
            type: "POST_CAT",
            payload: response.data
        })
    }

}