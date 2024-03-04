import React from 'react'
import { Fade } from 'react-reveal'
import { Pages } from './Pages'

export const OurHistory = () => {
    return (
        <>
            <Pages text="Our History" bgImage="bg-carousel2" />
            <section className='container flex flex-col justify-around  gap-24 mt-10'>
                <div className='flex lg:flex-row flex-col gap-10 items-center justify-center'>
                    <Fade left>
                        <div className='font-Playfair flex flex-col gap-4  lg:h-[950.5px] h-full'>
                            <h1 className='text-[28px]'>Established in 1985</h1>
                            <p className='lg:w-2/3 w-full text-[#7f7f7f] text-[1.2rem]'>Customize colors, buttons, typography, gaps, spaces and everything for every single screen sizes without writing CSS</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='flex flex-col w-full gap-8'>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base'>Put a description of your company's history here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor quam purus, sed egestas massa feugiat eu. Nunc et congue lorem, quis suscipit eros. Maecenas congue libero non ornare pretium. Donec pulvinar nulla eu ornare lacinia. In euismod facilisis interdum. Phasellus tellus eros, commodo in tincidunt nec, accumsan at augue. Donec ut odio nunc. Ut dapibus non nisi in venenatis. Mauris justo nisl, mattis in pretium nec, volutpat sed ipsum. Maecenas nibh magna, feugiat eu consectetur vitae, bibendum sed risus.</p>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base'>Suspendisse et nulla vitae nulla finibus laoreet. In turpis felis, pretium eget imperdiet non, placerat ac sapien. Sed metus massa, luctus ut mattis vulputate, ullamcorper eu risus. Nunc eleifend enim non tortor maximus, in mattis mauris commodo. Mauris euismod neque nisl, sit amet lacinia purus vestibulum vitae. Aliquam id sapien sit amet ante interdum fringilla sed facilisis nunc. Aliquam erat volutpat. Integer posuere, tellus id sollicitudin hendrerit, nibh justo blandit tellus, et accumsan lorem erat ut eros. Nulla varius cursus erat ac consequat. Nam varius iaculis lectus vitae mattis. Aenean in ornare nibh, in imperdiet elit.</p>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base'>Vivamus augue leo, varius et pharetra ac, imperdiet sit amet diam. Fusce ultricies ante sit amet dolor tempor consequat. Sed luctus, lectus a tincidunt lobortis, ante metus tincidunt leo, laoreet aliquet ex neque in diam. Sed tincidunt velit sit amet faucibus sodales. Fusce convallis ipsum risus. Nullam ac arcu nec justo laoreet iaculis et non diam. Aliquam suscipit felis a arcu laoreet congue. Morbi et enim viverra, varius ipsum a, tincidunt tortor. Fusce porta euismod magna, eu vehicula tellus feugiat ac. Phasellus accumsan mauris sit amet urna pretium varius. Phasellus finibus placerat est a gravida.</p>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base'>Vestibulum sit amet vulputate nibh. Aliquam ornare lectus vel lacus aliquam ullamcorper. Vestibulum at hendrerit diam, at accumsan odio. Nullam rutrum purus sed metus aliquet faucibus. Nulla hendrerit metus et tincidunt tristique. Fusce molestie commodo mauris, vitae vestibulum tortor venenatis non. Pellentesque quis urna a magna bibendum volutpat a at nisl. Suspendisse finibus, tortor id gravida feugiat, nulla leo venenatis nisi, et aliquam quam ligula eget dui. Suspendisse lectus lorem, varius vel dapibus a, vestibulum a eros. Sed sed magna in neque commodo pretium.</p>
                            <p className='lg:w-11/12 w-full text-[#7f7f7f] text-base  lg:text-start text-center'>We look forward to your stay.</p>
                            <div>
                                <p className='font-Playfair text-[23px]  lg:text-start text-center'><i>Brandi</i> and <i>Seith</i></p>
                                <p className='  lg:text-start text-center lg:w-11/12 w-full text-[#7f7f7f] text-base'>Founders, Hideaway Inn</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}
