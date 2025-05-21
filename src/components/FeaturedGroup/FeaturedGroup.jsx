import { useState } from "react";
import { useLoaderData } from "react-router"
import { FeaturedGroupCard } from "./FeaturedGroupCard";

export const FeaturedGroup = ()=>{
    const groupsData = useLoaderData();
    const [groups , setGroups] = useState(groupsData);
    return(
        <section className=" py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
            <h1 className="text-2xl md:text-4xl text-center font-medium mb-10">Fetured Group </h1>
           <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
              {
                groups.map((group)=>{
                    return <FeaturedGroupCard key={group._id} group={group} />
                })
              }
           </div>
        </section>
    )
}