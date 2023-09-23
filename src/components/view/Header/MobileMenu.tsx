"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";


const MobileMenu = () => {
  const [isNavbarOpen, setisNavbarOpen] = useState(false);
  return (
    <div className='flex flex-col justify-between items-center w-full m-16 lg:hidden'>
      <div
        className='flex justify-between w-full lg:hidden'
        onClick={() => setisNavbarOpen(!isNavbarOpen)}
      >
        <div className=' ml-3'>
          <Link href='/'>
            <Image
              src={"/images/Logo.png"}
              width={140}
              height={25}
              alt='logo'
              priority
            />
          </Link>
        </div>
        <div className='cursor-pointer mr-3'>
          {isNavbarOpen ? (
            <RiCloseLine color='black' fontSize={27} />
          ) : (
            <RiMenu3Line color='black' fontSize={27} />
          )}
        </div>
      </div>

      {isNavbarOpen && (
        <div className='w-full flex justify-center gap-10  bg-white min-h-screen z-10'>
          <nav className='flex justify-center items-center flex-col gap-8'>
            <Link href='/cart'>
             {/* <Cart/> */}
            </Link>
            <ul className='flex flex-col justify-center items-center gap-8'>
              <Link href='/female'>
                <li>Female</li>
              </Link>
              <Link href='/male'>
                <li>Male</li>
              </Link>
              <Link href='/kids'>
                <li>Kids</li>
              </Link>
              <Link href='/products'>
                <li>All Products</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
