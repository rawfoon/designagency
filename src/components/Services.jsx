async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}


const Services = async() => {
    const data = await getData();
    // console.log(data);
    return (
        <div>
            <section className="container mx-auto pb-16">
                <div className="max-w-[450px] mt-14">
                    <h3 className="text-[#20B15A] text-xl font-medium">OUR ALL SERVICES</h3>
                    <h1 className=" text-3xl font-semibold mt-5 ">We Provide BestWeb design services</h1>
                </div>

                <div className=" py-10 mt-5 grid md:grid-cols-2 gap-10">
                    {data.map((item,i)=>{
                        return(
                            <div key={i} className=" p-4 shadow-2xl rounded-2xl">
                                <h1 className=" text-2xl font-semibold">{item.title}</h1>
                                <p className=" text-base text-[#9D9D9D]">{item.des}</p>
                                <div className="grid grid-cols-3 gap-3">
                                    <img src={item.image1} className=" rounded col-span-2 " alt="" />
                                    <img src={item.image2} className=" rounded col-span-1" alt="" />
                                    <img src={item.image3} className=" rounded col-span-1" alt="" />
                                    <img src={item.image4} className=" rounded col-span-2" alt="" />
                                </div>
                                

                            </div>
                        )
                    })}
                </div>

                </section>
            
        </div>
    );
};

export default Services;