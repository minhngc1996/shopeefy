import React from 'react'
import Footer from '../../components/footer/Footer'

const Support = () => {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='container mx-auto py-8'>
          <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>
              Support Center
            </h1>

            <div className='flex items-center mb-4'>
              <svg
                className='w-6 h-6 mr-2 text-gray-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
              <p className='text-gray-700'>
                Have a question or need assistance? We're here to help!
              </p>
            </div>

            <form className='mb-6'>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-gray-800 font-semibold mb-1'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200'
                  placeholder='Enter your name'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-800 font-semibold mb-1'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200'
                  placeholder='Enter your email'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-gray-800 font-semibold mb-1'
                >
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  className='w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200'
                  placeholder='Enter your message'
                ></textarea>
              </div>

              <button
                type='submit'
                className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
              >
                Submit
              </button>
            </form>

            <p className='text-sm text-gray-600'>
              Or reach us directly via email at{' '}
              <a href='mailto:support@example.com' className='text-blue-500'>
                support@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Support
