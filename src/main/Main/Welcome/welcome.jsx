import React from 'react'
import { Fade, Flip } from 'react-reveal'

export const Welcome = () => {
    return (
        <section className='mt-10 bg-cta bg-cover mx-10'>
            <div className='container'>
                <Fade>
                <div className='flex flex-col bg-transparent lg:h-[700px] h-full w-full lg:gap-8 gap-4 font-Playfair items-center relative text-white justify-center'>
                    <p className='lg:text-[58px] lg:py-0 py-6 text-2xl w-full text-center'>Eagerly <i>waiting</i> to welcome you.</p>
                    <button className='p-4 border border-white hover:bg-white hover:text-black duration-300  lg:w-1/4 mb-6'>Book Your Stay</button>
                </div>
                </Fade>
            </div>
        </section>
    )
}
