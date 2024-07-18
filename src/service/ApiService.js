import axios from 'axios'
const URL_DETAIL_PRODUCT = 'https://dummyjson.com/products'
const URL_API = 'https://dummyjson.com/products/search'
const URL_CATEGORIES = 'https://dummyjson.com/products/categories'
const URL_CATEGORIES_TO_PRODUCTS = 'https://dummyjson.com/products/category'

const ApiService = {
  GetListProduct: async params => {
    try {
      const res = await axios.get(URL_API, { params, limit: 16 })
      return res.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },
  GetListHomeProduct: async () => {
    const res = await axios(URL_API, {
      params: {
        limit: 10
        // skip: 60
      }
    })
    return res.data
  },
  GetRanDomProduct: async () => {
    const res = await axios(URL_API, {
      params: {
        limit: 194
      }
    })
    const products = res.data.products
    if (products.length > 0) {
      const indices = Array.from(
        { length: products.length },
        (_, index) => index
      )
      //Random mảng
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[indices[i], indices[j]] = [indices[j], indices[i]]
      }
      //Lấy 10 sản phẩm ngẫu nhiên
      const randomProducts = indices.slice(0, 8).map(index => products[index])
      return { products: randomProducts }
    }
    return { products: [] }
  },
  GetDetailProduct: async id => {
    const res = await axios(`${URL_DETAIL_PRODUCT}/${id}`)
    return res.data
  },
  GetListCategoryProduct: async category => {
    const res = await axios(`${URL_API}/category/${category}`)
    return res.data
  },
  GetCategories: async () => {
    const res = await axios(URL_API, {
      params: {
        limit: 20
      }
    })
    console.log(res.data)
    return res.data
  },
  ApiGetListCategory: async () => {
    try {
      const res = await axios.get(`${URL_CATEGORIES}`)
      return res.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  },
  GetListCategoryProduct: async categoryUrl => {
    const res = await axios(`${URL_CATEGORIES}/${categoryUrl}`)
    return res.data
  },
  GetListCategoryToProduct: async categoryUrl => {
    const res = await axios(`${URL_CATEGORIES_TO_PRODUCTS}/${categoryUrl}`)
    return res.data
  }
}

export default ApiService
