'use client'

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"

const Subscribe = () => {

    let [FormValue,SetFormValue]=useState({email:""})
    // const handleEmail= (e)=>{
    //     e.preventDefault()
    //     console.log(e.target.email.value);
    // }
    // const inputOnChange= (email, value)=>{
    //     SetFormValue(`${email}:${value}`)
        

    // }
    const inputOnChange = (name,value) => {
        SetFormValue(
            FormValue=>({
                ...FormValue,
                [name]:value
            })
        )
    }
    const FormSubmit=async (e) => {
        e.preventDefault();
        if (FormValue.email.length === 0) {
            toast.error('Email Required');
        
        } else {
            const rawResponse = await axios.post('/api/contact',FormValue);
            // toast.success('success')

        }
    }

    return (
        <div className="mx-auto my-10 pb-10 px-[5%] w-full flex flex-col justify-center mt-20">
            <div className="mx-auto max-w-[516px]">
            <div className="text-center">
                <h3 className="text-xl text-[#20B15A] font-medium my-5">SUBSCRIBE</h3>
                <h1 className=" text-3xl font-semibold">Subscribe To Get The Latest News About Us</h1>
            </div>
            <p className=" text-base font-medium text-[#8B8B8B] px-[2%] md:px-0 mt-3">Please Drop Your Email Below To Get Daily Update About What We Do</p>
            </div>
           <div className="max-w-[550px]  mx-auto my-3 border border-[#272727] rounded-2xl">
           <form onSubmit={FormSubmit} action="" className=" grid grid-cols-5 p-1  w-full  ">
           <input   className="  px-3 block w-full col-span-3 md:col-span-4 bg-gray-50 rounded leading-loose" value={FormValue.email} onChange={(e)=>{inputOnChange('email',e.target.value)}} type="email" name="email" placeholder="hello@example.com"/>

<button type="submit" className=" py-3 px-5 col-span-2 md:col-span-1 rounded-[14px] text-base bg-[#F55F1D] hover:bg-[#ff6422] text-white font-bold leading-normal transition duration-200">
                           Subcribe
                        </button>
</form>
           </div>
           <Toaster position="bottom-center"/>
            
        </div>
    );
};

export default Subscribe;