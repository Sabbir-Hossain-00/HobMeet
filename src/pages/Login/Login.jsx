import { Link } from "react-router"

export const Login = ()=>{
    return(
        <>
            
        <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className=" text-3xl font-medium text-center mt-8">Login Now</h1>
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>Don't Have An Account ? <Link className="text-blue-950 font-medium" to="/register">Register</Link> </p>
            </div>
        </div>

        </>
    )
}