import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Carousel,
    Collapse,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    isMenuOpen,
    setIsMenuOpen,
} from "@material-tailwind/react";
import { FaChevronDown, FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { React, useState, useEffect } from "react";
import { Fade } from "react-reveal";

export const Hero = () => {
    return (
        <div className="px-10 sticky">
            <Fade>
                <Carousel className=" w-full mt-10 " loop autoplay autoplayDelay={1600}>
                    <div
                        className="h-[600px] flex-col gap-8 w-full brightness-[0.7] bg-carousel1 bg-cover bg-no-repeat flex items-center justify-center">
                        <Fade top >
                            <div className='text-white flex-col flex text-center items-center justify-center'>
                                <p className='text-center'> WEST VIRGINIA / UNITED STATES</p>
                                <p className='text-white font-Playfair italic text-[58px]'>The Hideaway Inn</p>
                        
                            </div>
                            <div className="">
                            <a className="down-indicator absolute transition-all duration-300 text-white flex"    href="#target-down-indicator" ><FaChevronDown size={20}/>
</a></div>
                        </Fade>
                    </div>
                    <div className="h-[600px] w-full bg-carousel2  brightness-[0.7] bg-cover bg-no-repeat flex items-center justify-center">
                        <div className='text-white flex-col flex text-center items-center justify-center'>
                            <p className='text-center'> WEST VIRGINIA / UNITED STATES</p>
                            <p className='text-white font-Playfair italic text-[58px]'>Live Wonderful life</p>

                            <div className="">
                            <a className="down-indicator absolute transition-all duration-300 text-white flex"    href="#target-down-indicator" ><FaChevronDown size={20}/>
</a></div>
                 </div>
                    </div>
                    <div
                        className="h-[600px] w-full bg-carousel3 brightness-[0.7] bg-cover bg-no-repeat flex items-center justify-center">
                        <div className='text-white flex-col flex text-center items-center justify-center'>
                            <p className='text-center'> WEST VIRGINIA / UNITED STATES</p>
                            <p className='text-white font-Playfair italic text-[58px]'>Perfect Vacation Place</p>
                            <div className="">
                            <a className="down-indicator absolute transition-all duration-300 text-white flex"    href="#target-down-indicator" ><FaChevronDown size={20}/>
</a></div>
                        </div>

                    </div>
                </Carousel>
            </Fade >
        </div>
    )
}
