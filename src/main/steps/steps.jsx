import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
export const MySteps = () => {
    return (
        <section className=' lg:h-[400px] h-full m-auto bg-cover ' style={{
            backgroundImage: `url("https://prium.github.io/elixir/assets/images/background-15.jpg")`
        }}>
            <div className='container m-auto flex flex-col justify-around gap-20   bg-no-repeat'  >
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2  mt-24'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD43B", height: "40px" }} />
                        <p className='font-bold font-mont lg:text-5xl text-3xl text-[#FFD43B]'>Take the right step,</p>
                    </div>
                    <p className='font-extrabold lg:text-5xl text-3xl text-white'>do the big things.</p>
                </div>
                <div className='grid grid-flow-row lg:justify-start justify-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold font-mont text-white text-4xl'>52k</h3>
                        <p className='text-white font-extrabold'>Cases Solved</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold font-mont text-white text-4xl'>164</h3>
                        <p className='text-white font-extrabold'>Trained Experts</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold font-mont text-white text-4xl'>38</h3>
                        <p className='text-white font-extrabold'>Branches</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold font-mont text-white text-4xl'>100%</h3>
                        <p className='text-white font-extrabold'>Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
