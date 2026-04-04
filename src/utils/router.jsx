import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home"; 
import App from "../App";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",  
        element: <App></App> ,
        children: [
            {
                path: "/",
                element: <Home></Home>, 
            }, 
            {
                path: "/about",
                element: <About></About>,
            }, 
            {
                path: "/career",
                element: <Career></Career>, 
            },
            {
                path: "/login",
                element: <Login></Login>,
            }

        ]
    },
])

export default router;