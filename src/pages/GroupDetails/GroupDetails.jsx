import { useLoaderData } from "react-router"
import swal from 'sweetalert';


export const GroupDetails = ()=>{
    const groupDetails = useLoaderData();
    const handleJoinGroup = ()=>{
      console.log(groupDetails.date)
      const date = new Date();
      const todayDate = date.toISOString().split('T')[0];
      console.log(todayDate);
      if(groupDetails.date === todayDate){
        swal({
            title: "Good job!",
            text: "You Joined the group properly",
            icon: "success",
          });
      }else{
        swal("Oops!", "The group is no longer active!", "error");
      }
    }
    return(
        <section className=" py-10">
          <div className=" card mx-auto mt-10 bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={groupDetails.photo}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{groupDetails.groupName}</h2>
              <p>{groupDetails.userName}</p>
              <div className="card-actions">
                <button onClick={handleJoinGroup} className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </section>
    )
}