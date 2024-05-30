export const REQUEST_DASHBOARD_DATA_TYPE = "REQUEST_DASHBOARD_DATA_TYPE";
export const RESPONSE_DASHBOARD_DATA_TYPE = "RESPONSE_DASHBOARD_DATA_TYPE";
export const RESET_DASHBOARD_ACTION_TYPE = "RESET_DASHBOARD_ACTION_TYPE";

export const requestDashboardAction = (payload) => {
    return {
        type: REQUEST_DASHBOARD_DATA_TYPE,
        payload,
    };
};

export const responseDashboardAction = (payload) => {
    return {
        type: RESPONSE_DASHBOARD_DATA_TYPE,
        payload,
    };
};

export const resetDashboardAction = () => {
    return {
        type: RESET_DASHBOARD_ACTION_TYPE,
    };
};
