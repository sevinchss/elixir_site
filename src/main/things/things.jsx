import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faCircleNotch, faEnvelope, faFileExcel, faGlobe, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
export const Things = () => {
    return (
        <section className="container m-auto mt-16 ">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-3xl font-extrabold text-[#2a3855] text-center font-sans">Things You Get</h1>
                <div className="w-[67px] h-[3px] bg-[#2a3855] rounded-full"></div>
            </div>
            <div className='grid grid-flow-row gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16'>



                <div className='flex flex-col  items-center gap-3 text-center'>
                    <FontAwesomeIcon icon={faCircleNotch} style={{ color: "#2a3855" }} className='w-[100px] h-[35px]' />
                    <h3 className='text-lg font-extrabold font-mont text-[#2a3855] '>Creative Business</h3>
                    <p className='w-3/4 text-[#6a6a6a]'>We transform brands, grow businesses, and tell brand and product stories in a most creative way.</p>
                </div>
                <div className='flex flex-col  items-center gap-3 text-center'>
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#2a3855" }} className='w-[100px] h-[35px]' />
                    <h3 className='text-lg font-extrabold font-mont text-[#2a3855] '>Creating Experiences</h3>
                    <p className='w-3/4 text-[#6a6a6a]'>We cover a large range of creative platforms and digital projects with one purpose: to create experiences.</p>
                </div> <div className='flex flex-col  items-center gap-3 text-center'>
                    <FontAwesomeIcon icon={faFileExcel} style={{ color: "#2a3855" }} className='w-[100px] h-[35px]' />
                    <h3 className='text-lg font-extrabold font-mont text-[#2a3855] '> Product Consulting</h3>
                    <p className='w-3/4 text-[#6a6a6a]'>We guide you through the pipelines that generate new products with higher potential and lower risk.</p>
                </div> <div className='flex flex-col  items-center gap-3 text-center'>
                    <FontAwesomeIcon icon={faGlobe} style={{ color: "#2a3855" }} className='w-[100px] h-[35px]' />
                    <h3 className='text-lg font-extrabold font-mont text-[#2a3855] '> Business Boosting</h3>
                    <p className='w-3/4 text-[#6a6a6a]'>We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.</p>
                </div> <div className='flex flex-col  items-center gap-3 text-center'>
                    <FontAwesomeIcon icon={faMoneyBill} style={{ color: "#2a3855" }} className='w-[100px] h-[35px]' />
                    <h3 className='text-lg font-extrabold font-mont text-[#2a3855] '>Strategic Approach</h3>
                    <p className='w-3/4 text-[#6a6a6a]'>Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.</p>
                </div> <div className='flex flex-col  items-center gap-3 text-center'>
                    <FontAwesomeIcon icon={faAnchor} style={{ color: "#2a3855" }} className='w-[100px] h-[35px]' />
                    <h3 className='text-lg font-extrabold font-mont text-[#2a3855] '>Logistic Consulting</h3>
                    <p className='w-3/4 text-[#6a6a6a]'>We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities.</p>
                </div>

            </div>
        </section>
    )
}
