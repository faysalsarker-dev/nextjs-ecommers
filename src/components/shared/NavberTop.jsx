 'use client'

import {
  Navbar,

  Typography,
  Button,
  IconButton,

} from "@/app/Mtailwind";
import Link from 'next/link'
import { useState,useEffect } from "react";
import { usePathname } from 'next/navigation'
export function NavbarTop() {
  const [openNav, setOpenNav] = useState(false);
 const pathname = usePathname()
 useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

const list = [
  {
    name : 'Home',
    path:'/'
  },
  {
    name : 'About',
    path:'/About'
  },
  {
    name : 'Contact',
    path:'/Contact'
  },

]


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
 { list.map(item =>(
 <Typography
 key={item.name}
 as="li"
 variant="small"
 color="blue-gray"
 className={`p-1 font-normal  ${pathname === item.path ? 'text-primary border-b-primary border-b-2 duration-300' : 'hover:text-primary duration-300'}`}
>
 <Link href={item.path}>
 {item.name}
 </Link>

</Typography>
 ))   }
      
     
    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
    <div className="flex items-center justify-between text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        className="mr-4 cursor-pointer py-1.5 text-2xl  font-extrabold"
      >
        <span className="text-primary font-extrabold ">Drop</span><span className="font-extrabold text-gray-800">Ship</span>
      </Typography>
      <div className="flex items-center gap-4">
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Log In</span>
          </Button>
          <Button
           
            size="sm"
            className="hidden lg:inline-block bg-primary"
          >
            <span>Sign in</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
    </div>
  </Navbar>
  );
}