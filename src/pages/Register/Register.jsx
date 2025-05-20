import { Link } from "react-router"

export const Register = ()=>{
    return(
        <>
          <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className=" text-3xl font-medium text-center mt-8">Register Now</h1>
                <fieldset className="fieldset">

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                    <label className="label">Photo</label>
                    <input type="text" name="photo" className="input" placeholder="Photo URL" />


                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already Have An Account ? <Link className="text-blue-950 font-medium" to="/login">Login</Link> </p>
            </div>
          </div>
        </>
    )
}