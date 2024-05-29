import { createBrowserRouter } from "react-router-dom";
import TestPath from "./pages/testPath/TestPath";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
