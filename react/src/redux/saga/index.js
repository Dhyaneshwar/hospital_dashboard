import { all } from "redux-saga/effects";
import { watchTestSaga } from "./testSaga";
import { watchDashboardSaga } from "./dashboardSaga";

function* rootSaga() {
    yield all([watchTestSaga(), watchDashboardSaga()]);
}

export default rootSaga;
