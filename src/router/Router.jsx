import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { AllGroups } from "../pages/AllGroups/AllGroups";
import { MyGroups } from "../pages/MyGroups/MyGroups";
import { CreateGroups } from "../pages/CreateGroups/CreateGroups";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element : <Home/>
            },
            {
                path : "/allGroups",
                element: <AllGroups/>
            },
            {
                path : "/createGroups",
                element: <PrivateRoute><CreateGroups/></PrivateRoute>
            },
            {
                path : "/myGroups",
                element : <MyGroups/>
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
    }
]);
