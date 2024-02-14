import img from '../reasons/reason images/why-choose-us.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCompass, faPalette } from '@fortawesome/free-solid-svg-icons'
export const Reason = () => {
  return (
   <section className="container m-auto mt-20 ">
    <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-extrabold text-[#2a3855] text-center font-sans">Why Choose Elixir</h1>
        <div className="w-[67px] h-[3px] bg-[#2a3855] rounded-full"></div>
    </div>
    <div className="flex lg:flex-row flex-col justify-around items-center gap-10 mt-16">
        <img src={img} alt="" className=' rounded-xl lg:w-1/2 w-full lg:h-1/2 h-full '/>
        <div className="flex flex-col gap-10">

<div className="flex flex-col gap-2 ">
    <div className="flex flex-row gap-2 items-center">
    <FontAwesomeIcon icon={faComment} style={{color: "#2a3855"}} />
        <p className='text-xl font-extrabold text-[#2a3855] font-mont'>We Are Professional</p>
    </div>
    <p className='font-mont lg:w-4/5 w-full text-[#6a6a6a]  text-md   tracking-normal'>We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.</p>
</div>
<div className="flex flex-col gap-2 ">
    <div className="flex flex-row gap-2 items-center">
    <FontAwesomeIcon icon={faPalette} style={{color: "#2a3855"}} />
        <p className='text-xl font-extrabold text-[#2a3855] font-mont'>We Are Creative</p>
    </div>
    <p className='font-mont lg:w-4/5 w-full text-[#6a6a6a]  text-md   tracking-normal'>With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?</p>
</div>
<div className="flex flex-col gap-2 ">
    <div className="flex flex-row gap-2 items-center">
    <FontAwesomeIcon icon={faCompass} style={{color: "#2a3855"}} />
        <p className='text-xl font-extrabold text-[#2a3855] font-mont'>24/7 Great Support</p>
    </div>
    <p className='font-mont lg:w-4/5 w-full text-[#6a6a6a]  text-md   tracking-normal'>Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.</p>
</div>

        </div>
    </div>
   </section>
  )
}
