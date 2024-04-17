/* eslint-disable react/prop-types */
import { getAuth } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
//auth
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //cratedUser
    const createdUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signin
    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //updateUser
    const updateUser=(name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }
    ///logout
    const logOut=()=>{
        return signOut(auth);
    }

    //logout user 
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (logUsers)=>{
            console.log('logged in user inside auth obbser', logUsers)
            setUser(logUsers);
        })
        return ()=>{unsubscribe();}
    },[]);


    //share
    const authInfo ={
        user,
        createdUser,
        logOut,
        updateUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

