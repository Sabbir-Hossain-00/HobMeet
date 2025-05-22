import { use } from "react"
import CountUp from "react-countup"
import { AuthContext } from "../../context/AuthContext"
import { AlarmClockCheck, Clock8, ContactRound, FileCheck, UsersRound } from "lucide-react"

export const Counter = ()=>{
    const {isDark} = use(AuthContext)
    return(
        <section>
            <h1 className=" text-2xl md:text-4xl font-medium text-center mb-3">Community Insights</h1>
            <p className=" text-center mb-10">Track the pulse of HobMeet: how many groups formed, joined, and still growing — all in real time</p>
           <div className="pb-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className={`card shadow px-3 py-6 flex items-center justify-center flex-col ${isDark ? "bg-black" :"bg-white"}`}>
                        <UsersRound size={48} strokeWidth={1.75} />
                       <p className="text-3xl md:text-4xl font-bold my-3">
                         <CountUp delay={0} end={1099} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="K" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">All Groups</p>
                    </div>
                    <div className={`card shadow px-3 py-6 flex items-center justify-center flex-col ${isDark ? "bg-black" :"bg-white"}`}>
                        <AlarmClockCheck size={48} strokeWidth={1.75} />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                          <CountUp delay={0} end={389} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">Ongoing Groups</p>
                    </div>
                    <div className={`card shadow px-3 py-6 flex items-center justify-center flex-col ${isDark ? "bg-black" :"bg-white"}`}>
                        <ContactRound size={48} strokeWidth={1.75} />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                         <CountUp delay={0} end={2030} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">My Groups</p>
                    </div>
                    <div className={`card shadow px-3 py-6 flex items-center justify-center flex-col ${isDark ? "bg-black" :"bg-white"}`}>
                        <FileCheck size={48} strokeWidth={1.75} />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                          <CountUp delay={0} end={200} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">Joined Groups</p>
                    </div>
                </div>
             </div>
        </section>
    )
}