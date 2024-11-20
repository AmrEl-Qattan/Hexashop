import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="container fixed-bottom d-flex align-items-center justify-content-between mb-2">
      <div className="text">
      ©2024 Hexashop. All rights reserved.
      </div>
     <Link href='#'>
     <div className="icons gap-2 d-flex">
        <Image
        src='/images/icons/facebook.png'
        width={20}
        height={20}
        alt='Hexashop Facebook icon'
        />
        <Image
        src='/images/icons/instagram.png'
        width={20}
        height={20}
        alt='Hexashop instagram icon'
        />
        <Image className='bg-primary'
        src='/images/icons/twitter.png'
        width={20}
        height={20}
        alt='Hexashop twitter icon'
        />
        <Image
        src='/images/icons/youtube.png'
        width={20}
        height={20}
        alt='Hexashop youtube icon'
        />
      </div>
     </Link>
    </footer>
  )
}
