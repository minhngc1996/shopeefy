import React, { useEffect, useState } from 'react'
import banner from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const BannerHome = ({ images }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <div className='container mt-8 mx-auto px-4 md:flex font-lora'>
      <img src={banner} alt='banner' className='md:w-1/2' />
      <div className='bg-[#e3edf6] md:w-1/2 flex flex-col items-center text-center justify-center p-4'>
        <h1 className='text-4xl font-bold mb-1'>Don't miss the offer</h1>
        <h2 className='text-3xl font-semibold mb-4'>Grab it now</h2>
        <Link
          to='/product/'
          className='inline-block bg-blue-700 font-mono text-white rounded-md px-6 py-3 hover:bg-purple-700 hover:text-white hover:font-bold'
          data-test='banner-btn'
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default BannerHome
