import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { AllGroups } from "../pages/AllGroups/AllGroups";
import { MyGroups } from "../pages/MyGroups/MyGroups";
import { CreateGroups } from "../pages/CreateGroups/CreateGroups";
import { PrivateRoute } from "./PrivateRoute";
import { GroupDetails } from "../pages/GroupDetails/GroupDetails";
import { UpdateGroup } from "../pages/UpdateGroup/UpdateGroup";
import { Error } from "../pages/Error/Error";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { ContactUs } from "../pages/ContactUs/ContactUs";
import { DashboardHome } from "../pages/DashboardHome/DashboardHome";
import { Profile } from "../pages/Profile/Profile";
import { AllGroupsDashboard } from "../pages/AllGroupsDashboard/AllGroupsDashboard";
import { Support } from "../pages/Support/Support";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement : <Error/>,
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                loader:()=> fetch("https://hobmeet-server.vercel.app/ongoingGroups"),
                element : <Home/>,
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/support",
                element:<Support/>
            },
            {
                path : "/allGroups",
                loader: ()=> fetch("https://hobmeet-server.vercel.app/groups"),
                element: <AllGroups/>
            },
            // {
            
            //     path : "/createGroups",
            //     element: <PrivateRoute><CreateGroups/></PrivateRoute>
            // },
            // {
            //     path : "/myGroups",
            //     element : <PrivateRoute><MyGroups/></PrivateRoute>
            // },
            {
                path: "/group/:id",
                loader: ({params})=> fetch(`https://hobmeet-server.vercel.app/group/${params.id}`),
                element: <PrivateRoute><GroupDetails/></PrivateRoute>
            },
            {
                path: "/updategroup/:id",
                loader: ({params})=> fetch(`https://hobmeet-server.vercel.app/group/${params.id}`),
                element: <PrivateRoute><UpdateGroup/></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:"home",
                element:<DashboardHome/>,
                loader:()=> fetch("https://hobmeet-server.vercel.app/ongoingGroups"),
            },
            {
                path:"profile",
                element:<Profile/>,
                loader:()=> fetch("https://hobmeet-server.vercel.app/ongoingGroups"),
            },
            {
                path:"myGroups",
                element:<MyGroups/>
            },
            {
                path : "createGroups",
                element: <PrivateRoute><CreateGroups/></PrivateRoute>
            },
            {
                path : "allGroups",
                loader: ()=> fetch("https://hobmeet-server.vercel.app/groups"),
                element: <AllGroupsDashboard/>
            },
            {
                path: "group/:id",
                loader: ({params})=> fetch(`https://hobmeet-server.vercel.app/group/${params.id}`),
                element: <PrivateRoute><GroupDetails/></PrivateRoute>
            },
        ]
    }
]);
