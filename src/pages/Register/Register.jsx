import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext";
import swal from 'sweetalert';
import { Eye, EyeOff } from "lucide-react";


export const Register = ()=>{

    const {createUser , updateUser, isDark } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage , setErrorMessage] = useState(false);
    const [passError , setPassError] = useState("");
    const [isShow , setIsShow] = useState(false)

    const handleRegister = (e)=>{
        e.preventDefault();

        const form = e.target ;
        const formData = new FormData(form);
        const {email , name , photo , password} = Object.fromEntries(formData.entries());

        setErrorMessage(false)
        setPassError("")

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);


        if(password.length < 6){
            setPassError("Password must be at least 6 characters.");
            return ;
        }

        if(!hasUppercase){
            setPassError("Password must contain at least one uppercase letter.")
            return ;
        }

        if(!hasLowercase){
            setPassError("Password must contain at least one lowercase letter");
            return ;
        }
        



        createUser(email , password).then((result)=>{
            updateUser({displayName : name , photoURL : photo}).then((result)=>{
                swal("Registration Successful!", "Welcome to HobMeet", "success");
                 navigate(`${location.state || "/"}`);

            }).catch((error)=>{
                setErrorMessage(true)
            })
        }).catch((error)=>{
            setErrorMessage(true)
        })
        

    }

    

    return(
        <section className=" min-h-screen  flex justify-center items-center py-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
          <div className="card backdrop-blur-md bg-white/30 border border-white/20 rounded-xl mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className={` card-body  ${isDark? "text-white":"text-black"}`}>
                <h1 className=" text-3xl font-medium text-center mt-4">Register Now</h1>
                <form onSubmit={handleRegister} className="fieldset">

                    <label className={`label ${isDark? "text-white":"text-black"}`}>Name</label>
                    <input type="text" name="name" required className={`input ${isDark? "text-black":""}`} placeholder="Name" />

                    <label className={`label ${isDark? "text-white":"text-black"}`}>Photo</label>
                    <input type="text" name="photo" className={`input ${isDark? "text-black":""}`} placeholder="Photo URL" />


                    <label className={`label ${isDark? "text-white":"text-black"}`}>Email</label>
                    <input type="email" name="email" required className={`input ${isDark? "text-black":""}`} placeholder="Email" />

                    <label className={`label ${isDark? "text-white":"text-black"}`}>Password</label>
                    <div className="relative">
                        <input type={`${isShow ? "text" : "password"}`} name="password" className={`input ${isDark? "text-black":""}`} placeholder="Password" />
                        <div onClick={()=>setIsShow(!isShow)} className=" absolute top-2 right-7">
                            {
                                isShow ? <EyeOff /> : <Eye/>
                            }
                        </div>
                    </div>
                    <p className="text-xs font-medium text-red-700">{passError}</p>

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already Have An Account ? <Link className="text-amber-400 font-medium" to="/login">Login</Link> </p>
                <div>
                    {errorMessage && <p className="text-rose-600 font-medium text-sm text-center">Email already in use. Try another or Login</p>}
                </div>

                
            </div>
          </div>
        </section>
    )
}