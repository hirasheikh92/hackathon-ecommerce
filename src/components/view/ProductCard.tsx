import { Productprops } from "@/types/products";
import Image from "next/image";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

type Props = {
  singleProductData: Productprops;
};

const ProductCard = ({ singleProductData }: Props) => {
  console.log(" singleProductData", singleProductData)
  return (
    <Link
      key={singleProductData._id}
      href={`/product/${singleProductData.slug}`}
    >
      <div className='flex flex-col justify-center items-center px-0 py-8  transition-transform duration-[0.5s] ease-[ease] pl-[1.3rem] pr-0 scale-100 hover:scale-110'>
        {" "}
        <Image
          src={urlForImage(singleProductData.image).url()}
          width={380}
          height={400}
          className='w-[380px] h-[400px]'
          alt={""}
        />
        <p className='font-semibold text-[#212121] leading-6 mt-2 text-[1.1rem] tracking-[0.03em]'>
          {singleProductData.name}
        </p>
        <p className='font-semibold text-[#212121] leading-6 mt-2  text-[1.2rem]'>
          ${singleProductData.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
