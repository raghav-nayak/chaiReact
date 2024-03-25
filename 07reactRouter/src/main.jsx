import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from "./Layout";
import { About, Contact, Github, Home, User, githubInfoLoader } from "./components";
import './index.css';


// defining different routes
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             // for /
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             // for about
//             {
//                 path: "about",
//                 element: <About />,
//             },
//             // for about
//             {
//                 path: "contact",
//                 element: <Contact />,
//             }
//         ]
//     }
// ]);

// another way
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:userId" element={<User />} />
            <Route
                path="github"
                element={<Github />}
                loader={ githubInfoLoader }
            />
        </Route>
    )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
