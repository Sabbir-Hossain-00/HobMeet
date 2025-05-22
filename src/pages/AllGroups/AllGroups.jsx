import { useLoaderData } from "react-router";
import { GroupCard } from "../../components/GroupCards/GroupCard";

export const AllGroups = ()=>{
  const groupData = useLoaderData();
    return(
        <section className="py-20">
          <h1 className=" text-2xl md:text-4xl text-center mb-3 font-medium">Find Your Hobby Tribe</h1>
          <p className="text-center">Connect with like-minded people! Browse through all our hobby groups and find your perfect community—whether you're into painting, <br /> coding, gardening, gaming, or anything in between.</p>
          <div className="py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 text-center grid grid-cols-1 md:grid-cols-3 gap-6  space-x-2">
            {
              groupData.map((singleGroupData)=>{
                return <GroupCard key={singleGroupData._id} singleGroupData={singleGroupData}/>
              })
            }
          </div>
        </section>
    )
}