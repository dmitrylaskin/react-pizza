import {combineReducers, createStore, applyMiddleware} from 'redux'
import homeReducer from "./home-reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";

let rootReducer = combineReducers({
    homePage: homeReducer
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store