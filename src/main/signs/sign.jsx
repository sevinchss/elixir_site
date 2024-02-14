import React from 'react'
import image from '../signs/sign images/img.jpg';
import image2 from '../signs/sign images/img2.jpg';
import image3 from '../signs/sign images/img3.jpg';
import image4 from '../signs/sign images/img4.jpg';
export const SignForm = () => {
    return (
        <section className='bg-[#3d4c6f] mt-8 pb-14 '>
            <div className='container m-auto flex lg:flex-row flex-col gap-16 items-center '>
                <div className='flex flex-col bg-[#2a3855] md:px-10 gap-2 md:py-10 p-3 mt-10 rounded-lg '>
                    <h2 className='text-white text-2xl font-bold font-mont lg:text-start text-center'>Sign up for email alerts</h2>
                    <p className='text-white text-sm  font-mont  lg:text-start text-center'>Stay current with our latest insights</p>
                    <div className='flex lg:flex-row flex-col items-center gap-5 mt-3'>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Here" required />
                        <button class="bg-yellow-500 border-yellow-500  text-gray-900 text-sm rounded-lg lock w-full px-14 py-3 font-medium  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >Submit</button>

                    </div>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-36 gap-10 items-center'>
                    <div className='flex flex-col gap-2 text-md pt-10'>
                        <p className='text-white font-bold font-sans'>Contact Us</p>
                        <p className='text-white font-bold font-sans'>FAQ</p>
                        <p className='text-white font-bold font-sans'>Privacy Policy</p>
                        <p className='text-white font-bold font-sans'>Terms of Use</p>
                        <p className='text-white font-bold font-sans'>Global Office</p>
                        <p className='text-white font-bold font-sans'>Local Office</p>
                    </div>
                    <div className='flex flex-col gap-2 text-md pt-8'>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={image} alt="" className='w-[40px] h-[40px]'/>
                            <p className='text-white font-bold font-sans'>Linkedin</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={image2} alt=""  className='w-[40px] h-[40px]' />
                            <p className='text-white font-bold font-sans'>Twitter</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={image3} alt="" className='w-[40px] h-[40px]' />
                            <p className='text-white font-bold font-sans'>Facebook</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={image4} alt=""  className='w-[40px] h-[40px]'/>
                            <p className='text-white font-bold font-sans'>Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
