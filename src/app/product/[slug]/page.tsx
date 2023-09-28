import { client } from "../../../../sanity/lib/client";

import { Productprops, imagesType, slugType } from "@/types/products";
import Wrapper from "@/components/view/Wrapper";
import ProductDetails from "@/components/view/ProductDetails";


type Props = {
  params: {
    slug: string;
    products: Array<Productprops>;
  };
};
const getProductSlug = async () => {
  const res = await client.fetch(`*[_type == "product"]{slug}`);
  return res;
};

/**
 * function to generate static static params
 */
export async function generateStaticParams() {
  let res = await getProductSlug();
  let productSlugs: string[] = [];
  res.map((prod: { slug: { current: string } }) => {
    productSlugs.push(prod.slug.current);
  });
  return productSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function page({ params: { slug } }: Props) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    ...,
    _id,
    _createdAt,
    name,
    details,
    care,
    url,
    price,
    "image": image[0].asset->url,
    "slug":slug.current,
    content,
    }`;

  const products: Productprops = await client.fetch(query, { slug });
    const user_id ="jjjjj22"
  return (
    <section className='bg-[#FCFCFC] min-h-screen  my-32'>
      <Wrapper className='flex flex-col justify-between relative items-center px-4 py-8'>
        <ProductDetails products={products} userId={user_id}  />
      </Wrapper>
    </section>
  );
}
