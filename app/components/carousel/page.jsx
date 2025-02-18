
"use client"
import Img from '@/public/Cimg.png';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='w-full h-full'>
        <Image src={Img} alt="img" height={100} width={100} layout='responsive'/>
    </div>
  )
}

export default page