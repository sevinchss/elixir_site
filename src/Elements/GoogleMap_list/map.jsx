import React from 'react'
import { Pages } from '../../Pages/Pages'

export const Map = () => {
  return (
    <>
      <Pages text="Google Map" span="MODULAR ELEMENTS" bgImage="bg-carousel4" />
      <section className='container flex flex-col gap-6'>
        <img src="https://a.storyblok.com/f/117609/2028x1242/eb3996dc4a/integrating-google-maps-react.png" alt="" />
        <h3 className='text-[1.44rem] font-medium font-Playfair'>Map color schemes</h3>
        <p className='text-[#7f7f7f] w-3/4'>Change the value of<code className='text-[#e83e8c]'>data-theme=''</code>to any of the followings </p>
        <ul className=' text-black font-Playfair text-base '>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code> Default</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code>  Gray</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code>  Midnight</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code>  Hopper </li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code>  Beard</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code> AssassianCreed</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code> SubtleGray</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code> Tripitty</li>
          <li className='text-[#e83e8c]'><code className='text-black'>•</code> Silver</li>
        </ul>
        <h3 className='text-[1.44rem] font-medium font-Playfair '>Example</h3>
        <p className='text-[#7f7f7f] w-3/4'>With <code className='text-[#e83e8c]'> AssassianCreed</code> scheme</p>
        <img src="https://staticmapmaker.com/img/google-placeholder.png" alt="" className='container h-full w-full' />

      </section>
    </>

  )
}
