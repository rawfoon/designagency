// 'use client'
// import { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa6";

// async function getData(){
//     const res=await fetch(process.env.BASE_URL+"api/WorkList");
//     if(!res.ok){
//         throw new Error("WorkList Calling Fail");
//     }
//     return res.json();
//  }

async function getData(){
    const res= await fetch(process.env.BASE_URL+"api/WorkList")
    const data = await res.json()
    return data
}

const WorkList = () => {
    const data =  getData()
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const result = await getData();
    //       setData(result);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       // Handle error state if needed
    //     }
    //   };
  
    //   fetchData();
    // }, []);
    // console.log(data);
    return (
        <div className="h-[500px]">
           <div className="container mx-auto px-4">
           <h3 className=" text-xl text-[#20B15A] font-semibold">Work List</h3>
           <h3 className="text-3xl text-black font-semibold mt-4">We provide the Perfect Solution <br/>to your business growth</h3>
           <div>
            <div>
                <FaChartLine className="bg-[#D7F5DC] block w-24 h-24 p-8 rounded-2xl"/>
                {/* <h3>{data[0].title}</h3> */}
                {/* <p>{data[0].des}</p> */}
                
                
            </div>
           </div>
           </div>
        </div>
    );
};

export default WorkList;