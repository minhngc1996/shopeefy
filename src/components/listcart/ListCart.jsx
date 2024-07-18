import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem
} from '../../redux-toolkit/features/cartSlice'
import { useNavigate } from 'react-router-dom'

const ListCart = ({ cartState }) => {
  const { carts } = useSelector(state => state.cartSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleIncrement = id => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = id => {
    const item = carts.find(item => item.id === id)
    if (item && item.quantity > 1) {
      dispatch(decrementQuantity(id))
    } else {
      dispatch(removeItem(id))
    }
  }

  const handleRemove = id => {
    dispatch(removeItem(id))
  }

  const formatPrice = price => {
    const roundedPrice = Math.round(price * 100) / 100
    return roundedPrice.toFixed(2)
  }

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const handlePurchase = () => {
    navigate('/confirm-payment')
    return cartState === false
  }

  return (
    <div className='p-4'>
      {carts.length ? (
        <>
          {carts.map(item => (
            <div
              key={item.id}
              className='border border-gray-200 my-2 py-2 flex items-center space-x-3 '
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
                  <span className='pr-2 text-sm'>{item.price}</span> x
                  <button
                    className=' hover:text-red-600'
                    onClick={() => handleDecrement(item.id)}
                  >
                    <RemoveCircleOutlineRoundedIcon />
                  </button>
                  <span className=' text-sm'>{item.quantity}</span>
                  <button
                    className=' hover:text-green-600'
                    onClick={() => handleIncrement(item.id)}
                  >
                    <AddCircleOutlineRoundedIcon />
                  </button>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='text-sm font-medium mr-4'>
                  {formatPrice(item.price * item.quantity)}
                </p>
                <DeleteIcon
                  className='cursor-pointer text-gray-500 hover:text-gray-700'
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          ))}
          <div className='flex justify-end items-center mt-4'>
            <p className='text-xl font-bold'>
              Total Products: {formatPrice(totalPrice)}đ
            </p>
          </div>
          <div className='flex items-center space-x-2 mt-1 bg-orange-300 hover:bg-orange-500 p-3 w-full justify-center content-center rounded-xl cursor-pointer'>
            <button onClick={handlePurchase} className='font-bold text-white'>
              Purchase
            </button>
          </div>
        </>
      ) : (
        'Chưa có sản phẩm'
      )}
    </div>
  )
}

export default ListCart
