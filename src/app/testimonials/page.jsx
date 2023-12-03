import Testimonial from "@/components/Testimonial";


const Page = () => {
    return (
        <>
        <div className="bg-[#F8F9FC]" >
        <div className="container mx-auto pb-20 ">
        <div className="font-semibold ">
            <h1 className=" text-[2.5rem] pt-20">Testimonial List</h1>
            <h5>Home <span>{">"}</span> <span className="text-[#20B15A]">Testimonial List</span></h5>
        </div>
        </div>
    </div>
            <Testimonial/>
        </>
    );
};

export default Page;