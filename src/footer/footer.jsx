import React from 'react'
import image from './footer images/logo-light.png';
export const Footer = () => {
  return (
<footer className='bg-[#2a3855]'>
    <div className='container m-auto flex lg:flex-row flex-col justify-around items-center gap-10 p-5'>
<img src={image} alt="" />
<p className='text-[#f3f3f3] font-bold font-sans'>© Copyright 2018 Elixir Inc.</p>
<p className='text-[#f3f3f3]  font-bold font-sans hover:underline'>Designed by Themewagon</p>
    </div>
</footer>
    )
}
