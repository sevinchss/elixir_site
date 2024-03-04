import React from 'react'
import { Pages } from '../../Pages/Pages'
import img from './Layout images/img.jpg' 

export const LayoutHelper = () => {
    return (
        <>
            <Pages text="Layout helpers" span="MODULAR ELEMENTS" bgImage="bg-carousel4" />
            <section className='container m-auto flex flex-col gap-10'>
                <h3 className='text-[1.44rem] font-medium font-Playfair'>Map color schemes</h3>
                <p className='text-[#7f7f7f] w-2/3 flex gap-3'>Easily make an element as wide or as tall (relative to its parent) with our width and height utilities. Includes support for 25%, 50%, 75%, and 100% by default.
                </p>
                <div className='flex flex-col gap-4'>
                    <div className='w-full py-3 flex items-center font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.w-100</p></div>
                    <div className='w-3/4 py-3 flex items-center font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.w-75</p></div>
                    <div className='w-1/2 py-3 flex items-center font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.w-50</p></div>
                    <div className='w-1/4 py-3 flex items-center font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.w-25</p></div>
                </div>
                <div className='flex flex-row gap-4 items-start h-full'>
                    <div className='h-[250.400px] w-1/3 py-3 flex  font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'>
                        <p className='px-2'>.h-100</p>
                    </div>
                    <div className='h-[183.400px] w-1/3 py-3  font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.h-75</p></div>
                    <div className='h-[116.400px] w-1/3 py-3 flex font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.h-50</p></div>
                    <div className='h-[49.400px] w-1/3 py-3 flex  font-serif bg-[#fafafa] border-dotted border-2 border-black text-[#e83e8c]'><p className='px-2'>.h-25</p></div>
                </div>
                <h3 className='text-[1.44rem] font-medium font-Playfair'>Special height classes</h3>
                <img src={img} alt="" />
            </section>
        </>
    )
}
