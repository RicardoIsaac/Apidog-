
//{id:999,name:"Romina",temperament:"god",weight:"2kg"},
const initialState = {
    dogs: [],
    alldogs: [],
    temperaments: [],
    details: []


}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DOGS":
            return {
                ...state,
                dogs: action.payload,
                alldogs: action.payload
            }

        case "GET_TEMPERAMENTS":
            return {
                ...state,
                temperaments: action.payload
            }

        case "FILTER_TEMPERAMENTS":
            const allDogs = state.alldogs
            const filtTemp = allDogs.filter((el) => el.temperaments?.includes(action.payload))
            return {
                ...state,
                dogs: filtTemp,
            }
        case "FILTER_CREATED":
            const Filtercreated = action.payload === "created" ? state.alldogs.filter(el => el.createdInDb) :
                state.alldogs.filter(el => !el.createdInDb)
            return {
                ...state,
                dogs: action.payload === "all" ? state.alldogs : Filtercreated
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
        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload,
            }
        case "GET_NAME":
            return {
                ...state,
                dogs: action.payload,
            }
        case "POST_DOG":
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