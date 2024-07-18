import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../../service/ApiService'
import {
  clearProducts,
  listProduct
} from '../../redux-toolkit/features/productSlice'
import BoxProduct from '../boxproduct/BoxProduct'
import {
  Backdrop,
  Button,
  CircularProgress,
  Pagination,
  Stack,
  TextField
} from '@mui/material'
import ListCategory from '../../page/category/ListCategory'
import Footer from '../footer/Footer'

const ListProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productSlice.products)
  const [filterProduct, setFilterProduct] = useState({
    keySearch: '',
    skip: 0,
    limit: 16,
    total: 0
  })

  const [loading, setLoading] = useState(false)

  const fetchDataProduct = async () => {
    setLoading(true)
    const params = {
      q: filterProduct.keySearch,
      limit: filterProduct.limit,
      skip: filterProduct.skip
    }
    try {
      const res = await ApiService.GetListProduct(params)
      console.log('API Response:', res)
      const { products, total } = res
      setFilterProduct(prev => ({ ...prev, total }))
      dispatch(listProduct(products))
    } catch (error) {
      console.error('Error fetching products:', error)
    }
    setLoading(false)
  }

  const handleSearch = () => {
    dispatch(clearProducts())
    setFilterProduct(prev => ({ ...prev, skip: 0 }))
    fetchDataProduct()
  }

  useEffect(() => {
    fetchDataProduct()
  }, [filterProduct.skip])

  const handlePageChange = (event, value) => {
    setFilterProduct(prev => ({
      ...prev,
      skip: (value - 1) * filterProduct.limit
    }))
  }

  return (
    <>
      <div className='m-2 flex gap-2 items-center justify-center'>
        <TextField
          sx={{ width: '800px', fontFamily: 'monospace' }}
          size='small'
          id='outlined-basic'
          label='Search Name'
          variant='outlined'
          placeholder='Search by name ...'
          onChange={e =>
            setFilterProduct({
              ...filterProduct,
              keySearch: e.target.value
            })
          }
        />
        <Button
          onClick={handleSearch}
          variant='outlined'
          sx={{
            ':hover': {
              backgroundColor: 'rgb(29 78 216)',
              color: 'white',
              fontWeight: 'bolder'
            }
          }}
        >
          Search
        </Button>
      </div>
      <div>
        <div>
          <ListCategory />
        </div>
        <div className='flex flex-wrap gap-5 w-[1140px] my-0 mx-auto p-5'>
          {products.length > 0 ? (
            products.map(product => (
              <BoxProduct key={product.id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
      <div className='flex justify-center'>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(filterProduct.total / filterProduct.limit)}
            color='secondary'
            onChange={handlePageChange}
            page={filterProduct.skip / filterProduct.limit + 1}
          />
        </Stack>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Footer />
    </>
  )
}

export default ListProduct
