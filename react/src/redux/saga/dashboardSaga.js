import { takeLatest, call, put } from "redux-saga/effects";
import { DASHBOARD_ACTION_TYPE } from "@/redux/actions/dashboardAction";

function* dashboardSagaWorker(action) {
    try {
        console.log("hello world from dashboard");
    } catch (error) {
        console.log(error);
    }
}

export function* watchDashboardSaga() {
    yield takeLatest(DASHBOARD_ACTION_TYPE, dashboardSagaWorker);
}
