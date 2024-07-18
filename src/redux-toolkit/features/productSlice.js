import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    listProduct: (state, action) => {
      return {
        ...state,
        products: action.payload
      }
    },
    clearProducts: state => {
      state.products = []
    }
  }
})

export const { listProduct, state, clearProducts } = productSlice.actions
export default productSlice.reducer
