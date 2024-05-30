import DashboardBox from "@/utils/DashboardBox";
import BoxHeader from "@/utils/BoxHeader";
import CustomPieChart from "../../utils/CustomPieChart";

function Row1({ groupCount }) {
    return (
        <>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="c">
                <BoxHeader title="Cities with more than 3 Contacts" />
                <CustomPieChart dataCount={groupCount} />
            </DashboardBox>
        </>
    );
}

export default Row1;
