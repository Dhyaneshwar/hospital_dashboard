import DashboardBox from "@/utils/DashboardBox";
import { connect } from "react-redux";

function Row2() {
    return (
        <>
            <DashboardBox gridArea="d"></DashboardBox>
            <DashboardBox gridArea="e"></DashboardBox>
        </>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Row2);
