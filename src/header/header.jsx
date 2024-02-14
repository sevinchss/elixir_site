// const divStyles = {
//   boxShadow: '0 1px 3px rgba(0,0,0,.15)',

// };
import logo from './images/logo.png';
// export const Header = () => {
//   return (


//     <header class=' border-b py-4 px-4 sm:px-10 justify-around sticky top-0 z-10 bg-[#ffffffd9] font-mont min-h-[70px]  ' style={divStyles}>
//       <div class='container m-auto'>
//       <div class='flex flex-wrap items-center justify-around gap-x-2 '>
//         <a href="javascript:void(0)"><img src={image} alt="logo" class=' w-28' />
//         </a>
//         <button id="" class='lg:hidden ml-auto'>
//           <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"></path>
//           </svg>
//         </button>
//         <ul id="collapseMenu"
//           class='lg:!flex hidden lg:ml-14 lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
//           <li class='max-lg:border-b max-lg:py-2 px-3'>
//             <a href='javascript:void(0)'
//               class='hover:text-black duration-150 text-[#2a3855]  block font-semibold text-[15px]'>Home</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
//             class='hover:text-black duration-150  text-[#2a3855] block font-semibold text-[15px]'>Pages</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
//             class='hover:text-black duration-150  text-[#2a3855] block font-semibold text-[15px]'>News</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
//             class='hover:text-black duration-150  text-[#2a3855] block font-semibold text-[15px]'>Elements</a>
//           </li>
//           <li class='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
//             class='hover:text-black duration-150  text-[#2a3855] block font-semibold text-[15px]'>Contact</a>
//           </li>
//         </ul>
//         <div class='md:flex lg:ml-auto max-lg:w-full hidden'>
//           <div
//             class='flex  max-xl:w-full bg-transparent px-6 py-2 rounded-full outline outline-transparent  border-[#2a3855] border text-[#2a3855] hover:text-white hover:bg-[#2a3855] duration-150 r:bg-[#2a3855] r:text-white cursor-pointer'>
//             Purchase
//           </div>
//         </div>
//       </div> </div>
//     </header>

//   )
// }


import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import React from "react";




export function MYHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Menu>
          <MenuHandler>
            <Button variant="text" className="px-[1px] text-[#2a3855] ">Home</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Slider Header</MenuItem>
            <MenuItem>Slider Classic</MenuItem>
            <MenuItem>Static Header</MenuItem>
            <MenuItem>Static Classic</MenuItem>
            <MenuItem>Youtube Background</MenuItem>
            <MenuItem>Youtube Classic</MenuItem>
            <MenuItem>Self-hosted Video</MenuItem>
            <MenuItem>Self-hosted Classic</MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Menu>
          <MenuHandler>
            <Button variant="text" className="px-[1px] text-[#2a3855] ">Pages</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Services</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Alumni</MenuItem>
            <MenuItem>Blank Page</MenuItem>
            <MenuItem>404 Page</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Registration</MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Menu>
          <MenuHandler>
            <Button variant="text" className="px-[1px] text-[#2a3855] ">News</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Newsroom</MenuItem>
            <MenuItem>Single room</MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Menu>
          <MenuHandler>
            <Button variant="text" className="px-[1px] text-[#2a3855] ">Elements</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Menu>
          <MenuHandler>
            <Button variant="text" className="px-[1px] text-[#2a3855] ">Contact</Button>
          </MenuHandler>
        </Menu>
      </Typography>
    </ul>
  );
  return (
    <>
      <Navbar className=" max-w-full px-4 lg:px-8 py-0 shadow-none sticky top-0 backdrop-opacity-80 backdrop-brightness-100 bg-opacity-80 z-50 rounded-none">
        <div className="  flex items-center justify-around text-blue-gray-900">
          <div className="flex gap-5 items-center">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <img src={logo} alt="" />
            </Typography>
            <div className="hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button 
              variant="outlined"
              size="sm"
              className="hidden hover:bg-[#2a3855] hover:text-white lg:inline-block rounded-full"
            >
              <span>Purchase</span>
            </Button>
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
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="gradient" size="sm" className="rounded-full">
                <span>Purchase</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </>
  )
}
