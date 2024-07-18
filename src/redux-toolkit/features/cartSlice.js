import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const initialState = {
  carts: [],
  cartState: false
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { carts } = state
      const { payload } = action
      toast.success(`Add ${action.payload.title} product successfully`)
      const isCheck = carts.some(prod => prod.id === payload.id)
      if (!isCheck) {
        return {
          ...state,
          carts: [...carts, payload]
        }
      } else {
        const updateCarts = carts.map(item =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
        return {
          ...state,
          carts: updateCarts
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.carts.find(cart => cart.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.carts.find(cart => cart.id === action.payload)
      if (item && item.quantity > 0) {
        item.quantity -= 1
      }
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter(cart => cart.id !== action.payload)
    },
    clearCart: state => {
      state.items = []
    },
    setCartState: (state, action) => {
      return {
        ...state,
        cartState: action.payload
      }
    }

    // reduceItem: (state,action) => {
    //     const {carts} = state
    //     const cartItem = carts.find(i => i.id = action.payload)
    //     if(cartItem.quantity > 1) {
    //         const updateCarts = carts.map((item) => )
    //     }
    // }
  }
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  setCartState
} = cartSlice.actions
export default cartSlice.reducer
