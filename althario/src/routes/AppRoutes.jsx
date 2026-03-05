import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Journal from '../pages/Journal';
import AgenticAI from '../pages/AgenticAI';
import SoftwareDevelopment from '../pages/SoftwareDevelopment';
import WebDevelopment from '../pages/WebDevelopment';
import AgenticAIFuture from '../pages/journals/AgenticAIFuture';
import ScalingNextJS from '../pages/journals/ScalingNextJS';
import CustomSoftwareROI from '../pages/journals/CustomSoftwareROI';

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
            {
                path: "/contacts",
                element: <Contact />
            },
            {
                path: "/portfolio-grid",
                element: <Portfolio />
            },
            {
                path: "/blog-grid",
                element: <Journal />
            },
            {
                path: "/journal/agentic-ai-future",
                element: <AgenticAIFuture />
            },
            {
                path: "/journal/scaling-nextjs",
                element: <ScalingNextJS />
            },
            {
                path: "/journal/custom-software-roi",
                element: <CustomSoftwareROI />
            },
            {
                path: "/services/agentic-ai",
                element: <AgenticAI />
            },
            {
                path: "/services/software-development",
                element: <SoftwareDevelopment />
            },
            {
                path: "/services/web-development",
                element: <WebDevelopment />
            },
            // You can add more routes here
            // { path: "/portfolio-grid", element: <Portfolio /> },
        ],
    },
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}
