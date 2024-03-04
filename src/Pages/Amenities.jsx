import React from 'react'
import { Fade } from 'react-reveal'
import { Pages } from './Pages'

export const Amenities = () => {
    return (
        <>
            <Pages text="Amenities" bgImage="bg-carousel2"/>
            <section className='container flex flex-col justify-around  gap-24 mt-10'>
                <div className=' flex lg:flex-row flex-col gap-10 items-center justify-center'>
                    <Fade left>
                        <div className='  font-Playfair flex flex-col gap-4  lg:h-[1190.5px] h-full'>
                            <h1 className='text-[28px]'>The House</h1>
                            <p className='lg:w-2/3 w-full text-[#7f7f7f] text-[1.2rem]'>Give the design a new look using the CSS classes and components, in no time with no hassles.</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='flex flex-col w-full gap-4'>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base'>Here is a description of your company details. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor quam purus, sed egestas massa feugiat eu. Nunc et congue lorem, quis suscipit eros. Maecenas congue libero non ornare pretium. Donec pulvinar nulla eu ornare lacinia. In euismod facilisis interdum. Phasellus tellus eros, commodo in tincidunt nec, accumsan at augue. Donec ut odio nunc. Ut dapibus non nisi in venenatis. Mauris justo nisl, mattis in pretium nec, volutpat sed ipsum. Maecenas nibh magna, feugiat eu consectetur vitae, bibendum sed risus.</p>
                            <div className='flex flex-col gap-4  w-full'>
                                <img src="https://prium.github.io/hideaway/assets/images/house-1.jpg" alt="" />
                                <div className='flex lg:flex-row flex-col lg:w-11/12 w-full gap-4'>
                                    <img src="https://prium.github.io/hideaway/assets/images/feature/8.jpg" alt="" className='lg:w-[246px] w-full ' />
                                    <img src="https://prium.github.io/hideaway/assets/images/feature/9.jpg" alt="" className='lg:w-[246px] w-full ' />
                                    <img src="https://prium.github.io/hideaway/assets/images/feature/10.jpg" alt="" className='lg:w-[246px] w-full' />
                                </div>
                                <p className='lg:w-11/12 w-full  text-[#7f7f7f] text-base'>Vestibulum sit amet vulputate nibh. Aliquam ornare lectus vel lacus aliquam ullamcorper. Vestibulum at hendrerit diam, at accumsan odio. Nullam rutrum purus sed metus aliquet faucibus. Nulla hendrerit metus et tincidunt tristique. Fusce molestie commodo mauris, vitae vestibulum tortor venenatis non. Pellentesque quis urna a magna bibendum volutpat a at nisl. Suspendisse finibus, tortor id gravida feugiat, nulla leo venenatis nisi, et aliquam quam ligula eget dui. Suspendisse lectus lorem, varius vel dapibus a, vestibulum a eros. Sed sed magna in neque commodo pretium.</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='flex lg:flex-row flex-col gap-10 items-center justify-center'>
                    <Fade left> <div className='font-Playfair flex flex-col gap-4  lg:h-[1190.5px] h-full'>
                        <h1 className='text-[28px]'>The Property</h1>
                        <p className='lg:w-2/3 w-full text-[#7f7f7f] text-[1.2rem]'>Hideaway is responsive from iPhone to iMac and anything in between, with latest Grid layout.</p>
                    </div>
                    </Fade>
                    <Fade right>
                        <div className='flex flex-col w-full gap-4'>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base'>Write the description of your company here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor quam purus, sed egestas massa feugiat eu. Nunc et congue lorem, quis suscipit eros. Maecenas congue libero non ornare pretium. Donec pulvinar nulla eu ornare lacinia. In euismod facilisis interdum. Phasellus tellus eros, commodo in tincidunt nec, accumsan at augue. Donec ut odio nunc. Ut dapibus non nisi in venenatis. Mauris justo nisl, mattis in pretium nec, volutpat sed ipsum. Maecenas nibh magna, feugiat eu consectetur vitae, bibendum sed risus.</p>
                            <div className='flex flex-col gap-4  w-full'>
                                <img src="https://prium.github.io/hideaway/assets/images/house-1.jpg" alt="" />
                                <div className='flex lg:flex-row flex-col lg:w-11/12 w-full gap-4'>
                                    <img src="https://prium.github.io/hideaway/assets/images/feature/8.jpg" alt="" className='lg:w-[246px] w-full ' />
                                    <img src="https://prium.github.io/hideaway/assets/images/feature/9.jpg" alt="" className='lg:w-[246px] w-full ' />
                                    <img src="https://prium.github.io/hideaway/assets/images/feature/10.jpg" alt="" className='lg:w-[246px] w-full' />
                                </div>
                                <p className='lg:w-11/12 w-full  text-[#7f7f7f] text-base'>Vestibulum sit amet vulputate nibh. Aliquam ornare lectus vel lacus aliquam ullamcorper. Vestibulum at hendrerit diam, at accumsan odio. Nullam rutrum purus sed metus aliquet faucibus. Nulla hendrerit metus et tincidunt tristique. Fusce molestie commodo mauris, vitae vestibulum tortor venenatis non. Pellentesque quis urna a magna bibendum volutpat a at nisl. Suspendisse finibus, tortor id gravida feugiat, nulla leo venenatis nisi, et aliquam quam ligula eget dui. Suspendisse lectus lorem, varius vel dapibus a, vestibulum a eros. Sed sed magna in neque commodo pretium.</p>
                            </div>

                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}
