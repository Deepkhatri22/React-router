import React from 'react'
import Carousel from './Carousel'
import Hero from './Hero'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='dark:bg-gray-900 pb-10'>

            <div className='py-10 flex justify-center items-center '>
                <div className='w-[200vh] container mx-auto'>
                    <Carousel />
                </div>
            </div>
            <div className='h-[1px] w-full bg-gray-400 mb-10'></div>
            <Hero />

        </div>
    )
}

export default Home
