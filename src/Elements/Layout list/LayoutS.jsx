import { Carousel } from "@material-tailwind/react";
import { FaAlignRight } from "react-icons/fa6";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Pages } from '../../Pages/Pages'


export function LayoutS() {
    return (
        <>
            <Pages text="Slider" span="MODULAR ELEMENTS" bgImage="bg-carousel4" />

            <section className="container">
                <Fade>
                    <Carousel className=" w-full mt-10  flex" loop>
                        <div
                            className="h-[600px] w-full bg-carousel1 bg-cover bg-no-repeat flex items-center justify-center">
                            <Fade top >
                                <p className='text-center text-white'> WEST VIRGINIA / UNITED STATES</p>
                            </Fade>
                        </div>
                        <div className="h-[600px] w-full bg-carousel2 bg-cover bg-no-repeat flex items-center justify-center">
                            <p className='text-center text-white'> WEST VIRGINIA / UNITED STATES</p>
                        </div>
                        <div
                            className="h-[600px] w-full bg-carousel3 bg-cover bg-no-repeat flex items-center justify-center">
                            <p className='text-center text-white'> WEST VIRGINIA / UNITED STATES</p>
                            <Link className="down-indicator" to="#target-down-indicator"><FaAlignRight /></Link>
                        </div>
                    </Carousel>
                </Fade >
            </section>
        </>
    );
}