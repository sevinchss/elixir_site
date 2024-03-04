import React from 'react'
import { Pages } from '../Pages'

export const Packages = () => {
    return (
        <>
            <Pages text="Packages" bgImage="bg-carousel2" />
            <section className='flex container flex-col mt-10'>
                <div className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='bg-packages h-[400px] bg-cover flex flex-col px-5 justify-center '>
                        <div class=" px-2 lg:px-44 gap-4 py-5 lg:py-16 text-white border border-[#5e5e5e] bg-color)]">
                            <h3 class="mb-2 mb-lg-3 text-uppercase text-[1.728rem] font-Playfair lg:w-[390px] w-full uppercase lg:text-start text-center">               eat,drink &amp; be merry</h3>
                            <p class="uppercase text-[19px] text-center">from $279</p>
                        </div>

                    </div>
                    <div className='bg-packages2 h-[400px] bg-cover flex flex-col px-5 justify-center '>
                        <div class=" px-2 lg:px-44 gap-4 py-5 lg:py-16 text-white border border-[#5e5e5e] bg-color)]">
                            <h3 class="mb-2 mb-lg-3 text-uppercase text-[1.728rem] font-Playfair lg:w-[390px] w-full uppercase lg:text-start text-center">             HOLIDAY HISTORY</h3>
                            <p class="uppercase text-[19px] text-center">FROM $299</p>
                        </div>

                    </div>
                    <div className='bg-packages3 h-[400px] bg-cover flex flex-col px-5 justify-center '>
                        <div class=" px-2 lg:px-44 gap-4 py-5 lg:py-16 text-white border border-[#5e5e5e] bg-color)]">
                            <h3 class="mb-2 mb-lg-3 text-uppercase text-[1.728rem] font-Playfair lg:w-[390px] w-full uppercase lg:text-start text-center">               CHRISTMAS CHEER
                            </h3>
                            <p class="uppercase text-[19px] text-center">from $949</p>
                        </div>

                    </div>
                    <div className='bg-packages4 h-[400px] bg-cover flex flex-col px-5 justify-center '>
                        <div class=" px-2 lg:px-44 gap-4 py-5 lg:py-16 text-white border border-[#5e5e5e] bg-color)]">
                            <h3 class="mb-2 mb-lg-3 text-uppercase text-[1.728rem] font-Playfair lg:w-[390px] w-full uppercase lg:text-start text-center">             TIS THE SEASON</h3>
                            <p class="uppercase text-[19px] text-center">from $309</p>
                        </div>

                    </div>
                    <div className='bg-packages5 h-[400px] bg-cover flex flex-col px-5 justify-center '>
                        <div class=" px-2 lg:px-44 gap-4 py-5 lg:py-16 text-white border border-[#5e5e5e] bg-color)]">
                            <h3 class="mb-2 mb-lg-3 text-uppercase text-[1.728rem] font-Playfair lg:w-[390px] w-full uppercase lg:text-start text-center">   MISTLETOE MAGIC</h3>
                            <p class="uppercase text-[19px] text-center">from $969</p>
                        </div>

                    </div>
                    <div className='bg-packages6 h-[400px] bg-cover flex flex-col px-5 justify-center '>
                        <div class=" px-2 lg:px-44 gap-4 py-5 lg:py-16 text-white border border-[#5e5e5e] bg-color)]">
                            <h3 class="mb-2 mb-lg-3 text-uppercase text-[1.728rem] font-Playfair lg:w-[390px] w-full uppercase lg:text-start text-center">            ROYALTEA PACKAGE</h3>
                            <p class="uppercase text-[19px] text-center">from $269</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
