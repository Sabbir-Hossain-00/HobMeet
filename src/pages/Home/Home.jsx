import { Banner } from "../../components/Banner/Banner"
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
        </>
    )
}