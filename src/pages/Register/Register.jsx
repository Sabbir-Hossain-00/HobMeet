import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import swal from "sweetalert";
import { Eye, EyeOff } from "lucide-react";
import { HobmeetLogo } from "../../components/HobmetLogo/HobmeetLogo";

export const Register = () => {
  const { createUser, updateUser, isDark, googleSignin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [passError, setPassError] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, name, photo, password } = Object.fromEntries(
      formData.entries()
    );

    setErrorMessage(false);
    setPassError("");

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (password.length < 6) {
      setPassError("Password must be at least 6 characters.");
      return;
    }

    if (!hasUppercase) {
      setPassError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!hasLowercase) {
      setPassError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo })
          .then((result) => {
            swal("Registration Successful!", "Welcome to HobMeet", "success");
            navigate(`${location.state || "/"}`);
          })
          .catch((error) => {
            setErrorMessage(true);
          });
      })
      .catch((error) => {
        setErrorMessage(true);
      });
  };

  const handleGoogleRegister = () => {
    googleSignin()
      .then((result) => {
        swal("Login Successful!", "Welcome to HobMeet", "success");
        navigate(`${location.state || "/"}`);
      })
      .catch((erroe) => console.log(erroe.message));
  };

  useEffect(() => {
    document.title = "Register - HobMeet";
    return () => {
      document.title = "HobMeet"; // reset on unmount
    };
  }, []);

  return (
    <section className=" min-h-screen  flex justify-center items-center py-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
      <div className={`md:h-[640px] xl:h-[700px] w-full mt-20 shadow-2xl flex justify-center gap-20 items-center md:flex-row flex-col-reverse ${isDark?"bg-gray-900":"bg-blue-50"}`}>
        <div className={` h-[100%] w-full md:flex-1/2 flex justify-center items-center ${isDark ? " bg-black" : "bg-white"}`}>
          <div className="card border-none backdrop-blur-md bg-white/30 border border-white/20 rounded-xl max-w-sm  w-full  shrink-0">
            <div
              className={` card-body border-none shadow-none  ${isDark ? "text-white bg-black" : "text-black bg-white"}`}
            >
              <div className="mx-auto">
                 <HobmeetLogo/>
              </div>
              <form onSubmit={handleRegister} className="fieldset">
                <label
                  className={`label ${isDark ? "text-white" : "text-black"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`input w-full ${isDark ? "text-black" : ""}`}
                  placeholder="Name"
                />

                <label
                  className={`label ${isDark ? "text-white" : "text-black"}`}
                >
                  Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  className={`input w-full ${isDark ? "text-black" : ""}`}
                  placeholder="Photo URL"
                />

                <label
                  className={`label ${isDark ? "text-white" : "text-black"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`input w-full ${isDark ? "text-black" : ""}`}
                  placeholder="Email"
                />

                <label
                  className={`label ${isDark ? "text-white" : "text-black"}`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={`${isShow ? "text" : "password"}`}
                    name="password"
                    className={`input w-full ${isDark ? "text-black" : ""}`}
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setIsShow(!isShow)}
                    className=" absolute top-2 right-7"
                  >
                    {isShow ? <EyeOff /> : <Eye />}
                  </div>
                </div>
                <p className="text-xs font-medium text-red-700">{passError}</p>

                <button className={`btn  mt-4 ${isDark ? "bg-white text-black":"bg-black text-white"}`}>Register</button>
              </form>
              <div className=" w-3/4 mx-auto">
                <div className="divider divider-warning">OR</div>
              </div>
              <button
                onClick={handleGoogleRegister}
                className="btn mt-2 border-none bg-white shadow-none  text-black hover:shadow "
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="text-center mt-4">
                Already Have An Account ?{" "}
                <Link className="text-amber-400 font-medium" to="/login">
                  Login
                </Link>{" "}
              </p>
              <div>
                {errorMessage && (
                  <p className="text-rose-600 font-medium text-sm text-center">
                    Email already in use. Try another or Login
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1/2 flex justify-center">
          <img
            className="w-100"
            src="https://i.ibb.co/Xrh341JY/Secure-login-bro-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
