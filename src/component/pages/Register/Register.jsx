import { Link } from "react-router-dom";

const Register = () => {

    //
    const handleRegister= e=>{
        e.preventDefault();
        const from= e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        const user = {name, photo, email, password};

        console.log(user);
    }

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <p className="pt-2">
                                Already Account ! Created Now <Link className="bg-red-500 px-2 py-1" to='/login'>Login</Link>
                            </p>
                        </form>
                    </div>
             </div>
        </div>
    );
};

export default Register;