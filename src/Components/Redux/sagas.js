import { call, fork, put, takeEvery } from 'redux-saga/effects'
import {GET_PIZZA_ITEMS, setPizzaItems} from "./home-reducer";
import {homeAPI} from "../../Api/api";

export function* rootSaga() {
    yield fork(homePageDataWatcher)
}
function* homePageDataWatcher() {
    yield takeEvery(GET_PIZZA_ITEMS, homePageDataSaga)
}
function* homePageDataSaga(action) {
    try {
        let response = yield call(homeAPI.getPizzas)
        if (response.data) {
            yield put(setPizzaItems(response.data))

        } else {
            throw new Error()
        }
    } catch (e) {
        alert(e)
    }

}