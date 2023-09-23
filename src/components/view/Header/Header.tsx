"use client";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import MobileMenu from "./MobileMenu";

import { CgShoppingCart } from "react-icons/cg";



const Header = () => {


  return (
    <header className='relative mx-auto flex w-screen items-center justify-between px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:px-20'>
      {/* <Wrapper className='flex justify-between items-center px-6 py-3 my-2'> */}
        <div className='hidden lg:flex'>
          <Link href={"/"}>
            <Image
              src={"/images/Logo.png"}
              alt={"logo"}
              width={140}
              height={25}
            />
          </Link>{" "}
        </div>
        <Navbar />
        <SearchBar />
        <Link href='/cart'>
          <button className='hidden lg:flex bg-[#F1F1F1] relative p-3 rounded-[50%] border-[none]'>
            <CgShoppingCart size={22} />
            <span className='absolute text-xs text-[#eee] bg-[#f02d34] w-[18px] h-[18px] text-center font-semibold rounded-[50%] right-[5px] top-0'>
            {/* {totalItems} */}
            0
            </span>
          </button>
        </Link>
        <MobileMenu />
      {/* </Wrapper> */}
    </header>
  );
};

export default Header;
