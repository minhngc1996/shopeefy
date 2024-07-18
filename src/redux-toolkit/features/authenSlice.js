import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  isOpenSignIn: false,
  //Lưu trữ trong localStorage
  userName: localStorage.getItem('userName'),
  isSignIn: false
}

export const authenSlice = createSlice({
  name: 'authenSlice',
  initialState,
  reducers: {
    doSignIn: (state, action) => {
      //lấy payload trong signInForm action.payload
      const { username, password } = action.payload
      if (username === 'minhnc' && password === '123456') {
        toast.success('Signed In Succesfull!', {
          duration: 2000,
          position: 'top-center',
          style: ''
        })
        localStorage.setItem('userName', username)
        localStorage.setItem('isSignIn', true)
        return {
          ...state,
          isOpenSignIn: false,
          username,
          isSignIn: true
        }
      } else {
        toast.error('This is an error!')
        return {
          ...state,
          isOpenSignIn: true,
          username: '',
          isSignIn: false
        }
      }
    },
    doSignOut: (state, action) => {
      localStorage.clear()
      toast.success('Signed Out Succesfull!', {
        duration: 2000,
        position: 'top-center',
        style: ''
      })
      return {
        ...state,
        isSignIn: false,
        username: ''
      }
    },
    updateStateOpenSignIn: (state, action) => {
      return {
        ...state,
        isOpenSignIn: action.payload
      }
    }
  }
})
export const { doSignIn, updateStateOpenSignIn, doSignOut } =
  authenSlice.actions
export default authenSlice.reducer
