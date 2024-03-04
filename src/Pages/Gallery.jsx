import React from 'react'
import { Fade } from 'react-reveal'
import { Pages } from './Pages'

export const Gallery = () => {
    return (
        <>
            <Fade>
                <Pages text="Gallery" bgImage="bg-carousel1"></Pages>
            </Fade >
            <section className='px-10 flex flex-col gap-6 mt-10'>
                <div className='container'>
                <div className='flex lg:flex-row flex-col lg:gap-0 gap-4 '>
                    <img src="https://prium.github.io/hideaway/assets/images/feature/8.jpg" alt="" className=' lg:w-4/6 w-full lg:mr-5 lg:h-3/4' />
                    <div className='lg:ml-5 flex flex-col lg:gap-10 gap-4'>
                        <img src="https://prium.github.io/hideaway/assets/images/feature/2.jpg" alt="" className='lg:h-1/2' />
                        <img src="https://prium.github.io/hideaway/assets/images/feature/3.jpg" className="lg:h-1/2" />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 lg:w-1/2 mt-5'>
                    <img src="https://prium.github.io/hideaway/assets/images/feature/4.jpg" alt="" />
                    <img src="https://prium.github.io/hideaway/assets/images/feature/5.jpg" alt="" />
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:gap-0 mt-4'>
                    <img src="https://prium.github.io/hideaway/assets/images/feature/1.jpg" alt="" className=' lg:w-4/6 lg:mr-5 mr-0 lg:h-3/4' />
                    <div className='lg:ml-5 flex flex-col lg:gap-10 gap-4 mt-4 lg:mt-0'>
                        <img src="https://prium.github.io/hideaway/assets/images/feature/6.jpg" alt="" className='lg:h-1/2' />
                        <img src="https://prium.github.io/hideaway/assets/images/feature/7.jpg" className="lg:h-1/2" />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 lg:w-1/2 mt-5'>
                    <img src="https://prium.github.io/hideaway/assets/images/feature/9.jpg" alt="" />
                    <img src="https://prium.github.io/hideaway/assets/images/feature/10.jpg" alt="" />
                </div>
                </div>
            </section>
        </>
    )
}
