import { useState } from "react";
import { useLoaderData } from "react-router"
import { FeaturedGroupCard } from "./FeaturedGroupCard";

export const FeaturedGroup = ()=>{
    const groupsData = useLoaderData();
    const [groups , setGroups] = useState(groupsData);

    return(
        <section className=" py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
            <h1 className="text-2xl md:text-4xl text-center font-medium mb-3">Discover <span className="text-amber-400">What's</span> Ongoing</h1>
            <p className="mb-10 text-center">Explore trending hobbies, top-rated communities, and inspiring stories from passionate  hobbyists <br /> around the world—all in one place.</p>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
              {
                groups.map((group)=>{
                    return <FeaturedGroupCard key={group._id} group={group} />
                })
              }
           </div>
        </section>
    )
}