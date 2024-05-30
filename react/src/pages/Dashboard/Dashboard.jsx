import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDashboardDataSelector } from "../../redux/selectors/dashboardSelector";
import {
    dashboardAction,
    resetDashboardAction,
} from "../../redux/actions/dashboardAction";
import DashboardContainer from "../../utils/DashboardContainer";
import TitleRow from "../../utils/TitleRow";
import Row1 from "./Row1";
import Row2 from "./Row2";
import {
    contactsGridTemplateLargeScreens,
    contactsGridTemplateSmallScreens,
} from "../../const/gridTemplate";
import { transformCounts } from "../../utils/tranformers";

export const Dashboard = ({
    fetchDashboardData,
    getDashboardData,
    resetDashboard,
}) => {
    const [groupCount, setGroupCount] = useState([]);

    const fetchContacts = async () => {
        try {
            await fetchDashboardData();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const countByGroup = transformCounts(getDashboardData, "group");
        setGroupCount(countByGroup);
    }, [getDashboardData]);

    useEffect(() => {
        fetchContacts();

        return () => {
            resetDashboard();
        };
    }, []);

    return (
        <DashboardContainer
            gridTemplateLargeScreens={contactsGridTemplateLargeScreens}
            gridTemplateSmallScreens={contactsGridTemplateSmallScreens}
        >
            <TitleRow title="Patient Dashboard" />
            <Row1 groupCount={groupCount} />
            <Row2 />
        </DashboardContainer>
    );
};

const mapStateToProps = (state) => ({
    getDashboardData: getDashboardDataSelector(state),
});

const mapDispatchToProps = {
    fetchDashboardData: dashboardAction,
    resetDashboard: resetDashboardAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
