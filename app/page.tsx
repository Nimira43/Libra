import Image from 'next/image'
import React from 'react'
import { GiLibra } from 'react-icons/gi'

function page() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-64 h-64 relative'>
        <Image 
          src='/home-image.jpg'
          alt='Home Image'
          fill
          className='rounded-full object-contain'
        />
        <div className="absolute inset-0 bg-true-dark/60 rounded-full dark-shadow" />
      </div>
      <div className='flex items-center justify-center mt-6 text-4xl text-grey-medium logo gap-2'>
        <GiLibra /> Libra
      </div>
    </div>
  )
}

export default page
