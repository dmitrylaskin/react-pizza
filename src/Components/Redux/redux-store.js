import {combineReducers, createStore, applyMiddleware} from 'redux'
import homeReducer from "./home-reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";
import cartReducer from "./cart-reducer";

let rootReducer = combineReducers({
    homePage: homeReducer,
    cartPage: cartReducer
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store