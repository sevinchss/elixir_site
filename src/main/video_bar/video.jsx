import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faComments, faUsers } from '@fortawesome/free-solid-svg-icons'
import video from '../video_bar/video images/xaxas.jpg';
export const Video = () => {
  return (
    <div className='flex flex-col '>
      <section className='container flex flex-col justify-center items-center m-auto top-auto mt-14 h-[800px]'>

        <div className=' text-center '>
          <a href="https://www.youtube.com/watch?v=jlWMTNZNOc0&t=6s">
            <img src={video} alt="" className=' rounded-2xl w-full' /></a>
          {/* <a href=""> <FontAwesomeIcon icon={faCirclePlay} className='absolute mt-[310px] -ml-8  h-20' style={{color: 'white', }}/></a> */}
        </div>

        <div className='flex lg:flex-row flex-col gap-5 mt-5 lg:px-10 px-0 justify-center'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3 items-center'>
              <FontAwesomeIcon icon={faUsers} style={{ color: "#2a3855" }} />
              <h3 className='font-extrabold text-lg text-[#2a3855] '>Awesome Team</h3>
            </div>
            <p className='text-[#6a6a6a] text-md lg:w-4/5 w-full font-sans'>Before talking destination, we shine a spotlight across your organization
              to fully understand it.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3 items-center'>
              <FontAwesomeIcon icon={faComments} style={{ color: "#2a3855" }} />
              <h3 className='font-extrabold text-lg text-[#2a3855] '> Excellent Support</h3>
            </div>
            <p className='text-[#6a6a6a] text-md lg:w-4/5 w-full font-sans'>If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3 items-center'>
              <FontAwesomeIcon icon={faBolt} style={{ color: "#2a3855" }} />
              <h3 className='font-extrabold text-lg text-[#2a3855] '>Faster Performance
              </h3>
            </div>
            <p className='text-[#6a6a6a] text-md w-full  lg:w-4/5 font-sans'>We develop a systematic well-ordered process of analysis, from concept through implementation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
