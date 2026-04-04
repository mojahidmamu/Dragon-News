import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import MainLayout from "../Components/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",  
        element: <MainLayout></MainLayout> ,
        children: [
            {
                path: "/",
                element: <Home></Home>, 
            }
        ]
    },
])

export default router;