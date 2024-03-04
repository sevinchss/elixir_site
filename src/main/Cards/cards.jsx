import React from 'react'
import { Fade } from 'react-reveal'

export const Cards = () => {
    return (
        <section className='container m-auto flex lg:flex-row flex-col justify-around  items-center  gap-5 mt-10'>
            <Fade left><div className='flex flex-col   items-center gap-2'>
                <p className='text-start text-md'>123 Fake Street, Stone Ridge, NY 12345</p>
                <img src="https://prium.github.io/hideaway/assets/images/cta.jpg" alt="" className='lg:w-3/4' />
            </div>
            </Fade>
            <Fade right> <div className='flex flex-col w-full gap-3 items-center '>
                <div className='flex flex-row gap-1 text-md items-center'>
                    <a href="" className='hover:underline'>Instagram</a>
                    <a href="" className='hover:underline'>Facebook</a>
                    <a href="" className='hover:underline'>Twiiter</a>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full flex-wrap justify-around'>
                    <img src="https://prium.github.io/hideaway/assets/images/feature/3.jpg" alt="" className='
                    '/>
                    <img src="https://prium.github.io/hideaway/assets/images/feature/8.jpg" alt="" className='' />
                    <img src="https://prium.github.io/hideaway/assets/images/feature/5.jpg" alt="" className='' />
                    <img src="https://prium.github.io/hideaway/assets/images/feature/1.jpg" alt="" className='' />
                    <img src="https://prium.github.io/hideaway/assets/images/feature/6.jpg" alt="" className='' />
                    <img src="https://prium.github.io/hideaway/assets/images/feature/12.jpg" alt="" className='' />
                </div>
            </div>
            </Fade>
        </section>
    )
}
