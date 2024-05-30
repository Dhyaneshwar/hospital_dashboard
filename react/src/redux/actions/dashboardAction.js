export const DASHBOARD_ACTION_TYPE = "DASHBOARD_ACTION_TYPE";
export const RESET_DASHBOARD_ACTION_TYPE = "RESET_DASHBOARD_ACTION_TYPE";

export const dashboardAction = (payload) => {
    return {
        type: DASHBOARD_ACTION_TYPE,
        payload,
    };
};

export const resetDashboardAction = () => {
    return {
        type: RESET_DASHBOARD_ACTION_TYPE,
    };
};
