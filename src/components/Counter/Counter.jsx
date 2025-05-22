import CountUp from "react-countup"

export const Counter = ()=>{
    return(
        <>
           <div className="py-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="card border border-gray-200 shadow px-3 py-6 flex items-center justify-center flex-col">
                        <img className="w-10 mb-2" src="https://i.ibb.co.com/7LNvK9J/pngkey-com-job-icon-png-5173026.png" alt="" />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                         <CountUp delay={0} end={1099} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="K" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">Daily Active User</p>
                    </div>
                    <div className="card border border-gray-200 shadow px-3 py-6 flex items-center justify-center flex-col">
                        <img className="w-10 mb-2" src="https://i.ibb.co.com/7dM58TFz/pngegg.png" alt="" />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                          <CountUp delay={0} end={389} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">Available Jobs</p>
                    </div>
                    <div className="card border border-gray-200 shadow px-3 py-6 flex items-center justify-center flex-col">
                        <img className="w-10 mb-2" src="https://i.ibb.co.com/b5TxsQTs/image.png" alt="" />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                         <CountUp delay={0} end={2030} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">Stories Shared</p>
                    </div>
                    <div className="card border border-gray-200 shadow px-3 py-6 flex items-center justify-center flex-col">
                        <img className="w-10 mb-2" src="https://i.ibb.co.com/ycsZnfKg/image.png" alt="" />
                       <p className="text-3xl md:text-5xl font-bold my-3">
                          <CountUp delay={0} end={200} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" />
                       </p>
                       <p className="text-center text-sm md:text-xl font-medium">Got Job</p>
                    </div>
                </div>
             </div>
        </>
    )
}