/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {

    //
    const {user}= useContext(AuthContext);
    //
    const location= useLocation();

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login'/>
};

export default PrivetRouter;