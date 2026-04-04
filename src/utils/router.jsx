import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home"; 
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",  
        element: <App></App> ,
        children: [
            {
                path: "/",
                element: <Home></Home>, 
            }
        ]
    },
])

export default router;