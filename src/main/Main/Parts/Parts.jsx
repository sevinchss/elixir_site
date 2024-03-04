import React from 'react'
import { Fade } from 'react-reveal'
import { Link, NavLink } from 'react-router-dom'
export const Parts = () => {
  return (
    <section className='container  m-auto flex flex-col gap-16 mt-14 ' id='target-down-indicator'>
      <div className='flex lg:flex-row flex-col justify-around font-Playfair gap-6 items-center '>
        <div className='relative flex items-center justify-center bg-gallery bg-cover w-full lg:w-[320px] h-[320px] text-white before:border-y-2 before:border-y-[#ffffffbf] before:absolute before:top-0 before:left-0 before:w-5/6 before:h-5/6 before:m-8 before:scale-x-0 before:transition-all before:duration-300 after:border-x-2 after:border-x-[#ffffffbf] after:absolute after:top-0 after:left-0 after:w-5/6 after:h-5/6 after:m-8 hover:after:scale-y-100 after:scale-y-0 after:transition-all after:duration-300 hover:before:scale-x-100 cursor-pointer'>
          <p className='text-2xl z-40'><Link to={"/gallery"}>Gallery</Link></p>
        </div>
        <div className='relative flex items-center justify-center bg-amenities bg-cover w-full lg:w-[320px] h-[320px] text-white before:border-y-2 before:border-y-[#ffffffbf] before:absolute before:top-0 before:left-0 before:w-5/6 before:h-5/6 before:m-8 before:scale-x-0 before:transition-all before:duration-300 after:border-x-2 after:border-x-[#ffffffbf] after:absolute after:top-0 after:left-0 after:w-5/6 after:h-5/6 after:m-8 hover:after:scale-y-100 after:scale-y-0 after:transition-all after:duration-300 hover:before:scale-x-100 cursor-pointer'>
          <p className='text-2xl z-40'><Link to={"/amenities"}>Amenities</Link></p>
        </div>
        <div className='relative flex items-center justify-center bg-sec_packages bg-cover w-full lg:w-[320px] h-[320px] text-white before:border-y-2 before:border-y-[#ffffffbf] before:absolute before:top-0 before:left-0 before:w-5/6 before:h-5/6 before:m-8 before:scale-x-0 before:transition-all before:duration-300 after:border-x-2 after:border-x-[#ffffffbf] after:absolute after:top-0 after:left-0 after:w-5/6 after:h-5/6 after:m-8 hover:after:scale-y-100 after:scale-y-0 after:transition-all after:duration-300 hover:before:scale-x-100 cursor-pointer'>
          <p className='text-2xl z-40'><Link to={"/packages"}>Packages</Link></p>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col justify-around lg:items-start items-center gap-5 font-Playfair '>
        <Fade left> <p className='text-[28px] w-full lg:text-start text-center'>An <i>inviting</i> escape</p></Fade>
        <Fade right> <div className='flex flex-col lg:items-start items-center gap-8'>
          <p className='lg:w-11/12 w-full lg:text-start text-center'>Crafted with Bootstrap 4, Hideaway is perfectly responsive to every devices available. Thousands of CSS helper classes let you customize this template in any way you want, without writing any code. This is a dummy text that you can change customize as you like with your description.</p>
          <button className='p-4 border border-[#240701] hover:bg-[#240701] hover:text-white duration-300 lg:w-1/4 w-full '>Our History</button>
        </div>
        </Fade>
      </div>





    </section>
  )
}
