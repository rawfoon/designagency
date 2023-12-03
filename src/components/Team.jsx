import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TeamList");
    if(!res.ok){
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}

const Team = async () => {
    const data = await getData();
    // console.log(data[1]);
    return (
        <div>
            <section className="container mx-auto pb-16 px-[5%] md:px-0">
                <div className="max-w-[450px] mt-14">
                    <h3 className="text-[#20B15A] text-xl font-medium">OUR TEAM MEMBER</h3>
                    <h1 className=" text-3xl font-semibold mt-5 ">Check our awesome team members</h1>
                </div>
                <div className=" mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-3 px-[3%]  justify-items-center">
                    {data.map((item,i)=>{
                        return(
                            <div key={i} className=" text-center  border rounded-2xl shadow-xl">
                                <img src={item.image} alt="" className=" rounded-t-2xl " />
                                <div className="flex mx-auto justify-center  h-12 w-36 text-xl text-[#737588] pt-3 rounded-[25px] gap-3 translate-y-[-170%]  bg-[#E3E3E3]">
                                    <a target="_blank" href={item.facebook}><FaFacebookF/></a> <span className=" translate-y-[-5px]" >|</span>
                                    <a target="_blank" href={item.twitter} ><FaTwitter/></a><span className=" translate-y-[-5px]">|</span>
                                    <a target="_blank" href={item.instagram}><FaInstagram/></a>
                                </div>
                                <h1 className="text-3xl font-semibold translate-y-[-70%] ">{item.name}</h1>
                            </div>
                        )
                    })}
                </div>

            </section>
            
        </div>
    );
};
export default Team;