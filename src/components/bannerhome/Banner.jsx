import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../assets/images/hero.png'

const Banner = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-purple-100 to-pink-100 p-8 font-lora'>
        <div className='container px-4 grid md:grid-cols-2 py-8 mx-auto'>
          <div className='flex items-center'>
            <div className='max-w-[450px] space-y-4'>
              <p className='text-black'>
                Starting At <span className='font-bold'>$999</span>
              </p>
              <h2 className='text-5xl font-extrabold text-purple-700 mb-4'>
                The best notebook collection 2024
              </h2>
              <h3 className='text-2xl'>
                Exclusive offer <span className='text-red-600'>-10%</span> off
                this week
              </h3>
              <Link
                to='/product/'
                data-test='hero-btn'
                className='inline-block bg-blue-700 text-white font-bold font-mono rounded-md px-6 py-3 hover:bg-purple-700 hover:text-white'
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <img src={hero} alt='hero' className='ml-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
