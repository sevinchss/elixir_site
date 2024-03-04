import React from 'react'
import { Gallery } from './Gallery'
import { Amenities } from './Amenities'
import { Fade } from 'react-reveal'


export const Pages = ({ text, bgImage, span }) => {
    return (
        <>
        <div className='px-10'>
            <div
                className={`${bgImage} min-h-[400px] 2xl:h-[50vh] brightness-95 my-10 w-full bg-cover bg-no-repeat bg-center flex items-center justify-center`}>
                <div className='flex flex-col items-center containerF'>
                    <Fade top>
                        <span className='text-white'>{span ? span : null}</span>
                    </Fade>
                    <Fade top >
                        <p className='text-white font-Playfair text-[58px] h-max'>{text}</p>
                    </Fade>
                </div>
            </div >
            </div>
        </>

    )
}
