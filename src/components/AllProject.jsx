async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("AllProject List Calling Fail");
    }
    return res.json();
}


const AllProject = async () => {
    const data = await getData();
    // console.log(data);
    return (
        <div>
            <section className="container mx-auto pb-16">
                <div className="max-w-[450px] mt-14">
                    <h3 className="text-[#20B15A] text-xl font-medium">OUR ALL SERVICES</h3>
                    <h1 className=" text-3xl font-semibold mt-5 ">We Provide BestWeb design services</h1>
                </div>

                <div className=" py-10 mt-5 grid md:grid-cols-2 gap-8">
                    {data.map((item,i)=>{
                        return(
                            <div key={i} className=" p-4 shadow-2xl rounded-2xl">
                                <img src={item?.image} className=" rounded-3xl" alt="" />
                                <h1 className=" text-2xl font-semibold">{item.title}</h1>

                                
                                

                            </div>
                        )
                    })}
                </div>

                </section>
            
        </div>
    );
};

export default AllProject;