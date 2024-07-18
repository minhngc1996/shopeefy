import React from 'react'

const BoxCategory = ({ data }) => {
  return (
    <div className='w-64 md:w-64 lg:w-64 p-4 flex-shrink-0'>
      <div className='bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer'>
        <div className='overflow-hidden rounded-t-lg'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NGgjbJKHGHqUgqdUk6cXO_TEcJW2l3ltxg&s'
            className='w-full h-48 object-cover'
            alt={data.category}
          />
        </div>
        <div className='p-4'>
          <h1 className='text-blue-700 hover:text-purple-700 text-lg font-bold mb-2'>
            {data.name}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default BoxCategory
