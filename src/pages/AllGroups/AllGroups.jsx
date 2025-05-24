import { useLoaderData } from "react-router";
import { GroupCard } from "../../components/GroupCards/GroupCard";
import { useEffect } from "react";

export const AllGroups = ()=>{
  const groupData = useLoaderData();
  useEffect(() => {
      document.title = "All-Group - HobMeet";
      return () => {
        document.title = "HobMeet"; // reset on unmount
      };
    }, []);
    return(
        <section className="mt-20 py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
          <h1 className=" text-2xl md:text-4xl text-center mb-3 font-medium">Find Your <span className="text-amber-400">Hobby</span> Tribe</h1>
          <p className="text-center text-sm md:text-base">Connect with like-minded people! Browse through all our hobby groups and find your perfect community—whether you're into painting, <br /> coding, gardening, gaming, or anything in between.</p>
          <div className="py-20  text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              groupData.map((singleGroupData)=>{
                return <GroupCard key={singleGroupData._id} singleGroupData={singleGroupData}/>
              })
            }
          </div>
        </section>
    )
}