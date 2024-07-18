// ConfirmPaymentPage.jsx
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearProducts } from '../../redux-toolkit/features/productSlice'
import Footer from '../footer/Footer'

const ConfirmPayment = () => {
  const navigate = useNavigate()
  const { carts } = useSelector(state => state.cartSlice)
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: ''
  })

  const handleBackToShop = () => {
    navigate('/')
  }

  const handleConfirmPayment = () => {
    dispatch(clearProducts)
    navigate('/order-tracking')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const dispatch = useDispatch()
  const formatPrice = price => {
    const roundedPrice = Math.round(price * 100) / 100
    return roundedPrice.toFixed(2)
  }
  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  return (
    <div className='max-w-[1200px] h-[1000px] mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Xác nhận thanh toán</h1>
      <div className='grid grid-cols-2 gap-8'>
        <div>
          <h2 className='text-xl font-bold mb-2'>Thông tin cá nhân</h2>
          <form className='space-y-4'>
            <div className='flex flex-col'>
              <label htmlFor='fullName' className='font-semibold'>
                Họ và tên:
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='phoneNumber' className='font-semibold'>
                Số điện thoại:
              </label>
              <input
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='address' className='font-semibold'>
                Địa chỉ:
              </label>
              <input
                type='text'
                id='address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
          </form>
        </div>
        <div>
          <h2 className='text-xl font-bold mb-2'>Thông tin đơn hàng</h2>
          {carts.length ? (
            <>
              {carts.map(item => (
                <div
                  key={item.id}
                  className=' border-white border-[3px] rounded-xl my-2 py-2 flex items-center space-x-3'
                >
                  <div className='w-16 h-16 mr-4'>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className='object-cover pl-2 w-[55px] h-[65px] rounded-lg'
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-bold '>
                      {item.title}{' '}
                      <span className='text-[11px] text-red-600 font-normal'>
                        - {item.discountPercentage} %
                      </span>
                    </p>
                    <div className='flex items-center space-x-2 mt-1'>
                      <span className='pr-2 text-sm'>{item.price}</span> x{' '}
                      {item.quantity}
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-sm font-medium mr-4'>
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
              <div className='flex justify-end items-center mt-4'>
                <p className='text-xl font-bold'>
                  Tổng cộng: {formatPrice(totalPrice)}đ
                </p>
              </div>
            </>
          ) : (
            'Chưa có sản phẩm'
          )}
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <button
          onClick={handleBackToShop}
          className='bg-blue-300 text-white py-3 px-6 rounded-lg font-bold hover:bg-purple-700'
        >
          Quay lại cửa hàng
        </button>
        <button
          onClick={handleConfirmPayment}
          className='bg-green-400 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-500'
        >
          Xác nhận thanh toán
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default ConfirmPayment
