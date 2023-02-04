import Image from 'next/image'
import React from 'react'

const VendorItem = ({vendor}) => {
  return (
    <div className="p-2">
       <Image
      src={`/${vendor.image}`}
      width={200}
      height={200}
    />
    </div>
  )
}

export default VendorItem