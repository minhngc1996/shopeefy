import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { updateStateOpenSignIn } from './../../redux-toolkit/features/authenSlice'
import { addToCart } from '../../redux-toolkit/features/cartSlice'

const BoxProduct = ({ product }) => {
  const dispatch = useDispatch()
  const isSignIn = useSelector(state => state.authenSlice.isSignIn)

  const handleAddToCart = item => {
    if (isSignIn) {
      dispatch(
        addToCart({
          ...item,
          quantity: 1
        })
      )
    } else {
      dispatch(updateStateOpenSignIn(true))
    }
  }
  if (!product) {
    return null
  }
  return (
    <div
      className='border border-gray-300 rounded-lg bg-white shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300 cursor-pointer w-[calc(25%-20px)] relative'
      key={product.id}
    >
      <Link to={`/product/detail-product?id=${product.id}`} className='block'>
        <img
          className='w-full h-[200px] object-cover border-b border-gray-300'
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>
      <div className='p-4'>
        <div className='text-lg font-semibold text-gray-800 mb-2 text-center line-clamp-1'>
          <h3>{product.title}</h3>
        </div>
        <div className='flex justify-between items-end mt-auto'>
          <p className='text-gray-600'>{`$${product.price}`}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className='bg-blue-700 font-mono font-bold text-white py-2 px-2 rounded-full hover:bg-purple-700 transition duration-300'
            title='Order this product'
          >
            <AddShoppingCartIcon />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BoxProduct
