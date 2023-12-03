import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const SiteFooter = () => {
    return (
        <div className="text-white bg-black">
            <div className="container mx-auto pt-10">
                <div className="grid md:grid-cols-3 px-[5%] md:px-0">
                <div>
                    <h1 className=" text-[2.5rem] font-bold mb-3">WEB LOGO</h1>
                    <p>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                    <div className="flex gap-4 my-3">
                    <a href="https://www.facebook.com/" target="_blank"><FaFacebookF  className="bg-[#20B15A] rounded-[50%] p-2 w-8 h-8 "/></a>
                    <a href="https://www.youtube.com/" target="_blank"><FaYoutube className="bg-[#20B15A] rounded-[50%] p-2 w-8 h-8 "/></a>
                    <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn  className="bg-[#20B15A] rounded-[50%] p-2 w-8 h-8 "/></a>
                    <a href="https://www.instagram.com/" target="_blank"><FaInstagram   className="bg-[#20B15A] rounded-[50%] p-2 w-8 h-8 "/></a>
                    </div>
                </div>
                <div className="grid justify-center ">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    

                    <div className=" text-lg flex flex-col mt-5 ">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/team'}>Team</Link>
                    <Link href={'/service'}>Service</Link>
                    <Link href={'/project'}>Project</Link>
                    <Link href={'/testimonial'}>testimonial</Link>
                    </div>
                </div>
                <div className=" md:ml-auto">
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-lg mt-5">Design Agency Head Office.<br/>
                Airport Road<br/>
                United Arab Emirate</p>
                </div>


               
                </div>
                <p className="text-xl mt-8 pb-3 text-center">Copyright Design Agency 2022</p>


            </div>
            
        </div>
    );
};

export default SiteFooter;