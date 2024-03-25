import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { About, Home } from "./components";
import './index.css';

// defining different routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            // for /
            {
                path: "",
                element: <Home />,
            },
            // for about
            {
                path: "about",
                element: <About />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
