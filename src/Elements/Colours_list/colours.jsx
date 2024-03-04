import React from 'react'
import { ColoursProps } from './ColoursProps'
import { Pages } from '../../Pages/Pages'

export const Colours = () => {
    return (
        <>
            <Pages text="Colors" span="MODULAR ELEMENTS" bgImage="bg-carousel4" />
            <section className='container m-auto'>
                <div className='grid grid-flow-row xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10'>


                    <ColoursProps colour='#240701' text1='.color-primary' text2='.background-primary' BgColor='#240701' ></ColoursProps>
                    <ColoursProps colour='#2EB7F5' text1='.color-info' text2='.background-info' BgColor='#2EB7F5'></ColoursProps>
                    <ColoursProps colour='#4CD964' text1='.color-success' text2='.background-success' BgColor='#4CD964'></ColoursProps>
                    <ColoursProps colour='#FF9500' text1='.color-warning' text2='.background-warning' BgColor='#FF9500'></ColoursProps>
                    <ColoursProps colour='#FF3B30' text1='.color-danger' text2='.background-danger' BgColor='#FF3B30'></ColoursProps>
                    <ColoursProps colour='#000000' text1='.color-black' text2='.background-black' BgColor='#000000'></ColoursProps>
                    <ColoursProps colour='#0C151A' text1='.color-1' text2='.background-1' BgColor='#0C151A'></ColoursProps>
                    <ColoursProps colour='#2B2B2B' text1='.color-2' text2='.background-2' BgColor='#2B2B2B'></ColoursProps>
                    <ColoursProps colour='#404040' text1='.color-3' text2='.background-3' BgColor='#404040'></ColoursProps>
                    <ColoursProps colour='#555555' text1='.color-4' text2='.background-4' BgColor='#555555'></ColoursProps>
                    <ColoursProps colour='#6A6A6A' text1='.color-5' text2='.background-5' BgColor='#6A6A6A'></ColoursProps>
                    <ColoursProps colour='#7F7F7F' text1='.color-6' text2='.background-6' BgColor='#7F7F7F'></ColoursProps>
                    <ColoursProps colour='#949494' text1='.color-7' text2='.background-7' BgColor='#949494'></ColoursProps>
                    <ColoursProps colour='#BEBEBE' text1='.color-8' text2='.background-8' BgColor='#BEBEBE'></ColoursProps>
                    <ColoursProps colour='#E1E1E1' text1='.color-9' text2='.background-9' BgColor='#E1E1E1'></ColoursProps>
                    <ColoursProps colour='#F2F2F2' text1='.color-10' text2='.background-10' BgColor='#F2F2F2'></ColoursProps>
                    <ColoursProps colour='#FAFAFA' text1='.color-11' text2='.background-11' BgColor='#FAFAFA'></ColoursProps>
                    <ColoursProps colour='#FFFFFF' text1='.color-white' text2='.background-white' BgColor='#F1f1f4'></ColoursProps>

                </div>
            </section>
        </>
    )
}
