import { Banner } from "../../components/Banner/Banner"
import { Counter } from "../../components/Counter/Counter"
import { FeaturedGroup } from "../../components/FeaturedGroup/FeaturedGroup"

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
            <Counter/>
         </section>
        </>
    )
}