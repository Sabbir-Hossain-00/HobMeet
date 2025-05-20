import { use } from "react"
import { Link, NavLink, useActionData } from "react-router"
import { AuthContext } from "../../context/AuthContext"

export const Navbar = ()=>{
    const {user , logOut} = use(AuthContext);

    const links = 
    <>
       <li><NavLink to='/' className={({isActive})=> isActive ? "underline" : ""}>Home</NavLink></li>
       <li><NavLink to='/allGroups' className={({isActive})=> isActive ? "underline" : ""}>All Groups</NavLink></li>
       <li><NavLink to='/createGroups' className={({isActive})=> isActive ? "underline" : ""}>Create Groups</NavLink></li>
       {
        user && <li><NavLink to='/myGroups' className={({isActive})=> isActive ? "underline" : ""}>My Groups</NavLink></li>
       }
    </>
    const handleLogout = ()=>{
        logOut().then((result)=>{

        }).catch(error => console.log(error));
    }
    console.log(user)
    return(
        <>
          <div className="navbar bg-base-100  shadow-sm">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                  </ul>
                </div>
                <a className=" font-medium text-xl">HobMeet</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="space-x-6 flex items-center">
                  {links}
                </ul>
              </div>
              <div className="navbar-end">
                {
                    user ? <>
                    <div className="tooltip tooltip-left" data-tip={`${user.displayName}`}>
                      <img className=" w-8 rounded-full mr-3" src={user.photoURL? user.photoURL : "https://i.ibb.co.com/0jKWX0cD/user-png-33832.png"} alt="" />
                    </div>
                    <Link onClick={handleLogout} className="btn">Logout</Link>
                    </> : <Link to="/login" className="btn">Login</Link>
                }
              </div>
           </div> 
        </>
    )
}