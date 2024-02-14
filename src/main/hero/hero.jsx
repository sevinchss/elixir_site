import image3 from '../hero/hero images/header-5.jpg';
import image2 from '../hero/hero images/header-1.jpg';
import image from '../hero/hero images/header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Hero = () => {
    return (
        <Swiper autoplay = {true}
        loop = {true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                {/* <div className='container m-auto'> */}
                <section className=' mt-0 '>
                    <div className='  flex justify-between  items-center relative h-full lg:h-[700px] w-full'>

                        <img src={image} alt="" className='absolute bg-cover ' />

                        <div className='relative flex flex-col gap-10 mt-16 mb-10  lg:p-96 lg:pt-64'>
                            <h3 className='lg:text-5xl text-3xl font-bold font-mont text-[#2a3855] lg:text-start text-center'>Helping Leaders</h3>
                            <p className='text-[#2a3855] font-mont font-medium text-lg w-full lg:text-start text-center lg:w-3/4'>We look forward to help you in taking your company to new height.</p>
                            <div className='hidden lg:flex lg:flex-row flex-col items-center gap-5'>
                                <button className='px-6 bg-[#2a3855] text-white rounded-md py-3 text-center absolute hover:bg-[#1a2334] duration-300'>
                                    <div className='flex flex-row gap-3 items-center font-medium font-sans'>
                                        <p>Read more   </p>
                                        <FontAwesomeIcon icon={faArrowRight} style={{ position: 'relative' }} />

                                    </div>
                                </button>
                                <button className='px-6 bg-yellow-600 border border-yellow-600 duration-300 hover:border-yellow-800 rounded-md text-[#2a3855] font-meidum font-sans py-3 text-center absolute mx-44'>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <p>Read more   </p>
                                        <FontAwesomeIcon icon={faArrowRight} style={{ position: 'relative' }} />

                                    </div>
                                </button>

                            </div>

                        </div> </div>
                </section>
                {/* </div> */}

            </SwiperSlide>
            <SwiperSlide>  <section className='mt-0  '>
                <div className='  flex justify-between  items-center relative h-full lg:h-[700px] w-full'>

                    <img src={image2} alt="" className='absolute bg-cover ' />

                    <div className='relative flex flex-col gap-10 lg:p-96  mt-16 mb-10 pt-0  lg:pt-64'>
                        <h3 className='text-3xl lg:text-5xl font-bold font-mont text-[#2a3855] lg:text-start text-center'>Expert Consultants</h3>
                        <p className='text-[#2a3855] font-mont font-medium text-lg lg:w-3/4 w-full lg:text-start text-center'>Over 10 years of experience in helping clients finding comprehensive solutions.</p>
                        <div className='hidden lg:flex flex-col lg:flex-row items-center gap-5'>
                            <button className='px-6 bg-[#2a3855] text-white rounded-md py-3 text-center absolute hover:bg-[#1a2334] duration-300'>
                                <div className='flex flex-row gap-3 items-center font-medium font-sans'>
                                    <p>Read more   </p>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ position: 'relative' }} />

                                </div>
                            </button>
                            <button className='px-6 bg-yellow-600 border border-yellow-600 duration-300 hover:border-yellow-800 rounded-md text-[#2a3855] font-meidum font-sans py-3 text-center absolute mx-44'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <p>Read more   </p>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ position: 'relative' }} />

                                </div>
                            </button>

                        </div>

                    </div> </div>
            </section></SwiperSlide>
            <SwiperSlide> <section className='mt-0 '>
                <div className='  flex justify-between  items-center relative h-full lg:h-[700px] w-full'>

                    <img src={image3} alt="" className='absolute bg-cover  ' />

                    <div className='relative flex flex-col gap-10 lg:p-96 p-0  mt-16 mb-10  lg:pt-64 '>
                        <h3 className='text-3xl lg:text-5xl font-bold font-mont text-[#2a3855] lg:text-start text-center'>Growth Partners</h3>
                        <p className='text-[#2a3855] font-mont font-medium text-lg lg:w-3/4 w-full lg:text-start text-center'>Connect with top consultants hand-picked by Elixir consulting and finance.</p>
                        <div className='lg:flex hidden flex-col lg:flex-row items-center gap-5'>
                            <button className='px-6 bg-[#2a3855] text-white rounded-md py-3 text-center absolute hover:bg-[#1a2334] duration-300'>
                                <div className='flex flex-row gap-3 items-center font-medium font-sans'>
                                    <p>Read more   </p>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ position: 'relative' }} />

                                </div>
                            </button>
                            <button className='px-6 bg-yellow-600 border border-yellow-600 duration-300 hover:border-yellow-800 rounded-md text-[#2a3855] font-meidum font-sans py-3 text-center absolute lg:mx-44 mx-0 '>
                                <div className='flex flex-row gap-3 items-center'>
                                    <p>Read more   </p>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ position: 'relative' }} />

                                </div>
                            </button>

                        </div>

                    </div> </div>
            </section></SwiperSlide>

        </Swiper>
    )
}
