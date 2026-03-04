import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-company",
                element: <About />
            },
            // You can add more routes here
            // { path: "/portfolio-grid", element: <Portfolio /> },
        ],
    },
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}
