"use client";
import { Productprops } from "@/types/products";
import React, { FC, Component, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "../view/ProductCard";

export default class ProductCarousel extends Component<{
  productData: Array<Productprops>;
}> {
  render(): ReactNode {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slideToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=''>
        <div className='text-center flex flex-col gap-4 mb-8'>
          <span className=''>PRODUCTS</span>
          <h2 className='font-bold text-xs leading-[15px] text-center tracking-widest text-[#0062F5]'>
            {" "}
            Check What We Have
          </h2>
        </div>
        <Slider {...settings}>
          {this.props.productData.map((item: Productprops) => (
            <ProductCard key={item._id} singleProductData={item} />
          ))}
        </Slider>
      </div>
    );
  }
}
