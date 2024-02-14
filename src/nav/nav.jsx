import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
export const Nav = () => {
    return (
        <section className=" sm:flex hidden flex-row md:justify-around justify-center items-center bg-[#2a3855]  h-12">
            <div className='container m-auto flex md:justify-around justify-between items-center px-2'>
            <div className="flex flex-row gap-5 text-white">
                <div className='md:flex hidden flex-row gap-3 text-sm items-center font-medium'>
                    <FontAwesomeIcon icon={faMapPin} style={{ color: "FFD43B" }} />
                    <p>1010 Avenue, New York, NY 10018 US.</p>
                </div>
                <div className='flex gap-3 items-center text-sm'>
                    <FontAwesomeIcon icon={faPhone} style={{ color: "#FFD43B", }} />
                    <a href="Tel: 212 386 5575 212 386 5576">212 386 5575, 212 386 5576</a>
                </div>
            </div>
            <div className='text-white flex flex-row gap-3 items-center text-sm'>
                <FontAwesomeIcon icon={faClock} style={{ color: "#FFD43B", }} />
                <p>Mon-Sat, 8.00-18.00. Sunday CLOSED</p>
            </div>
            </div>
        </section>
        
    )
}
