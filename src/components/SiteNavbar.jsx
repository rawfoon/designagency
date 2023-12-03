"use client"
import Link from "next/link";    
import { usePathname } from "next/navigation";

const SiteNavbar = () => {

    const NavClick = () => {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    }

    const current=usePathname();

    return (
        <div className=" sticky top-4 z-20">








 






            <nav className="  bg-transparent text-black flex justify-between mx-[5%] mt-10">
                <div>
                    <a href="/" className=" text-xl font-bold">Design<span className="text-orange-500">AGENCY</span></a>
                </div>
                <div className='lg:hidden'>
                    <button onClick={()=>{NavClick()}} className='navbar-burger flex items-center text-green-600 p-3'>
                        <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <title>Mobile menu</title>
                            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                        </svg>
                    </button>
                </div>
                <div className="z-20 hidden lg:flex">
                    <ul className="flex">
                        <li>
                        <Link className={current==="/"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline "} href={"/"}>Home</Link>
                        </li>
                        <li>
                        <Link className={current==="/team"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline "} href={"/team"}>Team</Link>
                        </li>
                        <li>
                        <Link className={current==="/services"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline"} href={"/services"}>Services</Link>
                        </li>
                        <li>
                        <Link className={current==="/projects"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline"} href={"/projects"}>Projects</Link>
                        </li>
                        <li>
                        <Link className={current==="/testimonials"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline"} href={"/testimonials"}>Testimonials</Link>
                        </li>
                        
                        <li>
                        <Link className={"mx-3 px-8 py-3 font-semibold rounded text-black border-[1px] rounded-[10px] border-green-400 "} href={"/login"}>Login</Link>
                        </li>
                        <li>
                        <Link className={" px-8 py-3 font-semibold rounded text-white bg-green-400 "} href={"/signup"}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>









            <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
                <div onClick={()=>{NavClick()}} className='navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25' />
                <nav className='relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto'>
                    <div className='flex items-center mb-8'>
                        <a className='mr-auto text-3xl font-bold leading-none' href='#'>
                            <img className='h-10' src='atis-assets/logo/atis/atis-mono-black.svg' alt='' width='auto'/>
                        </a>
                        <button onClick={()=>{NavClick()}} className='navbar-close'>
                            <svg className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/'}>Home</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/team'}>Team</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/services'}>Services</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/projects'}>Projects</Link>
                            </li>
                            <li className='mb-1'>
                                <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/testimonials'}>Testimonials</Link>
                            </li>
                            
                        </ul>
                        <div className="mt-4">

                        <Link className={"mx-3 px-6 py-2 font-semibold rounded text-black border-[1px] rounded-[10px] border-green-400 "} href={"/login"}>Login</Link>
                        
                        <Link className={" px-6 py-2 font-semibold rounded text-white bg-green-400 "} href={"/signup"}>Sign Up</Link>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </div>

















        // </div>
    //     <div>
    //         <nav className='relative px-6 py-6 flex justify-between items-center bg-transparent'>
    //             {/* <a className='text-3xl font-bold leading-none' href='#'>
    //                 <img className='h-12' src='atis-assets/logo/atis/atis-mono-black.svg' alt='' width='auto'/>
    //             </a>
    //             <div className='lg:hidden'>
    //                 <button onClick={()=>{NavClick()}} className='navbar-burger flex items-center text-green-600 p-3'>
    //                     <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
    //                         <title>Mobile menu</title>
    //                         <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
    //                     </svg>
    //                 </button>
    //             </div> */}
    //             <div className=" flex justify-between">
    //             <Link className={current==="/"?"text-sm text-black font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={"/"}>Design<span className="text-orange-500">Agency</span></Link>
                
    //             <ul className='flex'>
    //                 <li>
    //                     <Link className={current==="/"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={"/"}>Start</Link>
    //                 </li>
    //                 <li className='text-gray-300'>
                       
    //                 </li>
    //                 <li>
    //                     <Link className={current==="/team"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={"/team"}>Team</Link>
    //                 </li>
    //                 <li className='text-gray-300'>
                   
    //                 </li>
    //                 <li>
    //                     <Link  className={current==="/services"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={'/services'}>Services</Link>
    //                 </li>
    //                 <li className='text-gray-300'>
                        
    //                 </li>
    //                 <li>
    //                     <Link className={current==="/projects"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "} href={'/projects'}>Projects</Link>
    //                 </li>
    //                 <li className='text-gray-300'>

    //                 </li>
    //                 <li>
    //                     <Link className={current==="/testimonials"?"text-sm text-green-600 font-bold":"text-sm text-gray-400 hover:text-gray-500 "}  href={'/testimonials'}>Testimonials</Link>
    //                 </li>
    //             </ul>
    //             <div>
    //             </div>
    //             </div>
    //         </nav>

    //         <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
    //             <div onClick={()=>{NavClick()}} className='navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25' />
    //             <nav className='relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto'>
    //                 <div className='flex items-center mb-8'>
    //                     <a className='mr-auto text-3xl font-bold leading-none' href='#'>
    //                         <img className='h-10' src='atis-assets/logo/atis/atis-mono-black.svg' alt='' width='auto'/>
    //                     </a>
    //                     <button onClick={()=>{NavClick()}} className='navbar-close'>
    //                         <svg className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    //                             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
    //                         </svg>
    //                     </button>
    //                 </div>
    //                 <div>
    //                     <ul>
    //                         <li className='mb-1'>
    //                             <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/'}>Start</Link>
    //                         </li>
    //                         <li className='mb-1'>
    //                             <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/team'}>Team</Link>
    //                         </li>
    //                         <li className='mb-1'>
    //                             <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/services'}>Services</Link>
    //                         </li>
    //                         <li className='mb-1'>
    //                             <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/projects'}>Projects</Link>
    //                         </li>
    //                         <li className='mb-1'>
    //                             <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/testimonials'}>Testimonials</Link>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </nav>
    //         </div>

    // </div>
    );
};

export default SiteNavbar;