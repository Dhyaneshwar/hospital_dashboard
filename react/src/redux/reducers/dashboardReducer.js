import { DASHBOARD_ACTION_TYPE } from "@/redux/actions/dashboardAction";
import { RESET_DASHBOARD_ACTION_TYPE } from "../actions/dashboardAction";

const initialState = {
    loading: false,
    data: [],
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case DASHBOARD_ACTION_TYPE:
            return {
                ...state,
            };
        case RESET_DASHBOARD_ACTION_TYPE:
            return { ...initialState };
        default:
            return state;
    }
};

export default dashboardReducer;
