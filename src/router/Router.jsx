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

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement : <Error/>,
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                loader:()=> fetch("http://localhost:3000/ongoingGroups"),
                element : <Home/>
            },
            {
                path : "/allGroups",
                loader: ()=> fetch("http://localhost:3000/groups"),
                element: <AllGroups/>
            },
            {
                path : "/createGroups",
                element: <PrivateRoute><CreateGroups/></PrivateRoute>
            },
            {
                path : "/myGroups",
                // loader: ()=> fetch(`http://localhost:3000/mygroups/${user.email}`),
                element : <PrivateRoute><MyGroups/></PrivateRoute>
            },
            {
                path: "/group/:id",
                loader: ({params})=> fetch(`http://localhost:3000/group/${params.id}`),
                element: <PrivateRoute><GroupDetails/></PrivateRoute>
            },
            {
                path: "/updategroup/:id",
                loader: ({params})=> fetch(`http://localhost:3000/group/${params.id}`),
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
    }
]);
