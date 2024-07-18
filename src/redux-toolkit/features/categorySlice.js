import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ApiService from '../../service/ApiService'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await ApiService.GetCategories()
    return response.products
  }
)

const initialState = {
  categories: [],
  status: 'idle',
  error: null
}

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default categorySlice.reducer
