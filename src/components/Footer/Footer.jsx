export const Footer = ()=>{
    return(
        <section className=" bg-neutral ">
            <footer className="footer flex justify-between text-neutral-content p-10 sm:footer-horizontal container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
              <nav>
                <h1 className=" text-2xl font-medium">HobMeet</h1>
              </nav>
              <nav >
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </nav>
              <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </nav>
              <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </footer>
        </section>
    )
}