import { Carousel } from '@material-tailwind/react'
import React from 'react'
import { FaAlignRight, FaChevronDown } from 'react-icons/fa'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { Welcome } from '../Welcome/welcome'
import { Parts } from '../Parts/Parts'
import { Cards } from '../../Cards/cards'

export const YoutubeBg = () => {
    return (
        <>
            <Fade>
                <div className='px-10 py-10'>
                    <div
                        className="h-[600px] flex-col gap-8 w-full brightness-[0.7] bg-sec_youtube bg-cover bg-no-repeat flex items-center justify-center">
                        <Fade top >
                            <div className='text-white flex-col flex text-center items-center justify-center'>
                                <p className='text-center'> WEST VIRGINIA / UNITED STATES</p>
                                <p className='text-white font-Playfair italic text-[58px]'>The Hideaway Inn</p>

                            </div>
                            <div className="">
                                <a className="down-indicator absolute transition-all duration-300 text-white flex" href="#target-down-indicator" ><FaChevronDown size={20} />
                                </a></div>
                        </Fade>
                    </div>


                </div>


            </Fade>
            <Parts />
            <Welcome />
            <Cards />
        </>
    )
}
