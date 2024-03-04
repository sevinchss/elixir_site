import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Pages } from '../../Pages/Pages'
import img from './grid images/img.jpg' 
import img2 from './grid images/img2.jpg' 
import img3 from './grid images/img3.jpg' 
import img4 from './grid images/img4.jpg' 
import img5 from './grid images/img5.jpg' 
export const Grid = () => {
    return (
        <>
            <Pages text="Grid system" span="MODULAR ELEMENTS" bgImage="bg-carousel4" />
            <section className='container flex flex-col gap-4'>
                <h3 className='text-[1.44rem] font-medium font-Playfair lg:text-start text-center '>Example</h3>
                <p className='text-[#7f7f7f] w-full lg:text-start text-center flex gap-3'>We use bootstrap 4 grid system. For more details see
                    <div className='flex flex-row gap-1 items-center lg:text-start text-center'>
                        <a href="https://getbootstrap.com/docs/4.0/layout/grid/" className='text-black hover:underline'>Documentation</a>
                        <FaArrowRightLong color='black' />

                    </div>
                    </p>
                    <img src={img} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
       
            </section>
        </>
    )
}
