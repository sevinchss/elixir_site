import img from '../services/service images/img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard,faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'
export const Services = () => {
    return (
        <section className=' bg-[#fafafa] m-auto lg:h-[1700px] h-full mt-16' >
            <div className='container m-auto '>
                <div className='pt-20 flex items-center justify-center flex-col gap-5'>
                    <h3 className='text-3xl font-extrabold text-[#2a3855] text-center font-sans'>Our service</h3>
                    <div className="w-[67px] h-[3px] bg-[#2a3855] rounded-full"></div>
                </div>
                <div className='m-auto mt-16 gap-10 bg-white rounded-xl relative lg:w-[1110px] w-full lg:h-[1250px] h-full'>
                    <div className='flex  lg:flex-row flex-col gap-10 items-center'>
                        <img src={img} alt="" className=' rounded-l-sm  lg:w-[555px] w-full' />
                        <div className='flex flex-col   gap-4 lg:px-0 px-5'>
                            <h3 className='text-xl font-extrabold text-[#2a3855] '>Business Consulting</h3>
                            <p className='lg:w-4/5 w-full text-[#6a6a6a]  text-md  font-sans tracking-normal'>As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.

                            </p>
                            <a href="" className='text-[#2a3855] font-medium hover:underline'>Learn more</a>
                        </div>
                    </div>
                    <div className='flex  lg:flex-row flex-col-reverse mt-5 lg:mt-0 gap-10   items-center'>

                        <div className='flex flex-col px-8  gap-4'>
                            <h3 className='text-xl font-extrabold text-[#2a3855] '>Business Consulting</h3>
                            <p className='lg:w-4/5 w-full text-[#6a6a6a]  text-md  font-sans tracking-normal'>As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.

                            </p>
                            <a href="" className='text-[#2a3855] font-medium hover:underline'>Learn more</a>
                        </div>
                        <img src={img} alt="" className=' rounded-l-sm  lg:w-[555px]' />
                    </div>
                    <div className='flex  lg:flex-row flex-col lg:mt-0 mt-10 gap-10 items-center'>
                        <img src={img} alt="" className=' rounded-l-sm  w-[555px]' />
                        <div className='flex flex-col  px-5 lg:px-0 gap-4 bg-white'>
                            <h3 className='text-xl font-extrabold text-[#2a3855] '>Business Consulting</h3>
                            <p className='lg:w-4/5 w-full text-[#6a6a6a]  text-md  font-sans tracking-normal'>As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.

                            </p>
                            <a href="" className='text-[#2a3855] font-medium hover:underline'>Learn more</a>
                        </div>
                    </div>
                </div>
                <div className='container flex lg:flex-row flex-col gap-8 mt-20 '>


                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row gap-3 items-center'>
                        <FontAwesomeIcon icon={faIdCard} style={{color: "#2a3855"}} />
                            <h3 className='font-extrabold text-lg text-[#2a3855] '>Special financing</h3>
                        </div>
                        <p className='text-[#6a6a6a] text-md lg:w-5/6 w-full font-sans'>Apply for special financial support and earn exclusive rewards.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row gap-3 items-center'>
                        <FontAwesomeIcon icon={faMessage} style={{color: "#2a3855"}} />
                            <h3 className='font-extrabold text-lg text-[#2a3855]'>Chat with team</h3>
                        </div>
                        <p className='text-[#6a6a6a] text-md lg:w-5/6 w-full font-sans'>Have a question? Chat online with an expert. Start chatting</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row gap-3 items-center'>
                        <FontAwesomeIcon icon={faPhone} style={{color: "#2a3855"}}  />
                            <h3 className='font-extrabold text-lg text-[#2a3855]'>Call a specialist</h3>
                        </div>
                        <p className='text-[#6a6a6a] text-md lg:w-5/6 w-full font-sans'>Our 24/7 support team is ready for you at 1-800-MY-Elixir.</p>
                    </div>
                </div>
                </div>
        </section>
    )
}
