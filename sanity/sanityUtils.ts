import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Slug } from "sanity";

export const getFemaleProducts = async () => {
  const res = await client.fetch(
    groq `*[_type=='product' && category == "Female"]{
    _id,
      name,
      category,
      tags,
      price,
      "slug": slug.current, 
      "image": image[0].asset->url,
    }`
  );
    return res;
    
};
export const getKidsProducts = async () => {
  const res = await client.fetch(
    groq `*[_type=='product' && category == "Kids"]{
    _id,
      name,
      category,
      tags,
      price,
      "slug": slug.current, 
      "image": image[0].asset->url,
    }`
  );
    return res;
    
};


export const getMaleProducts = async () => {
  const res = await client.fetch(
    groq `*[_type=='product' && category =="Male"]{
    _id,
      name,
      category,
      tags,
      price,
      "slug": slug.current, 
      "image": image[0].asset->url,
    }`
      
  );
    return res;
    
};
export const getProducts = async () => {
  const res = await client.fetch(
    `*[_type=='product']{
      _id,
        name,
        category,
        tags,
        price,
        "slug": slug.current, 
        "image": image[0].asset->url,
      }`
  );
  return res;
};

export  async function getAllProduct(slug:string) {
  const res = await client.fetch(
    groq `*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
     "slug": slug.current, 
      url,
      content,
      "image": image[0].asset->url,
    }`,
    { slug }
  )
  return res;
 };
    

 

