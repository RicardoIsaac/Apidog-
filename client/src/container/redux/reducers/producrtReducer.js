const initialState = {
    dogs: [],
    alldogs: [],
    temperaments: [],
    details: [],
    //////////////////
    cats: [],
    allcats: [],
    cattemperaments: [],
    detailcat: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DOGS":
            return {
                ...state,
                dogs: action.payload,
                alldogs: action.payload
            }
        case "GET_CATS":
            return {
                ...state,
                cats: action.payload,
                allcats: action.payload
            }
        case "GET_TEMPERAMENTS":
            return {
                ...state,
                temperaments: action.payload
            }
        case "GET_CAT_TEMPERAMENTS":
            return {
                ...state,
                cattemperaments: action.payload
            }
        case "GET_NAME":
            return {
                ...state,
                dogs: action.payload,
            }
        case "GET_CAT_NAME":
            return {
                ...state,
                cats: action.payload
            }
        case "FILTER_TEMPERAMENTS":

            const filtTemp = state.dogs.filter((el) => el.temperaments?.includes(action.payload))
            return {
                ...state,
                dogs: filtTemp,
            }
        case "FILTER_CAT_TEMPERAMENTS":

            const filtcatTemp = state.cats.filter((el) => el.temperaments?.includes(action.payload))
            return {
                ...state,
                cats: filtcatTemp,
            }
        case "FILTER_CREATED":
            let Filtercreated = {}
            if (action.payload === "created") {
                Filtercreated = state.dogs.filter(el => el.createdInDb)
            }
            if (action.payload === "exist") {
                Filtercreated = state.dogs.filter(el => !el.createdInDb)
            }
            return {
                ...state,
                dogs: action.payload === "all" ? state.alldogs : Filtercreated
            }

        case "FILTER_CAT_CREATED":
            let Filtercatcreated = {}
            if (action.payload === "created") {
                Filtercatcreated = state.cats.filter(el => el.createdInDb)
            }
            if (action.payload === "exist") {
                Filtercatcreated = state.cats.filter(el => !el.createdInDb)
            }
            return {
                ...state,
                cats: action.payload === "all" ? state.allcats : Filtercatcreated
            }
        case "ORDER_BY_NAME":
            const orderName = action.payload === 'asc' ? state.dogs.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }) : state.dogs.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
            return {
                ...state,
                dogs: orderName,
            }
        case "ORDER_BY_CAT_NAME":
            const orderNamecat = action.payload === 'asc' ? state.cats.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }) : state.cats.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
            return {
                ...state,
                cats: orderNamecat,
            }
        case "ORDER_BY_WEIGHT":
            const orderWeight = action.payload === 'weightMin'
                ? state.dogs.sort(function (a, b) {
                    if (typeof action.payload.weight === 'string') {
                        if (a.weight > b.weight) return 1;
                        if (a.weight < b.weight) return -1;
                        return 0;
                    } else {
                        if (parseInt(a.weight) > parseInt(b.weight)) return 1;
                        if (parseInt(a.weight) < parseInt(b.weight)) return -1;
                        return 0
                    }
                })
                :
                state.dogs.sort(function (a, b) {
                    if (typeof action.payload.weight === 'string') {
                        if (a.weight < b.weight) return 1;
                        if (a.weight > b.weight) return -1;
                        return 0;
                    } else {
                        if (parseInt(a.weight) < parseInt(b.weight)) return 1;
                        if (parseInt(a.weight) > parseInt(b.weight)) return -1;
                        return 0
                    }
                })
            return {
                ...state,
                dogs: orderWeight
            }
        case "ORDER_BY_CAT_WEIGHT":
            const orderWeightcat = action.payload === 'weightMin'
                ? state.cats.sort(function (a, b) {
                    if (typeof action.payload.weight === 'string') {
                        if (a.weight > b.weight) return 1;
                        if (a.weight < b.weight) return -1;
                        return 0;
                    } else {
                        if (parseInt(a.weight) > parseInt(b.weight)) return 1;
                        if (parseInt(a.weight) < parseInt(b.weight)) return -1;
                        return 0
                    }
                })
                :
                state.cats.sort(function (a, b) {
                    if (typeof action.payload.weight === 'string') {
                        if (a.weight < b.weight) return 1;
                        if (a.weight > b.weight) return -1;
                        return 0;
                    } else {
                        if (parseInt(a.weight) < parseInt(b.weight)) return 1;
                        if (parseInt(a.weight) > parseInt(b.weight)) return -1;
                        return 0
                    }
                })
            return {
                ...state,
                cats: orderWeightcat
            }

        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload,
            }
        case "GET_CAT_DETAIL":
            return {
                ...state,
                detailcat: action.payload,
            }
        case "POST_DOG":
            return {
                ...state,
            }
        case "POST_CAT":
            return {
                ...state,
            }



        default:
            return state;
    }
}

export default rootReducer


/**
{id:998,title:"Iker",temperament:"god",weight:"2kg"},
{id:997,title:"Arantza",temperament:"god",weight:"2kg"},
{id:996,title:"Emma",temperament:"god",weight:"14kg"}
{id:999,title:"Lala"},
{id:998,title:"Maya"},
{id:987,title:"Paca"}
*/
//{id: 999,name: "Romina",height: ["20","23"],weight: ["2","3"],"temperaments": ["Best Dog"],life_span: "14 years",image: ""}