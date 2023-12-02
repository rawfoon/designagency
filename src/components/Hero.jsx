import Link from "next/link";
import Brands from "./Brands";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    console.log(data);
    return (
        <div className="bg-[#D7F5DC] translate-y-[-70px] pb-10">
            <section className='relative '>
                <div className='relative pt-24 lg:pt-40 pb-20 z-10'>
                    <div className='container mx-auto px-4'>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full lg:w-1/2 px-4  lg:mb-0 flex items-center'>
                                <div className='w-full text-center lg:text-left'>
                                    <div className='max-w-md mx-auto lg:mx-0'>
                                        <h2 className='mb-3 text-4xl lg:text-5xl font-bold font-heading'>
                                            <span>
                                            {data.title}
                                            </span>
                                            
                                        </h2>
                                        <p>
                                        {data.description}
                                        </p>
                                    </div>
                                    <div className='max-w-sm mx-auto lg:mx-0'>
                                        
                                        <div>
                                            <Link
                                                className='inline-block my-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-[10px] transition duration-200'
                                                href=''>Get Started</Link>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 px-4'>
                                <div className='flex flex-wrap lg:mb-4 lg:ml-6'>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={data['image1']} alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src={data['image2']} alt=''/>
                                </div>
                                <div className='flex flex-wrap lg:mb-4 lg:mr-6'>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={data['image4']} alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src={data['image3']} alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Brands/>
        </div>
    );
};

export default Hero;