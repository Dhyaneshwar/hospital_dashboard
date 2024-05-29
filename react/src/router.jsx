import { createBrowserRouter } from "react-router-dom";
import TestPath from "./pages/testPath/TestPath";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/navbar";
import DefaultLayout from "./components/DefaultLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/test",
        element: <TestPath />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
