// DetailProduct.jsx
import React, { useEffect, useState } from 'react'
import ApiService from '../../service/ApiService'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import RatingStart from '../ratingstart/RatingStart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { addToCart } from '../../redux-toolkit/features/cartSlice'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded'
import { Backdrop, CircularProgress } from '@mui/material'
import { updateStateOpenSignIn } from '../../redux-toolkit/features/authenSlice'
import ProductHome from './ProductHome'

const DetailProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [mainImage, setMainImage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [detailProduct, setDetailProduct] = useState({
    id: '',
    title: '',
    price: '',
    rating: '',
    thumbnail: '',
    images: [],
    category: '',
    description: ''
  })
  const { isSignIn } = useSelector(state => state.authenSlice)
  const [searchParams] = useSearchParams()
  const idParam = searchParams.get('id')

  useEffect(() => {
    const fetchDetailProduct = async () => {
      try {
        const productDetail = await ApiService.GetDetailProduct(idParam)
        setDetailProduct(productDetail)
        setMainImage(productDetail.thumbnail)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching product detail:', error)
        setIsLoading(false)
      }
    }

    if (idParam) {
      fetchDetailProduct()
    }
  }, [idParam])

  const handleAddToCart = () => {
    if (isSignIn) {
      const productToAdd = { ...detailProduct, quantity: 1 }
      dispatch(addToCart(productToAdd))
    } else {
      dispatch(updateStateOpenSignIn(true))
    }
  }

  const handleImageClick = image => {
    setMainImage(image)
  }

  const buyNow = () => {
    if (isSignIn) {
      // Xử lý khi nhấn nút Mua Ngay
      const productToAdd = { ...detailProduct, quantity: 1 }
      dispatch(addToCart(productToAdd))
    } else {
      dispatch(updateStateOpenSignIn(true))
    }
  }

  return (
    <div className='flex flex-col max-w-6xl mx-auto p-5 rounded-lg'>
      <button
        onClick={() => {
          navigate('/product')
        }}
        className='bg-white-100 font-mono font-bold text-purple-700 py-2 px-4 mb-3 rounded-lg border border-white cursor-pointer hover:bg-purple-700 hover:text-white self-start'
      >
        Back
      </button>
      {isLoading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <div key={detailProduct.id} className='flex flex-col md:flex-row gap-5'>
          <div className='flex flex-col items-center'>
            <div className='main_images mb-4'>
              <img
                src={mainImage}
                alt={detailProduct.title}
                className='w-72 h-72 rounded-lg object-cover border border-gray-300'
              />
            </div>
            <div className='list_images flex flex-wrap justify-center gap-2 items-center '>
              {detailProduct.images.map((img, index) => (
                <img
                  onClick={() => handleImageClick(img)}
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className='w-16 h-16 rounded-lg object-cover border border-gray-300 hover:border-2 hover:border-black cursor-pointer'
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col justify-center text-center items-center md:w-1/2'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-2'>
              {detailProduct.title}
            </h1>
            <h5 className='text-xl text-orange-300 mb-2'>
              {detailProduct.price} USD
            </h5>
            <div className='rating  flex justify-center items-center ml-[80px] mb-2'>
              <span className='font-bold text-yellow-500'>
                <RatingStart rating={detailProduct.rating} />
              </span>
            </div>
            <p className='text-sm text-gray-600 mb-2'>
              <span className='font-bold'>Category:</span>{' '}
              {detailProduct.category}
            </p>
            <p className='text-sm text-gray-700 mb-4'>
              <span className='font-bold'>Description:</span>{' '}
              {detailProduct.description}
            </p>
            <div className='flex gap-3'>
              <button
                onClick={handleAddToCart}
                className='bg-blue-300 font-mono font-bold py-2 px-4 text-white rounded-full hover:bg-purple-700 transition duration-300'
              >
                <AddShoppingCartIcon />
                <span>ADD TO CART</span>
              </button>
              <button className='bg-orange-300 py-2 px-4 font-mono font-bold text-white rounded-full hover:bg-orange-500 transition duration-300'>
                <FavoriteRoundedIcon />
                <span>ADD WISHLIST</span>
              </button>
              <button
                onClick={() => buyNow(detailProduct)}
                className='bg-green-300 py-2 px-4 font-mono font-bold text-white rounded-full hover:bg-green-500 transition duration-300'
              >
                <InventoryRoundedIcon />
                <span className='font-mono font-bold'>BUY NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Sử dụng isLoading để hiển thị loading cho phần dưới của trang */}
      {isLoading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <div>
          <h1 className='text-center font-bold text-4xl font-mono '>
            Random Products
          </h1>
          {/* Hiển thị các sản phẩm ngẫu nhiên ở đây */}
          <ProductHome />
        </div>
      )}
    </div>
  )
}

export default DetailProduct
