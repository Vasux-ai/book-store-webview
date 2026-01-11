import React from 'react'
import bannerImage from '../assets/banner.png'
export const Banner = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>

            <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                    <img src={bannerImage}/>
                </div>  

                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Arrivals Books</h1>
                    <p className='mb-10'>
                        it's time to add a new book to your collection with some of the best titles of the year. from classic novels to the latest bestsellers, we have something for everyone.
                    </p>

                    <button className='bg-yellow-500 border-2 border-yellow-500 px-6 py-2 rounded-md font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500'>Subscribe</button>
                </div>

               
            </div>
        </>
    )
}
