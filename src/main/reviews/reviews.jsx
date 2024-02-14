import image3 from '../reviews/reviews image/client3.png';
import image2 from '../reviews/reviews image/client2.png';
import image from '../reviews/reviews image/client1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Reviews = () => {
  return (
    <Swiper autoplay = {true}
    loop = {true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide autoplay = {true}
    loop = {true}>
        <section className='mt-16 mb-10'>
          <div className='container m-auto flex lg:flex-row flex-col justify-center items-center gap-5'>
            <div>
              <img src={image} alt="" className='lg:w-[400px] w-full rounded-md'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-medium font-sans text-[#6a6a6a] lg:w-2/3 w-full text-lg'>Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask, and clients never seemed to follow through when we asked. Elixir team did everything – with almost no time or effort for me!</p>
              <h3 className='text-[#2a3855] font-semibold font-sans'>Maria Sharapova</h3>
              <span className='text-[#6a6a6a] font-normal font-sans'>Managing Director, Themewagon Inc.</span>
            </div>
          </div>
        </section>

      </SwiperSlide>
      <SwiperSlide autoplay = {true}
    loop = {true}> 
      <section className='mt-16 mb-10'>
          <div className='container m-auto flex lg:flex-row flex-col justify-center items-center gap-5'>
            <div>
              <img src={image2} alt="" className='lg:w-[400px] w-full rounded-md'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-medium font-sans text-[#6a6a6a] lg:w-2/3 w-full text-lg'>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h3 className='text-[#2a3855] font-semibold font-sans'> Michael Clarke</h3>
              <span className='text-[#6a6a6a] font-normal font-sans'> CEO, A.E.T Institute</span>
            </div>
          </div>
        </section>

      </SwiperSlide>
      <SwiperSlide autoplay = {true}
    loop = {true}> 
      <section className='mt-16 mb-10'>
          <div className='container m-auto flex lg:flex-row flex-col justify-center items-center gap-5'>
            <div>
              <img src={image3} alt="" className='lg:w-[400px] w-full rounded-md'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-medium font-sans text-[#6a6a6a] lg:w-2/3 w-full text-lg'>As a sales gamification company, we were skeptical to work with a consultant to optimize our sales emails, but Elixir was highly recommended by many other Y-Combinator startups we knew. Elixir helped us run a ~6 week email campaign.</p>
              <h3 className='text-[#2a3855] font-semibold font-sans'>David Beckham</h3>
              <span className='text-[#6a6a6a] font-normal font-sans'> Chairman, Harmony Corporation</span>
            </div>
          </div>
        </section>

      </SwiperSlide>

    </Swiper>
  )
}
