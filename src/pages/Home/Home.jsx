import { Banner } from "../../components/Banner/Banner"
import { Counter } from "../../components/Counter/Counter"
import { FeaturedGroup } from "../../components/FeaturedGroup/FeaturedGroup"
import { SuccessStories } from "../../components/SuccessStories/SuccessStories"

export const Home = ()=>{
    return(
        <>
         <section>
             <Banner/>
         </section>
         <section>
            <FeaturedGroup/>
         </section>
         <section>
            <SuccessStories/>
         </section>
         <section>
            <Counter/>
         </section>
        </>
    )
}