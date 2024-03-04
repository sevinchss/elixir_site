import React from 'react'
import { FaLinkedin, FaSquareFacebook, FaSquareGooglePlus, FaSquareTwitter } from "react-icons/fa6";
import { Pages } from '../Pages/Pages';
export const Contact = () => {
  return (
    <>
      <Pages text="Contact" bgImage="bg-carousel2" />
      <section className='container p-28 m-auto flex lg:flex-row flex-col gap-20 justify-center items-center mb-10 mt-10 ' >
        <div className='grid grid-flow-row lg:grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-Playfair text-[19.2px] '>Manitoba Office</h3>
            <p className='w-[172px] h-[77px] text-[#7f7f7f]'>121 King's Street,
              Manitoba 1230, Canada
              Cell: +475 3538 3458</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-Playfair text-[19.2px] '>Manitoba Office</h3>
            <p className='w-[172px] h-[77px] text-[#7f7f7f]'>121 King's Street,
              Manitoba 1230, Canada
              Cell: +475 3538 3458</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-Playfair text-[19.2px] '>Socials</h3>
            <div className='flex flex-row gap-3 w-96 '>
              <FaSquareTwitter size={22} />
              <FaLinkedin size={22} />
              <FaSquareFacebook size={22} />
              <FaSquareGooglePlus size={22} />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 container font-Playfair '>
          <input class="form-control" type="text" placeholder="Your Name" required="required" className='p-2 border border-[#e1e1e1] bg-[#fafafa] lg:w-[700px]' />
          <input type="email" name="" id="" placeholder='Email' className='p-2 border border-[#e1e1e1] bg-[#fafafa] lg:w-[700px]' />
          <textarea class="form-control" rows="6" placeholder="Enter your descriptions here..." required="required" style={{ height: '183px' }} className='p-2 border-[#e1e1e1] bg-[#fafafa] lg:w-[700px] border'></textarea>
          <button className='p-4 border hover:bg-black hover:text-white bg-[#240701] text-white duration-300  lg:w-1/4 '>Book Your Stay</button>

        </div>
      </section>
    </>
  )
}
