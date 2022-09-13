import { combineReducers} from "redux"
import { BreedReducer, DogReducer, FilterTempsReducer, OrderWeightReducer, selectesDogsReducer, TempsReducer,OrderNameReducer } from "./producrtReducer"

const reducers =combineReducers({
    allmascots: DogReducer,
    alltemps:TempsReducer,
    filltemps:FilterTempsReducer,
    breed:BreedReducer,
    ordername:OrderNameReducer,
    orderweight:OrderWeightReducer,
    dog:selectesDogsReducer
})

export default reducers