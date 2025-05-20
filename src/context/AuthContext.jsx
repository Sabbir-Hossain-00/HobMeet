import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const [user , setUser] = useState("");
    const [loading , setLoading] = useState(true)
    
    const createUser = (email , password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signinUser = (email , password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth , email , password)
    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , (curUser)=>{
        setLoading(false)
         setUser(curUser)
       });

       return()=>{
         unsubscribe();
       }  
    },[]);

    const logOut = ()=>{
        return signOut(auth)
    }





    const userInfo = {
        createUser,
        signinUser,
        user,
        logOut,
    }


    return(
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
}