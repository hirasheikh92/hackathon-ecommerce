import Image from "next/image";
import Wrapper from "./Wrapper";

const Event = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center space-y-10 pt-6'>
    {/* Top section - Title and description */}
    <p className='text-center text-sm font-bold uppercase text-[#0062f5]'>
      Promotions
    </p>
    <p className='text-center text-3xl font-bold text-[##212121]'>
      Our Promotions Events
    </p>
    {/* Bottom section - Snaps */}
    <div className='flex w-full flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0'>
      {/* Left Section */}
      <div className='flex flex-col space-y-5 lg:basis-2/5 lg:justify-between'>
        {/* Upper - image */}
        <div className='flex basis-1 flex-col items-center bg-[#d6d6d8] px-8 pt-8 text-[#212121] custom1:flex-row custom1:pb-0 lg:basis-1/2'>
          <div className='flex flex-col'>
            <p className='text-3xl font-bold'>
              GET UP TO <span className='font-extrabold'>60%</span>
            </p>
            <p className='text-lg font-normal'>For the summer season</p>
          </div>
          <Image
             src={"/images/event1.png"}
             width={"260"}
             height={200}
             alt='event'
            className='mx-auto'
            priority
          />
        </div>
        {/* Lower - promo*/}
        <div className='flex basis-1 flex-col items-center space-y-5 bg-[#212121] p-8 text-white lg:basis-1/2'>
          <p className='text-4xl font-extrabold'>GET 30% Off</p>
          <div className='flex flex-col items-center justify-center space-y-1'>
            <p className='text-sm font-normal'>USE PROMO CODE</p>
            <p className='cursor-pointer rounded-lg bg-[#474747] px-4 py-2 text-sm font-semibold'>
              DINEWEEKENDSALE
            </p>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className='flex w-full flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 lg:lg:basis-3/5'>
        {/* Left - image*/}
        <div className='flex basis-1 flex-col justify-between bg-[#efe1c7] px-6 pt-6 text-[#212121] md:basis-1/2'>
          <div className='flex flex-col'>
            <p className='text-lg font-normal'>Flex Sweatshirt</p>
            <p className='text-lg font-normal'>
              <span className='line-through'>$100.00</span>
              <span className='ml-3 font-semibold'>$75.00</span>
            </p>
          </div>
          <Image
              className=' w-[280px] h-[340px] pt-4'
              src={"/images/event2.png"}
              width={"260"}
              height={200}

              priority alt={"event"}          />
        </div>
        {/* Rigth - image*/}
        <div className='flex basis-1 flex-col justify-between bg-[#d7d7d9] px-6 pt-6 text-[#212121] md:basis-1/2'>
          <div className='flex flex-col'>
            <p className='text-lg font-normal'>Flex Push Button Bomber</p>
            <p className='text-lg font-normal'>
              <span className='line-through'>$225.00</span>
              <span className='ml-3 font-semibold'>$190.00</span>
            </p>
          </div>
          <Image
              className=' w-[280px] h-[340px] pt-4'
              src={"/images/event3.png"}
              width={"260"}
              height={200}
              alt='event'
            priority
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Event;
