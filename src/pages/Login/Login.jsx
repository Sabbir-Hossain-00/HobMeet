import { use } from "react";
import { Link } from "react-router"
import { AuthContext } from "../../context/AuthContext";

export const Login = ()=>{

    const {signinUser} = use(AuthContext);

    const handleSignIn = (e)=>{
        e.preventDefault();
        const form = e.target ; 
        const formData = new FormData(form);
        const {email , password} = Object.fromEntries(formData.entries());

        signinUser(email , password).then((result)=>{

        }).catch(error => console.log(error));
        
    }
    return(
        <>
            
        <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className=" text-3xl font-medium text-center mt-4">Login Now</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't Have An Account ? <Link className="text-blue-950 font-medium" to="/register">Register</Link> </p>
            </div>
        </div>

        </>
    )
}