export const MyGroupsEmpty = ()=>{
    return(
        <section className=" mt-10 flex flex-col justify-center min-h-screen container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 md:py-16">
             <h1 className="text-center text-2xl md:text-4xl mb-2 font-medium">Your Hobby <span className="text-amber-400">Hub</span></h1>
             <p className="text-center mb-10 ">Manage all the hobby groups you've created in one place. Update details, remove groups, <br /> or explore your communities—right from your dashboard.</p>
             <h1 className=" text-2xl md:text-4xl font-bold text-center">Opps! You didn't create any groups yet</h1>
        </section>
    )
}