"use client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Button } from "../ui/button";
import { CgShoppingCart } from "react-icons/cg";
import { Productprops } from "@/types/products";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/features/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import BASE_PATH_FORAPI from "@/lib/basePathUrl";


type IProps = {
  products:Productprops;
  //   qty?: number;
  userId?: string;
};

const ProductDetails = (props: IProps)  => {
  const dispatch = useDispatch();
  const [qty, setqty] = useState(0);
 

  function incQuantity() {
    setqty(qty + 1);
  }
  function decQuantity() {
    if (qty != 0) {
      setqty(qty - 1);
    }
  }

   const handleRequestData = async () => {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/cart/${props.userId}`);
    if (!res.ok) {
      throw new Error("Failed to Fetch Data From API");
    }
    const data = await res.json();
    return data;
  };

  const AddtoCart = async () => {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        product_id: props.products._id,
        product_name: props.products.name,
        image: urlForImage(props.products.image).url(),
        price: props.products.price,
        quantity: qty,
        total_price: props.products.price * qty,
      })
    })
  }


  const handleCart = async () => {
    // setIsLoading(true);
    try {
      const cartData = await handleRequestData();
      const existingItem = cartData.cartItems.find(
        (item:Productprops) => item._id === props.products._id
      );

      if (existingItem) {
        const newQuantity = existingItem.quantity + qty;
        const newPrice = props.products.price * newQuantity;
        const res = await fetch(
          `${BASE_PATH_FORAPI}/api/cart`,
          {
            method: "PUT",
            body: JSON.stringify({
              product_id: props.products._id,
              quantity: newQuantity,
              price: newPrice,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to update data");
        }
      } else {
        // await handleAddToCart();
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }

    // setIsLoading(false);
  };


  const addToCart = () => {
    toast.promise(handleCart(), {
      loading: "Adding To Cart",
      success: "Product added To Cart",
      error: "Failed to Add Product to cart",
    });
    console.log("added product")
    dispatch(cartActions.addToCart({ product: props.products, quantity: qty }));
}



  return (
    <>
     
      <div className='flex flex-[2]  gap-8 '>
        {/* image */}
        <div>
          <Image
            src={urlForImage(props.products.image).url()}
            className='object-cover cursor-pointer'
            width={100}
            height={100}
            alt='image'
            // onMouseEnter={() => setIndex(ind)}
          />
        </div>
        <div>
          <Image
            src={urlForImage(props.products.image).url()}
            className='object-cover'
            width={600}
            height={100}
            alt='image'
            // onMouseEnter={() => setIndex(ind)}
          />
        </div>

        {/* details */}
        <div className='flex flex-col flex-1 gap-10 mt-16'>
          <div className='name-and-category'>
            <h3 className='font-normal text-[1.625rem] leading-[33px] tracking-wider text-[#212121]'>
              {props.products.name}
            </h3>
            <span className='font-semibold text-[1.3rem] opacity-30'>
              {props.products.tags}
            </span>
          </div>
          {/* size */}
          <div className='size'>
            <p className='font-bold text-[0.9rem] text-[#212121] leading-4 tracking-wider'>
              SELECT SIZE
            </p>
            <ul className='flex gap-4 mt-4'>
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          {/* quantity */}
          <div className='flex gap-8'>
            <h4>Quantity: </h4>
            <div className='flex'>
              <span
                onClick={decQuantity}
                className='cursor-pointer select-none px-2 py-[5px] rounded-[50%] bg-[#F1F1F1] mr-2.5 border-2 border-solid border-[#F1F1F1]'
              >
                <AiOutlineMinus />
              </span>

              <span className='num'>{qty}</span>
              <span className='cursor-pointer select-none px-2 py-[5px] rounded-[50%] ml-2.5 border-2 border-solid border-[black]'>
                <AiOutlinePlus onClick={incQuantity} />
              </span>
            </div>
          </div>
          {/* cart */}
          <div className='flex items-center gap-4'>
            <Button 
            onClick={addToCart}
             className='text-sm px-5 gap-0 py-0'>
              <CgShoppingCart className='mr-2  ' size={20} />
              Add to Cart
            </Button>
            <Toaster/>

            <p className=' font-bold text-2xl leading-[30px] tracking-widest text-[#212121]'>
              ${props.products.price}.00
            </p>
          </div>
        </div>
      </div>
      <div className='bg-[white] flex flex-col gap-8 mt-16 pt-8 pb-24 w-full px-16'>
        <div className='flex z-[2] relative w-full h-[150px] border-b-2 border-b-[#C4C4C4] border-solid'>
          <div className='font-extrabold text-[7.5rem] leading-[151px] text-[#f2f3f7] opacity-70 z-[-1] w-full h-full'>
            Overview
          </div>
          <h2 className='font-bold text-[1.4rem] leading-[25px] tracking-wider text-[#212121] z-[2] absolute pb-12 top-[45%]'>
            Product Information
          </h2>
        </div>
        <div className='flex gap-8'>
          <h4 className='flex-1 font-bold text-base leading-[19px] tracking-wider text-[#666666]'>
            PRODUCT DETAILS
          </h4>
          <p className='flex-[2] font-light text-base leading-[26px] text-justify tracking-wider text-[#212121]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='flex  gap-8'>
          <h4 className='flex-1 font-bold text-base leading-[19px] tracking-wider text-[#666666]'>
            PRODUCT CARE
          </h4>
          <ul className='flex-[2] pl-3 list-disc font-semibold text-gray-900'>
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;