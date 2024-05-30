import { createSelector } from "@reduxjs/toolkit";

export const getDashboardReducer = (state) => state.dashboardReducer;

export const getDashboardDataSelector = createSelector(
    [getDashboardReducer],
    (state) => state.data
);
