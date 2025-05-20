import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext";

export const Register = ()=>{

    const {createUser , updateUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e)=>{

        e.preventDefault();
        const form = e.target ;
        const formData = new FormData(form);
        const {email , name , photo , password} = Object.fromEntries(formData.entries());

        createUser(email , password).then((result)=>{
            updateUser({displayName : name , photoURL : photo}).then((result)=>{

                 navigate(`${location.state || "/"}`);

            }).catch(erroe => console.log(erroe))
        }).catch(error => console.log(error))
        

    }

    

    return(
        <>
          <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className=" text-3xl font-medium text-center mt-4">Register Now</h1>
                <form onSubmit={handleRegister} className="fieldset">

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                    <label className="label">Photo</label>
                    <input type="text" name="photo" className="input" placeholder="Photo URL" />


                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already Have An Account ? <Link className="text-blue-950 font-medium" to="/login">Login</Link> </p>

                
            </div>
          </div>
        </>
    )
}