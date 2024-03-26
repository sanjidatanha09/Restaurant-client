import {
    createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages2/Menu/Menu";
import Order from "../Page3/OrderFood/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/menu',
                element:<Menu></Menu>
            }, 
            {
                path: '/orderfood',
                element: <Order></Order>
            },
        ]
    },
]);