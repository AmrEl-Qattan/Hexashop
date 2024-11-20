import Image from "next/image";
import React from "react";
import styles from './page.module.css'


async function getData(id){
  const  res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json();
}


export default async function Post({ params }) {

  const { id } =await params;
  const  product = await getData(id);
  // console.log(params);
  
  

  return (
    <>
      <header>
        <div className="info">
          <h1 className="mb-1">{product.title}</h1>
          <p>{}{product.description}</p>
        </div>
        <div className="text-center">
        <Image key={product.id} width={500} height={400} className="object-fit-cover rounded-5" src={product.thumbnail} alt={product.title} />
        <span className="position-absolute text-bg-warning p-2 bottom-0 end-0">{product.category}</span>
        </div>
        <p className="fs-5 text-center">price : <span className="text-warning">{product.price}</span></p>

      </header>
      

      <div className="d-flex justify-content-center g-5 ">
        {product.images.map((image , index)=>
        <Image priority key={index} src={image} width={100} height={100}  alt={`${product.title} image ${index + 1}`} />
        )}
      </div>
      
    </>
  );
}
