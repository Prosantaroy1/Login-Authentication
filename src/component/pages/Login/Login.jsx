import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    //
    const handleLogin=e=>{
        e.preventDefault();
        const from=e.target;
        const email= from.email.value;
        const password= from.password.value;

        //
        loginUser(email, password)
        .then(result=>{
            const users= result.user;
            console.log(users);
            alert('succefully login account');
            from.reset('');
            if(users){
                return '/';
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p className="pt-2">
                                Already Account ! Created Now <Link className="bg-red-500 px-2 py-1" to='/register'>Register</Link>
                            </p>
                        </form>
                    </div>
             </div>
        </div>
    );
};

export default Login;