import Banner from '@/components/view/Banner'
import Event from '@/components/view/Event'
import Feature from '@/components/view/Feature'
import NewsLetter from '@/components/view/NewsLetter'
import Image from 'next/image'
import { getProducts } from '../../sanity/sanityUtils'
import { responseType } from '@/types/products'
import ProductCarousel from '@/components/ProductCarousel'

export default async function Home() {
  const  response = await getProducts();
  return (
    
    <div className='mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20'>
      <Banner />
      <Event />
      <ProductCarousel productData={response} />
      <Feature />
      <NewsLetter />
      </div>
  )
}
