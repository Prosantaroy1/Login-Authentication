/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {

    //
    const { user, loading } = useContext(AuthContext);
    //
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center pt-40">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' />
};

export default PrivetRouter;