import {combineReducers, createStore} from 'redux'
import homeReducer from "./home-reducer";

let rootReducer = combineReducers({
    homePage: homeReducer
})

let store = createStore(rootReducer)

export default store