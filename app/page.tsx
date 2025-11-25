import Image from 'next/image'
import React from 'react'


function page() {
  return (
    <div>
      <Image 
        src='/home-image.jpg'
        alt='Home Image'
        width={100}
        height={100}
      />
    </div>
  )
}

export default page
