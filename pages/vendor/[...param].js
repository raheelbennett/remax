import React from 'react'
import { useRouter } from 'next/router'

const Vendor = () => {
  const router = useRouter()
  const { param } = router.query
  
  return (
    <div>{param}</div>
  )
}

export default Vendor