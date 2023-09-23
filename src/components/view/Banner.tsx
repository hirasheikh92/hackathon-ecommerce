import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { CgShoppingCart } from "react-icons/cg";
import Wrapper from "./Wrapper";

const Banner = () => {
  return (
    <section className='w-full  bg-white  '>
      <Wrapper className='flex relative h-[600px] px-6 py-2'>
        {/* left-banner */}
        <div className='w-full flex flex-1 flex-col gap-10'>
          <span className='bg-[#e1edff] h-10 w-[120px] flex items-center justify-center text-[blue] font-semibold rounded-md'>
            Sale 70%
          </span>
          <h1 className=' text-6xl font-extrabold tracking-tight lg:text-5xl'>
            An Industrial Take on Streetwear
          </h1>
          <p className=' font-normal text-base leading-6 text-[#666666] w-[70%]'>
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href={"/allproducts"}>
            {" "}
            <Button className=''>
              <CgShoppingCart size={26} className="mr-2"/> Start Shopping
            </Button>
          </Link>

          <div className='grid grid-cols-[1fr_1fr_1fr_1fr]'>
            <Image
              src={"/images/Featured1.png"}
              width={100}
              height={35}
              alt='img'
            />
            <Image
              src={"/images/Featured2.png"}
              width={100}
              height={35}
              alt='img'
            />
            <Image
              src={"/images/Featured3.png"}
              width={100}
              height={35}
              alt='img'
            />
            <Image
              src={"/images/Featured4.png"}
              width={100}
              height={35}
              alt='img'
            />
          </div>
        </div>
        {/* right-banner */}
        <div className='hidden lg:flex flex-1'>
          <div className='w-[600px] h-[600px] bg-[#FFECE3] rounded-[50%]'>
            <Image
              className='absolute top-[-5%]'
              src={"/images/banner-img.png"}
              width={650}
              height={650}
              alt='bnner-image'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Banner;
