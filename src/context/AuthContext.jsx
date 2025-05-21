import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const [isDark, setIsDark] = useState(false);
    const [user , setUser] = useState("");
    const [loading , setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signinUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const googleSignin = ()=>{
        return signInWithPopup(auth , googleProvider)
    }

    const updateUser = (userData)=>{
        return updateProfile(auth.currentUser , userData )
    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , (curUser)=>{
         setUser(curUser)
         setLoading(false)
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
        loading,
        updateUser,
        googleSignin,
        isDark,
        setIsDark,
    }


    return(
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
}