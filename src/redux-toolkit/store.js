import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from './features/productSlice'
import categorySlice from './features/categorySlice'
import authenSlice from './features/authenSlice'
import cartSlice from './features/cartSlice'
const reducer = combineReducers({
  productSlice,
  categories: categorySlice,
  authenSlice,
  cartSlice
})
const store = configureStore({
  reducer
})

export default store
