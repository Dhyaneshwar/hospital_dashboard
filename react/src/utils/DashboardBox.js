import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme, bgcolor, trn }) => ({
    backgroundColor: bgcolor || "#2d2d34",
    borderRadius: "1rem",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
    transition: "all 0.3s",

    "&:hover": {
        transform: trn || "scale(1.02)",
    },
}));

export default DashboardBox;
