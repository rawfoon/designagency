
import { FaArrowRight, FaChartLine, FaRegHeart } from "react-icons/fa6";
import { PiBagBold } from "react-icons/pi";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
        throw new Error("WorkList Calling Fail");
    }
    return res.json();
 }



const WorkList = async () => {
    const data = await getData()
    // console.log(data[0].des);
    
    return (
        <div className="">
           <div className="container mx-auto px-4">
           <h3 className=" text-xl text-[#20B15A] font-semibold">Work List</h3>
           <h3 className="text-3xl text-black font-semibold my-4">We provide the Perfect Solution <br/>to your business growth</h3>
           <div className="flex my-20">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4 mx-6">
                <FaChartLine className="bg-[#D7F5DC] block w-24 h-24 p-8 rounded-2xl"/>
                <h3 className=" text-2xl my-4 font-semibold">{data[0].title}</h3>
                <p className=" text-lg mb-6">{data[0].des}</p>
                <a className="px-4 py-3 rounded hover:bg-green-100  " href="/#">Learn more <FaArrowRight className="inline" /></a>
                
                
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4 mx-6">
                <FaRegHeart className="bg-[#D7F5DC] block w-24 h-24 p-8 rounded-2xl"/>
                <h3 className=" text-2xl my-4 font-semibold">{data[1].title}</h3>
                <p className=" text-lg mb-6">{data[1].des}</p>
                <a className="px-4 py-3 rounded hover:bg-green-100  " href="/#">Learn more <FaArrowRight className="inline" /></a>
                
                
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4 mx-6">
                <PiBagBold className="bg-[#D7F5DC] block w-24 h-24 p-8 rounded-2xl"/>
                <h3 className=" text-2xl my-4 font-semibold">{data[2].title}</h3>
                <p className=" text-lg mb-6">{data[2].des}</p>
                <a className="px-4 py-3 rounded hover:bg-green-100  " href="/#">Learn more <FaArrowRight className="inline" /></a>
                
                
            </div>
           </div>
           </div>
        </div>
    );
};

export default WorkList;