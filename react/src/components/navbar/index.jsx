import { NavLink } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { useMediaQuery } from "@mui/material";
import FlexBetween from "@/utils/FlexBetween";
import "./navbar.css";

const Navbar = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    return (
        <FlexBetween className="nav-links" color="#d1d3da">
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{ fontSize: "28px" }} />
                <NavLink to="/" style={{ fontSize: "26px" }}>
                    Hospital Dashboard
                </NavLink>
            </FlexBetween>

            {isAboveMediumScreens && (
                <FlexBetween gap="2rem">
                    <div>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </div>
                </FlexBetween>
            )}
        </FlexBetween>
    );
};

export default Navbar;
