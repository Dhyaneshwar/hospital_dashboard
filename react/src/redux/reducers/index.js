import { combineReducers } from "redux";
import testReducer from "./testReducer";
import dashboardReducer from "./dashboardReducer";

const rootReducer = combineReducers({
    testReducer,
    dashboardReducer,
});

export default rootReducer;
