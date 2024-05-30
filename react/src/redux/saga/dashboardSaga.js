import { takeLatest, call } from "redux-saga/effects";
import { DASHBOARD_ACTION_TYPE } from "@/redux/actions/dashboardAction";
import axiosClient from "../../axios-client";

function* dashboardSagaWorker() {
    try {
        const response = yield call(axiosClient.get, "/patients");
        console.log("hello world from dashboard", response);
    } catch (error) {
        console.log(error);
    }
}

export function* watchDashboardSaga() {
    yield takeLatest(DASHBOARD_ACTION_TYPE, dashboardSagaWorker);
}
