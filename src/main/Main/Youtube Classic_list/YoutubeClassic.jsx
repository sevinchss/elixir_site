import React from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { Parts } from '../Parts/Parts'
import { Welcome } from '../Welcome/welcome'
import { Cards } from '../../Cards/cards'

export const YoutubeClassic = () => {
    return (
        <>
            <Fade>
                <div className='px-10 py-10'>
                    <div
                        className="h-[400px] w-full bg-sec_youtube bg-cover bg-no-repeat flex items-center justify-center">
                        <Fade top>
                            <div className='text-white flex-col flex text-center items-center justify-center'>
                                <p className='text-center'> WEST VIRGINIA / UNITED STATES</p>
                                <p className='text-white font-Playfair italic text-[58px]'>The Hideaway Inn</p>
                            </div>
                        </Fade>
                    </div>

                    <Link className="down-indicator" to="#target-down-indicator"><FaAlignRight /></Link>

                </div>


            </Fade>
            <Parts />
            <Welcome />
            <Cards />
        </>
    )
}
