async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("AllProject List Calling Fail");
    }
    return res.json();
}


const Testimonial = async () => {
    const data = await getData();
    // console.log(data);
    return (
        <div>
            <section className="container mx-auto pb-16 px-[5%] md:px-0">
                <div className="max-w-[450px] mt-14">
                    <h3 className="text-[#20B15A] text-xl font-medium">TESTIMONIAL LIST</h3>
                    <h1 className=" text-3xl font-semibold mt-5 ">Better Agency/SEO Solution At Your Fingertips</h1>
                </div>

                <div className=" py-10 mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item,i)=>{
                        return(
                            <div key={i} className="  text-center p-4 shadow-2xl rounded-2xl">
                                <img src={item?.image} className=" rounded-3xl mx-auto mb-10 max-w-[200px] max-h-[200px]" alt="" />
                                <p className="text-[#9D9D9D] mb-6">{item.msg}</p>
                                <h1 className=" text-2xl font-semibold mb-2">{item.name}</h1>
                                <h3>{item.designation}</h3>

                                
                                

                            </div>
                        )
                    })}
                </div>

                </section>
            
        </div>
    );
};

export default Testimonial;