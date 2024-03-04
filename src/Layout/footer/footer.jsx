import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { Fade } from 'react-reveal'
export const Footer = () => {
    return (
        <Fade>
            <footer className=' bg-footerImg mt-10 mx-10 bg-cover mb-10'>
                <div className='container m-auto flex justify-around flex-col items-center  gap-5 mt-10'>
                    <div className='flex   flex-col justify-around items-center text-center  gap-24'>
                        <div className='flex flex-col gap-5 text-white py-16'>
                            <p className=' text-center text-white font-Playfair font-medium text-lg'>Join the Hideaway Newsletters</p>
                            <p className='lg:text-start text-center'>Subscribe to our mailing list to receive updates and promotional offers.</p>
                            <div className='flex lg:flex-row flex-col items-center gap-4'>
                                <input className="form-control border-black text-black border px-5 lg:w-8/12 w-full py-3" type="text" placeholder="Enter Email Here" />
                                <button className='py-3  border border-white bg-white hover:bg-gray-200 text-black  duration-300 lg:w-1/4 w-full '>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex mb-5 lg:flex-row  text-white  flex-col-reverse items-center justify-between gap-10'>
                        <p className='lg:text-start text-center'>© Hideaway 2018 | Template crafted by Themewagon</p>
                        <nav>
                            <ul className='grid grid-flow-row lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8 lg:gap-0 w-full  justify-end text-sm text-white'>
                                <li className='cursor-pointer hover:underline'> Home</li>
                                <li className='cursor-pointer hover:underline'>Book Now</li>
                                <li className='cursor-pointer hover:underline'>Contact</li>
                                <li className='cursor-pointer hover:underline'>Events</li>
                                <li className='cursor-pointer hover:underline'>Policies</li>
                                <li className='cursor-pointer hover:underline'>Term + Conditions</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}
