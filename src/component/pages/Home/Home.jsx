import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Home = () => {
    const {loading} = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center pt-40">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div>
            <h3>This is pages Home section!</h3>
        </div>
    );
};

export default Home;