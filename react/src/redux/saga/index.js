import { all } from "redux-saga/effects";
import { watchTestSaga } from "./testSaga";

function* rootSaga() {
    yield all([watchTestSaga()]);
}

export default rootSaga;
