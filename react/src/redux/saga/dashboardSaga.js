import { takeLatest, call, put } from "redux-saga/effects";
import {
    REQUEST_DASHBOARD_DATA_TYPE,
    responseDashboardAction,
} from "@/redux/actions/dashboardAction";
import axiosClient from "../../axios-client";

function* dashboardSagaWorker() {
    try {
        const response = yield call(axiosClient.get, "/patients");
        yield put(responseDashboardAction(response));
    } catch (error) {
        console.log(error);
    }
}

export function* watchDashboardSaga() {
    yield takeLatest(REQUEST_DASHBOARD_DATA_TYPE, dashboardSagaWorker);
}
