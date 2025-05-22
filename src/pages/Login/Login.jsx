import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext";

export const Login = ()=>{

    const {signinUser , googleSignin ,} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage , setErrorMessage] = useState(false)

    // console.log(location);

    const handleSignIn = (e)=>{
        setErrorMessage(false)
        e.preventDefault();
        const form = e.target ; 
        const formData = new FormData(form);
        const {email , password} = Object.fromEntries(formData.entries());

        signinUser(email , password).then((result)=>{
            navigate(`${location.state || "/"}`)
        }).catch((error)=>{
            setErrorMessage(true);
        });

        
    }

    const handleGoogleRegister = ()=>{
        googleSignin().then((result)=>{
            navigate(`${location.state || "/"}`);
        }).catch(erroe => console.log(erroe.message))
    }


    return(
        <section className=" min-h-screen  flex justify-center items-center py-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
            
        <div className="  card bg-base-100 mx-auto  w-full max-w-sm shrink-0 shadow-2xl *:">
            <div className="card-body text-black">
                <h1 className=" text-3xl font-medium text-center mt-4">Login Now</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't Have An Account ? <Link state={location.state} className="text-blue-950 font-medium" to="/register">Register</Link> </p>

                <button onClick={handleGoogleRegister} className="btn bg-white text-black border-[#e5e5e5]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
                <div>
                    {errorMessage && <p className="text-rose-600 font-medium text-sm text-center">Invalid Credential</p>}
                </div>
            </div>
        </div>

        </section>
    )
}