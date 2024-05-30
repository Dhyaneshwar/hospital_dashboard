import {
    REQUEST_DASHBOARD_DATA_TYPE,
    RESPONSE_DASHBOARD_DATA_TYPE,
    RESET_DASHBOARD_ACTION_TYPE,
} from "@/redux/actions/dashboardAction";

const initialState = {
    loading: false,
    data: [],
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DASHBOARD_DATA_TYPE:
            return {
                ...state,
                loading: true,
            };
        case RESPONSE_DASHBOARD_DATA_TYPE:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case RESET_DASHBOARD_ACTION_TYPE:
            return { ...initialState };
        default:
            return state;
    }
};

export default dashboardReducer;
