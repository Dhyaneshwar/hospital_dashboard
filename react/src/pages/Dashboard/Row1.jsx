import DashboardBox from "@/utils/DashboardBox";
import BoxHeader from "@/utils/BoxHeader";
import CustomPieChart from "../../utils/CustomPieChart";

function Row1({ groupCount }) {
    return (
        <>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="c">
                <BoxHeader title="Percentage of Patients in Each Group" />
                <CustomPieChart dataCount={groupCount} isPercentage={true} />
            </DashboardBox>
        </>
    );
}

export default Row1;
