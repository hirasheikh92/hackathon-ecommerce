import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center text-center relative z-[1]  pt-6'>
        <div className='font-extrabold text-[7.5rem] leading-[151px] text-[#f2f3f7] absolute z-[-1]'>
          Newsletter
        </div>
        <h1 className='font-bold text-[2rem] leading-10 tracking-[0.03em] text-[#212121] mb-4'>
          Subscribe Our Newsletter
        </h1>
        <p className='font-light text-base leading-[26px] text-[#212121] mb-8'>
          Get the latest information and promo offers directly
        </p>
        <form>
          <input
            type='email'
            placeholder='Input email address'
            className='border pl-5 pr-[120px] py-2 border-solid border-[gray]'
          ></input>
          <button
            type='submit'
            className=' bg-[black] text-[white] font-semibold text-[0.9rem] leading-4 ml-2.5 px-5 py-3'
          >
            Get Started
          </button>
        </form>
      </section>
    </>
  );
};

export default NewsLetter;
