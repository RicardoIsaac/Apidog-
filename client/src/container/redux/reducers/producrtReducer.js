
const initialState = {
    dogs: [],
    alldogs: [],
    temperaments: [],
    details: []


}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DOGS":
            return { 
                ...state, 
                dogs: action.payload,
                alldogs:action.payload 
            }

        case "SET_TEMPERAMENTS":
            return { 
                ...state, 
                temperaments:action.payload 
            }

        case "SET_FILTER_TEMPERAMENTS":
            const allDogs=state.alldogs
            const filtTemp=allDogs.filter((el)=>el.temperaments?.includes(action.payload))
            return { 
                ...state, 
                dogs: filtTemp,
            }

        case "SET_BREED":
            return { 
                ...state, 
                dogs: action.payload,
            }

        case "ORDER_BY_NAME":
            const orderName = action.payload === 'asc' ? state.dogs.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
              }) : state.dogs.sort((a,b) => {
                if(a.name < b.name) return 1;
                if(a.name > b.name) return -1;
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
            return{
                ...state,
                dogs:orderWeight
            }
        case "SELECTED_DOG":
            return { 
                ...state, 
               detail: action.payload,
            }
        case "POST_DOG":
            return { 
                ...state, 
            }

        case "FILTER_CREATED":
            const  Filtercreated=action.payload==="created"? state.alldogs.filter(el=>el.createdInDb):
                                                             state.alldogs.filter(el=>!el.createdInDb)
            return{
                ...state,
                dogs:action.payload==="all"?state.alldogs:Filtercreated
            }


        default:
            return state
    }
}

export default rootReducer
/*

/////////////////////////////////////////////////////////////
export const TempsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TEMPERAMENTS:
            const filtTemp=payload.filer((temp)=>temp.name!=="")
            return { ...state, temperaments: filtTemp }


        default:
            return state
    }
}
/////////////////////////////////////////////////////////////
export const FilterTempsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FILTER_TEMPERAMENTS:
        const allDogs=state.dogs;
        let filterDogs=[]
        if(payload==="Todos"){filterDogs=allDogs}
        else{
            for (let i = 0; i < allDogs.length; i++) {
                let found = allDogs[i].tempdogs.find((t=>t===payload))
                if(found){filterDogs.push(allDogs[i])}
            }
        }
        return { ...state, dogs: filterDogs }

        default:
            return state
    }
}
/////////////////////////////////////////////////////////////
export const BreedReducer = (state = initialState, { type, payload }) => {
   switch (type) {
    case ActionTypes.SET_BREED:
        return { ...state, dogs:payload }
    default:
        return state
   }
}
/////////////////////////////////////////////////////////////
export const OrderNameReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ORDER_BY_NAME:
            const sortName=
            payload==="A-Z"?state.dogs.sort((a,b)=>{
                if (a.name > b.name) { return 1 }
                if (b.name > a.name) { return -1 }
                return 0;  
            })
            :state.dogs.sort((a,b)=>{
                if (a.name > b.name) { return -1 }
                if (b.name > a.name) { return 1 }
                return 0;
            })
    
            return { ...state, dogs:sortName }
        default:
            return state
}
}
/////////////////////////////////////////////////////////////
export const OrderWeightReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ORDER_BY_WEIGHT:
            const sortweight=payload==="min:weight"?
            state.dogs.sort((a,b)=>{
                if(parseInt(a.weight[1])>parseInt(b.weight[1])){return 1}
                if(parseInt(a.weight[1])>parseInt(b.weight[1])){return -1}
                return 0;  
            }):state.dogs.sort((a,b)=>{
                if(parseInt(a.weight[1])>parseInt(b.weight[1])){return -1}
                if(parseInt(a.weight[1])>parseInt(b.weight[1])){return 1}
                return 0
            })

            
            return { ...state, dogs:sortweight }
        default:
            return state
    }
}
/////////////////////////////////////////////////////////////
export const selectesDogsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_DOG:
            return { ...state, details:payload }
        default:
            return state
    }
}
*/

/**
{id:999,name:"Romina",temperament:"god",weight:"2kg"},
{id:998,title:"Iker",temperament:"god",weight:"2kg"},
{id:997,title:"Arantza",temperament:"god",weight:"2kg"},
{id:996,title:"Emma",temperament:"god",weight:"14kg"}
{id:999,title:"Lala"},
{id:998,title:"Maya"},
{id:987,title:"Paca"}
*/