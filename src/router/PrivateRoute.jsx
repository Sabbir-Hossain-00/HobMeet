import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";

export const PrivateRoute = ({children})=>{
   
    const {user , loading} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        return <h1>Loading...</h1>
    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }



    return children ;
}