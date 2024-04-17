import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navber = () => {
    //user
    const {user,logOut} = useContext(AuthContext);
    //
    const handlelogout=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error);
        })
    }
    //
    const navItem= <div className="flex gap-6 text-xl">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
    </div>

    return (
        <div>
            <div className="navbar px-10 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navItem}
                        </ul>
                    </div>
                    <a className="btn text-3xl font-bold btn-ghost">Auth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user && <p className="bg-red-500 px-3 py-1 text-white rounded">{user.displayName}</p>
                    }
                   {
                    user ?
                     <Link onClick={handlelogout} className="btn">LogOut</Link>:
                     <Link to='/login' className="btn">LogIn</Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default Navber;