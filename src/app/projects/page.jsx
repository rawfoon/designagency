import AllProject from "@/components/AllProject";
import Subscribe from "@/components/Subscribe";


const Page = () => {
    return (
        <>
        <div className="bg-[#F8F9FC]" >
            <div className="container mx-auto pb-20 ">
            <div className="font-semibold ">
                <h1 className=" text-[2.5rem] pt-20">All Project</h1>
                <h5>Home <span>{">"}</span> <span className="text-[#20B15A]">All Project</span></h5>
            </div>
            </div>
            <AllProject/>
            <Subscribe/>
            
        </div>
            
        </>
    );
};

export default Page;