import { Outlet } from "react-router-dom";
import Navber from "../component/Shared/Navber/Navber";
import Footer from "../component/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;