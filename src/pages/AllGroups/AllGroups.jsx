import { useLoaderData } from "react-router";
import { GroupCard } from "../../components/GroupCards/GroupCard";

export const AllGroups = ()=>{
  const groupData = useLoaderData();
    return(
        <>
          <div className="py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 text-center grid grid-cols-1 md:grid-cols-3 gap-6  space-x-2">
            {
              groupData.map((singleGroupData)=>{
                return <GroupCard key={singleGroupData._id} singleGroupData={singleGroupData}/>
              })
            }
          </div>
        </>
    )
}