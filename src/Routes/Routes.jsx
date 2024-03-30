import {
    createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages2/Menu/Menu";
import Order from "../Page3/OrderFood/Order";
import Login from "../LoginPage/Login";
import Registration from "../LoginPage/Registration";


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
                path: '/orderfood/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    }
    
   
]);