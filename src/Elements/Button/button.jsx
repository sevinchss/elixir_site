import React from 'react'
import { Pages } from '../../Pages/Pages'
import img from '../images/photo_2024-02-29_22-57-57.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

export const Buttons = () => {
    return (
        <>
            <Pages text="Buttons" span="MODULAR ELEMENTS" bgImage="bg-carousel4" />
            <section className='container flex flex-col font-Playfair gap-6'>
                <h3 className='text-[1.44rem] font-mediumlg:text-start text-center mb-[1.2rem]'>Buttons Colors</h3>
                <p className='text-[#7f7f7f] lg:fw-3/4 lg:text-start text-center'><b className='font-bold text-[#8A8A8A]'>Hideaway</b> uses .btn class for default button style. Customize the color of a button using .btn-* and .btn-outline-*. You can use the following classes.</p>
                <h3 className='text-[1.2rem] font-medium lg:text-start text-center'>Solid Buttons</h3>
                <div className='flex flex-row gap-5 justify-center lg:justify-normal flex-wrap items-center'>
                    <div className='bg-[#6c757d] px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-[#240701] px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-[#2eb7f5] px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-[#37d552] px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-[#ff9500] px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-[#ff2317] px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-black px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='bg-blue-gray-900 px-10 py-3 text-white cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>  </div>
                <img src={img} alt="" className='container m-auto' />
                <h3 className='text-[1.44rem] font-mediumlg:text-start text-center mb-[1.2rem]'>Online Buttons</h3>
                <div className='flex flex-row gap-5 justify-center lg:justify-normal flex-wrap items-center'>
                    <div className='border-[#6c757d] text-[#6c757d] border bg-transparent m px-10 py-3 cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-[#240701] text-[#240701]  border bg-transparent m px-10 py-3  cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-[#2eb7f5] border bg-transparent m px-10 py-3 text-[#2eb7f5]  cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-[#37d552] border bg-transparent m px-10 py-3 text-[#37d552]  cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-[#ff9500] border bg-transparent m px-10 py-3 text-[#ff9500]  cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-[#ff2317] border bg-transparent m px-10 py-3 text-[#ff2317]  cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-black border px-10 py-3 text-black cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>
                    <div className='border-blue-gray-900
                    border  px-10 py-3 text-blue-gray-900 cursor-pointer'>
                        <p>.btn-secondary</p>
                    </div>  </div>
                <img src={img2} alt="" className='container m-auto' />
                <h3 className='text-[1.44rem] font-mediumlg:text-start text-center '>Button Sizes</h3>
                <p className='text-[#7f7f7f] lg:w-3/4 lg:text-start text-center'>Customize the shape of a button using <code className='text-[#e83e8c]'>.btn-xs</code> , <code className='text-[#e83e8c]'>.btn-sm</code> and <code className='text-[#e83e8c]'>.btn-lg</code></p>
                <div className='grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-5'>
                    <div className='py-1 px-5 border-black border-2'>
                        <p>.btn-xs</p>
                    </div>
                    <div className='py-2 px-5 border-black border-2'>
                        <p>.btn-sm</p>
                    </div>
                    <div className='py-3 px-7 border-black border-2'>
                        <p>.btn</p>
                    </div>
                    <div className='py-4 px-10 border-black border-2'>
                        <p>.btn-lg</p>
                    </div>
                </div>
                <img src={img3} alt="" className='container m-auto' />
                <h3 className='text-[1.44rem] font-mediumlg:text-start text-center '>Button Shapes</h3>
                <p className='text-[#7f7f7f] lg:3/4 lg:text-start text-center'>Customize the shape of a button using <code className='text-[#e83e8c]'>.btn-xs</code> , <code className='text-[#e83e8c]'>.btn-sm</code> and <code className='text-[#e83e8c]'>.btn-lg</code></p>
                <div className='flex flex-row  justify-center lg:justify-normal items-center gap-5'>
                    <div className='py-3 px-12 bg-[#240701] text-white '>
                        <p>.btn</p>
                    </div>
                    <div className='py-3 px-12 bg-[#240701] text-white '>
                        <p>.btn-capsule</p>
                    </div>
                </div>
                <img src={img4} alt="" className='container' />
            </section>
        </>
    )
}
