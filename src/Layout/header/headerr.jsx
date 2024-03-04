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
import { FaAlignRight, FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { React, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Fade } from 'react-reveal';




export function MYHeaderr() {
    const [openNav, setOpenNav] = useState(false);
    var location = useLocation().pathname;
    console.log(location);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <Fade>
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <Typography
                    as="li"
                    variant="small"
                    className="flex items-center gap-x-2 p-1 font-medium"
                >
                    <Menu
                        open={isMenuOpen}
                        handler={setIsMenuOpen}
                        offset={{ mainAxis: 20 }}
                        placement="bottom"
                        allowHover={true}
                    >
                        <MenuHandler>
                            <Button variant="text" className="px-[1px] text-white bg-none "><NavLink to={"/"}>Home</NavLink></Button>
                        </MenuHandler>
                        <MenuList className="bg-[#0c151a] border-[#0c151a] ">
                            <MenuItem><NavLink to={"/"}>Slider Header</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/slider-classic"}>Slider Classic</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/static-header"}>Static Header</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/slider-classic"}>Static Classic</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/youtube-background"}>Youtube Background</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/youtube-classic"}>Youtube Classic</NavLink></MenuItem>
                        </MenuList>
                    </Menu>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="white"
                    className="flex items-center gap-x-2 p-1 font-medium"
                >
                    <Menu allowHover={true}>
                        <MenuHandler>
                            <Button variant="text" className="px-[1px] text-white "><NavLink to={""}>Pages</NavLink></Button>
                        </MenuHandler>
                        <MenuList  className="bg-[#0c151a] border-[#0c151a] text-[#fafafa]">
                            <MenuItem><NavLink to={"/gallery"}  >Gallery</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/amenities"}>Amenitles</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/packages"}>Packages</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/ourHistory"}>Our History</NavLink></MenuItem>

                        </MenuList>
                    </Menu>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="flex items-center gap-x-2 p-1 font-medium"
                >
                    <Menu>
                        <MenuHandler>
                            <Button variant="text" className="px-[1px] text-white "><NavLink to={"/Contact"}>Contact</NavLink></Button>
                        </MenuHandler>

                    </Menu>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="flex items-center gap-x-2 p-1 font-medium"
                >
                    <Menu allowHover={true}>
                        <MenuHandler>
                            <Button variant="text" className="px-[1px] text-white "><NavLink to={"/"}>Elements</NavLink></Button>
                        </MenuHandler>
                        <MenuList  className="bg-[#0c151a] border-[#0c151a] text-[#fafafa]">
                            <MenuItem><NavLink to={"/Button"}  >Buttons</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/Colours"}  >Colours</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/Map"}  >Google Map</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/Grid"}  >Grid</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/LayoutHelper"}  >Layout Helpers</NavLink></MenuItem>
                            <MenuItem><NavLink to={"/LayoutS"}  >Slider</NavLink></MenuItem>
                            </MenuList>
                    </Menu>
                </Typography>
            </ul>
        </Fade>
    );

    return (
        <div className="absolute top-0 z-50 w-[90vw] overflow-x-hidden px-0">
            <Navbar className="container w-full px-0 pt-7 shadow-none border-none bg-transparent backdrop-opacity-0 backdrop-brightness-100 bg-opacity-80 rounded-none">
                <div className="  flex mt-8 lg:px-0 items-center justify-around ">
                    <div className="flex gap-5 items-center">
                        <Typography
                            as="a"
                            to="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <Link className="lg:px-0 px-20 overflow-hidden pr-3 font-bold font-Playfair" to="/">Hideaway <span className="">Resort</span></Link>
                        </Typography>
                        <div className="hidden lg:block">{navList}</div>
                    </div>
                    <div className="lg:flex items-center gap-x-5 hidden">
                        <a href="https://www.facebook.com/?locale=ru_RU"><FaFacebookF /></a>
                        <a href="https://twitter.com/home?lang="><FaTwitter /></a>
                        <a href="https://www.google.ru/?hl="><FaGooglePlusG /></a>
                        <Link className="btn border-white rounded-sm border-2 lg:block hidden font-bold py-1 px-5 hover:bg-white hover:text-black duration-300" to="#" target="Blank">Book Now</Link>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto px-20">
                        {navList}
                        <div className="flex flex-col gap-4 justify-center items-center gap-x-1 ">
                        <div className="flex items-center gap-x-5 ">
                        <a href="https://www.facebook.com/?locale=ru_RU"><FaFacebookF /></a>
                        <a href="https://twitter.com/home?lang="><FaTwitter /></a>
                        <a href="https://www.google.ru/?hl="><FaGooglePlusG /></a>
                        <Link className="btn border-white rounded-sm border-2 lg:block hidden font-bold py-1 px-5 hover:bg-white hover:text-black duration-300" to="#" target="Blank">Book Now</Link>
                    </div>
                            <Button fullWidth  size="sm" className="bg-transparent rounded-sm border-white border-2 lg:block  font-bold py-1 hover:bg-white hover:text-black duration-300">
                                <span>Book Now</span>
                            </Button>
                        </div>
                    </div>
                </Collapse>
            </Navbar >
        </div>
    )
}
