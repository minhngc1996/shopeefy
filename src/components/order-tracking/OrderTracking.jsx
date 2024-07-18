import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

const OrderTracking = () => {
  const navigate = useNavigate()

  const handleBackToShop = () => {
    navigate('/')
  }

  return (
    <div className='max-w-[1200px] h-[1000px] mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-[30px] text-center'>
        Tracking Order
      </h1>
      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 w-3 h-3 rounded-full'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6 text-sm text-gray-600'>
            Confirmed
          </div>
        </div>
        <div className='border-t-2 border-gray-300 flex-1'></div>
        <div className='relative'>
          <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6 text-sm text-gray-600'>
            Shipping
          </div>
        </div>
        <div className='border-t-2 border-gray-300 flex-1'></div>
        <div className='relative'>
          <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6 text-sm text-gray-600'>
            Delivered
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-8'>
        <button
          onClick={handleBackToShop}
          className='bg-blue-300 text-white py-3 px-6 rounded-lg font-bold hover:bg-purple-700'
        >
          Back to Shop
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default OrderTracking
