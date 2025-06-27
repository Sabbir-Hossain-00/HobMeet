import { useEffect } from "react"
import { Banner } from "../../components/Banner/Banner"
import { Counter } from "../../components/Counter/Counter"
import { FeaturedGroup } from "../../components/FeaturedGroup/FeaturedGroup"
import { SuccessStories } from "../../components/SuccessStories/SuccessStories"
import { Newsletter } from "../../components/NewsLetter/NewsLetter"
import { HowItWorks } from "../../components/HowItWorks/HowItWorks"

export const Home = ()=>{
    useEffect(() => {
        document.title = "Home - HobMeet";
        return () => {
          document.title = "HobMeet"; // reset on unmount
        };
      }, []);
    return(
        <>
         <section>
             <Banner/>
         </section>
         <section>
           <HowItWorks/>
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
         <section>
            <Newsletter/>
         </section>
        </>
    )
}