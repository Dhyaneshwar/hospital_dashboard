import { createBrowserRouter } from "react-router-dom";
import TestPath from "./pages/testPath/TestPath";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import DefaultLayout from "./components/DefaultLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: 1,
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
