import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Login from "./pages/Login";
import  Home  from "./pages/Home";
import AdminDashBoardLayout from "./AdminDashBoardLayout";
import Room from "./pages/Room";
import AddMenuItems from "./pages/AddMenuItems";
import DailyMenu from "./pages/DailyMenu";
import Complaints from "./pages/Complaints";


export const Layout = createBrowserRouter([

    {
         path:"/",
         element:<Body/>,
         children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"login",element:<Login/>
            }
         ]
    },

    {
            path:"/admin",
            element:<AdminDashBoardLayout/>,
            children:[
                {   
                    index:true,
                    element:<Room/>
                },
                {
                    path:"addMenu",
                    element:<AddMenuItems/>
                },
                {
                    path:"add-Daily-Menu",
                    element:<DailyMenu/>
                },
                {
                    path:"complaints",
                    element:<Complaints/>
                }               
            ]
    }
])