// ProductByCategory.jsx
import React, { useEffect, useState } from 'react'
import ApiService from '../../service/ApiService'
import { useParams } from 'react-router-dom'
import BoxProduct from './BoxProduct'
import ListCategory from '../../page/category/ListCategory'
import Footer from '../footer/Footer'

const ProductByCategory = () => {
  const { categoryUrl } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const res = await ApiService.GetListCategoryToProduct(categoryUrl)
        setProducts(res.products)
      } catch (error) {
        console.error('Error fetching products by category:', error)
      }
    }

    fetchProductsByCategory()
  }, [categoryUrl])

  return (
    <>
      <ListCategory />
      <div className='flex flex-wrap gap-5 w-[1140px] my-0 mx-auto p-5'>
        {products.length > 0 ? (
          products.map((product, index) => (
            <BoxProduct key={index} product={product} />
          ))
        ) : (
          <p className='text-gray-500'>No products found in this category</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default ProductByCategory
