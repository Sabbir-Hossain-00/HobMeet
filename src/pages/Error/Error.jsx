import { useNavigate } from "react-router"

export const Error = ()=>{
    const navigate = useNavigate();
    return(
        <>
           <div className="flex flex-col justify-center items-center">
              <img src="https://i.ibb.co/7xPt3K3D/404.gif" alt="" />
              <button onClick={()=> navigate("/")} className="btn">Go Back To Home</button>
           </div>
        </>
    )
}