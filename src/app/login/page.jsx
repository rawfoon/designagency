import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='container mx-auto px-[5%]  py-20'>
            <h1 className=' text-3xl my-4'>This is Log in</h1>
            <p className=' text-5xl text-green-500 my-10'>working on progress</p>
            <Link href={'/'} className='text-2xl text-white bg-green-400 py-6 px-3 rounded w-52 text-center rounded-xl font-semibold inline-block '>Goto home</Link>
            </div>
            
        </div>
    );
};

export default page;