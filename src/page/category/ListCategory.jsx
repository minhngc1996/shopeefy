// ListCategory.jsx
import React, { useEffect, useState } from 'react'
import ApiService from '../../service/ApiService'
import TableCategory from './TableCategory'
import { Link } from 'react-router-dom'

const ListCategory = () => {
  const [listCategory, setListCategory] = useState([])

  const fetchDataListCategory = async () => {
    try {
      const res = await ApiService.ApiGetListCategory()
      setListCategory(res)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  useEffect(() => {
    fetchDataListCategory()
  }, [])

  return (
    <div className='rounded-lg p-4 max-h-[160px] overflow-x-auto mb-4'>
      <div className='grid grid-cols-6 gap-1'>
        {listCategory.length > 0 ? (
          listCategory.map((item, index) => (
            <Link key={index} to={`/category/${item.name}`}>
              <TableCategory data={item} />
            </Link>
          ))
        ) : (
          <p className='text-gray-500'>No categories found</p>
        )}
      </div>
    </div>
  )
}

export default ListCategory
