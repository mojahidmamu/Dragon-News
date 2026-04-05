import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home"; 
import App from "../App";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NewsDetials from "../Components/NewsDetials/NewsDetials";
import PrivateRoute from "../Components/PrivateRoute";

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
                element: 
                <PrivateRoute>
                    <About></About>,
                </PrivateRoute>
            }, 
            {
                path: "/career",
                element: 
                <PrivateRoute>
                    <Career></Career>, 
                </PrivateRoute>
            },
            {
                path: "/news/:id",
                element: <NewsDetials></NewsDetials> ,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register", 
                element: <Register></Register>,
            }
        ]
    },
])

export default router;