import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BoxProduct from '../boxproduct/BoxProduct'
import ApiService from '../../service/ApiService'
import { listProduct } from '../../redux-toolkit/features/productSlice'

const ProductHome = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const randomProducts = useSelector(state => state.productSlice.products)

  const fetchHomeProduct = async () => {
    try {
      const res = await ApiService.GetRanDomProduct()
      dispatch(listProduct(res.products))
    } catch (error) {
      console.error('Error fetching home products:', error)
    }
  }

  useEffect(() => {
    fetchHomeProduct()
  }, [])

  return (
    <>
      <div>
        <div className='flex flex-wrap gap-5 w-[1140px] my-4 mx-auto bg-pink-50'>
          {randomProducts.length > 0 ? (
            randomProducts.map(product => (
              <BoxProduct key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        <div className='flex justify-center'>
          <button
            onClick={() => navigate('product')}
            className='bg-purple-100 py-3 px-5 mb-2 font-mono text-blue-700 font-normal rounded-lg border border-white cursor-pointer hover:bg-purple-700 hover:text-white transition-transform transform hover:-translate-y-1'
          >
            <h5>More Products</h5>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductHome
