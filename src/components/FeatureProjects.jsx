async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("FeaturedProjects Calling Fail");
    }
    return res.json();
}

const FeatureProjects = async () => {
    const data = await getData()

    const firstProject = data[0]
    const fourElement = data.slice(1,5)
    // console.log(firstProject);

    return (
        <div className=" bg-[#F0FDF4]">  
            <div className="container mx-auto py-10 px-4">
            <h3 className=" text-xl text-[#20B15A] font-semibold">Work List</h3>
           <h3 className="text-3xl text-black font-semibold my-4">We provide the Perfect Solution <br/>to your business growth</h3>

   
            <div className="w-full md:1/2  grid md:grid-cols-2 gap-5 py-10">
                <div className=" w-full">
                    <img className=" rounded-3xl mb-5" src={firstProject.image} alt="" />
                    <p className=" text-xs font-normal mb-3">{firstProject.remark} - {firstProject.created_at.slice(0,10)}</p>

                    <h3 className=" text-2xl font-bold text-[#1E1F4B]">{firstProject.title}</h3>

                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {fourElement.map((item,i)=>{
                        return(
                            <div key={i} className="">
                    <img className=" rounded-3xl mb-4" src={item.image} alt="" />
                    <p className=" text-xs font-normal mb-3">{item.remark} - {item.created_at.slice(0,10)}</p>

                    <h3 className=" text-2xl font-bold text-[#1E1F4B]">{item.title}</h3>

                </div>
                         
                        )

                    })}

                </div>

            </div>

           
            </div>
            
        </div>
    );
};

export default FeatureProjects;