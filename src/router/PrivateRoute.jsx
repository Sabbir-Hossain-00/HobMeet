import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";
import { Loader } from "../pages/Loader/Loader";

export const PrivateRoute = ({children})=>{
   
    const {user , loading} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        return <Loader/>
    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }



    return children ;
}