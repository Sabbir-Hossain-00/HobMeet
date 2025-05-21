import { useLoaderData } from "react-router"

export const GroupDetails = ()=>{
    const groupDetails = useLoaderData();
    console.log(groupDetails)
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
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </section>
    )
}