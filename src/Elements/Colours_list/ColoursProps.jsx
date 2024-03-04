import React from 'react'

export const ColoursProps = ({BgColor,colour, text1, text2}) => {
    return (
        <>
           <div className='flex lg:flex-row flex-col gap-3 items-center font-Playfair'>
                        <div className='border rounded-md  px-6 py-6 font-Playfair text-white' style={{backgroundColor: BgColor}} >
                            <p>{colour}</p>
                        </div>
                        <div className='flex flex-col text-[#e83e8c]'>
                            <p>{text1}</p>
                            <p>{text2}</p>
                        </div>
                    </div>
        </>
    )
}
