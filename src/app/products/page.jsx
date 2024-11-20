import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



async function getData(){
  let res = await fetch(`https://dummyjson.com/products`)
  return res.json()
}


export default async function Blog() {

  let data = await getData();
  let products = data.products


  return (
    <div className='mt-5 row '>

      {products.map((product) =><Link  key={product.id} href={`/products/${product.id}`} className='col-md-4  align-items-center  mb-5 border  rounded-3'>
      <div className="">
        <Image className='object-fit-cover rounded-3' src={product.thumbnail} width={350} height={250} alt='post image'>
        </Image>
        </div>

        <div className="content">
          <h1 className='fw-bolder'>{product.title}</h1>
          <p className='fs-5'>{product.description}</p>
        </div>
      
      
      </Link>)}
      
    </div>
  )
}
