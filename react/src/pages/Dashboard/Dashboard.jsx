import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboardDataSelector } from "../../redux/selectors/dashboardSelector";
import {
    dashboardAction,
    resetDashboardAction,
} from "../../redux/actions/dashboardAction";

export const Dashboard = ({
    fetchDashboardData,
    getDashboardData,
    resetDashboard,
}) => {
    const fetchContacts = async () => {
        try {
            await fetchDashboardData();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchContacts();

        return () => {
            resetDashboard();
        };
    }, []);

    return <div>Dashboard</div>;
};

const mapStateToProps = (state) => ({
    getDashboardData: getDashboardDataSelector(state),
});

const mapDispatchToProps = {
    fetchDashboardData: dashboardAction,
    resetDashboard: resetDashboardAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
