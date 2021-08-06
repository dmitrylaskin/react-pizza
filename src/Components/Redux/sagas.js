import { call, fork, put, takeEvery } from 'redux-saga/effects'
import {GET_PIZZA_ITEMS, setPizzaItems, showLoader} from "./home-reducer";
import {homeAPI} from "../../Api/api";

export function* rootSaga() {
    yield fork(homePageDataWatcher)
}
function* homePageDataWatcher() {
    yield takeEvery(GET_PIZZA_ITEMS, homePageDataSaga)
}
function* homePageDataSaga(action) {
    try {
        yield put(showLoader(true))

        let response = yield call(homeAPI.getPizzas)

        yield put(showLoader(false))

        if (response.data) {
            yield put(setPizzaItems(response.data))

        } else {
            throw new Error()
        }
    } catch (e) {
        alert(e)
    }

}