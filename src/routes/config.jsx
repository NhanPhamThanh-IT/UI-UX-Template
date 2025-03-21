// Code: Router configuration

// Importing necessary modules
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";

// Importing custom components
import Layout from "../components/layout/index";

// Importing pages
import { Homepage } from "../pages/MainPages/Homepage/index";
import { Docspage } from "../pages/MainPages/Docspage/index";
import { Templatespage } from "../pages/MainPages/Templatespage/index";

import { Aboutpage } from "../pages/SubPages/Aboutpage/index";

import NotFoundPage from "../pages/ErrorPages/404";

// Defining routes
const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <Navigate replace to="/home" /> },
        {
            element: <Layout />,
            children: [
                { path: "/home", element: <Homepage /> },
                { path: "/about", element: <Aboutpage /> },
            ],
        },
        {
            element: <Layout hasFooter={false} />,
            children: [
                { path: "/templates", element: <Templatespage /> },
                { path: "/docs", element: <Docspage /> },
            ],
        },
        { path: "*", element: <NotFoundPage /> },
    ]);
};

// Exporting the App component
export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
