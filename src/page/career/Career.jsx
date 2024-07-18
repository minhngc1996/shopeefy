import React from 'react'
import Footer from '../../components/footer/Footer'

const Career = () => {
  return (
    <div>
      <div class='container h-[450px] mx-auto py-8'>
        <h1 class='text-4xl font-bold text-center mb-8'>Job Openings</h1>

        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div class='bg-white p-6 rounded-lg shadow-md'>
            <h2 class='text-xl font-semibold text-gray-800'>
              Frontend Developer
            </h2>
            <p class='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula justo nec ex elementum, id consequat dolor luctus.
            </p>
            <p class='mt-4 text-gray-500'>Location: Remote</p>
            <a
              href='#'
              class='block mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            >
              View Details
            </a>
          </div>

          <div class='bg-white p-6 rounded-lg shadow-md'>
            <h2 class='text-xl font-semibold text-gray-800'>
              Backend Developer
            </h2>
            <p class='text-gray-600'>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
            <p class='mt-4 text-gray-500'>Location: New York, NY</p>
            <a
              href='#'
              class='block mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            >
              View Details
            </a>
          </div>

          <div class='bg-white p-6 rounded-lg shadow-md'>
            <h2 class='text-xl font-semibold text-gray-800'>UX/UI Designer</h2>
            <p class='text-gray-600'>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit.
            </p>
            <p class='mt-4 text-gray-500'>Location: San Francisco, CA</p>
            <a
              href='#'
              class='block mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career
