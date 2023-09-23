import Image from "next/image";
import Link from "next/link";
import { getKidsProducts } from "../../../sanity/sanityUtils";
import { urlForImage } from "../../../sanity/lib/image";
import { Productprops } from "@/types/products";

const Femalepage = async () => {
  const data: Array<Productprops> = await getKidsProducts();

  return (
    <>
      <section className='mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20'>
       
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between justify-items-center gap-16'>
            {data.map((data) => (
              <div key={data._id} className=' w-[250px]'>
                <Link href={`/product/${data.slug}`} className=''>
                  <Image
                    alt='ecommerce'
                    className='object-cover object-center w-full  block'
                    src={urlForImage(data.image).url()}
                    width={250}
                    height={270}
                  />
                </Link>
                <div className=''>
                  <h2 className='font-semibold leading-6 tracking-[0.03em] text-[#212121] text-[1.05rem] mt-2'>
                    {data.name}
                  </h2>
                  <h3 className='font-semibold text-[15px] leading-[15px] text-[#888888] mt-2'>
                    {data.tags}
                  </h3>

                  <p className='text-xl mt-4 font-semibold leading-6 tracking-[0.03em] text-[#212121]'>
                    ${data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
      
      </section>
    </>
  );
};

export default Femalepage;
