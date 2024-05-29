import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default DefaultLayout;
