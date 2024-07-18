import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import LoginIcon from '@mui/icons-material/Login'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import {
  doSignIn,
  updateStateOpenSignIn
} from '../../redux-toolkit/features/authenSlice'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

export default function Login () {
  const dispatch = useDispatch()
  const { isOpenSignIn } = useSelector(state => state.authenSlice)
  //State chứa data username và password
  const [formSignIn, setFormSignIn] = React.useState({
    //Trùng với name của TextField
    username: '',
    password: ''
  })

  const handleClickOpenSignIn = () => {
    dispatch(updateStateOpenSignIn(true))
  }
  const handleClose = () => {
    dispatch(updateStateOpenSignIn(false))
  }
  const handleChange = e => {
    const { name, value } = e.target
    setFormSignIn({
      ...formSignIn,
      [name]: value
    })
  }
  const handleSingIn = () => {
    console.log(formSignIn, 'formSignInformSignIn')
    //Lấy thông tin đưa vào redux
    dispatch(doSignIn(formSignIn))
  }
  console.log(isOpenSignIn, 'isOpenSignIn')

  return (
    <React.Fragment>
      <Button
        sx={{
          fontFamily: 'monospace',
          border: 'none',
          color: 'black',
          fontWeight: 'bolder',
          fontSize: '20',
          ':hover': {
            color: 'rgb(126 34 206)',
            border: 'none'
          }
        }}
        variant='outlined'
        onClick={handleClickOpenSignIn}
      >
        <LoginIcon sx={{ margin: '0 8px 0 0' }} />
        Sign In
      </Button>
      <Dialog
        sx={
          {
            // backgroundColor: '#FFF0F5'
          }
        }
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={isOpenSignIn}
        maxWidth='xs'
        fullWidth
      >
        <DialogTitle
          style={{
            'background-image': 'linear-gradient(to right, #E9D5FF, #FCE7F3)'
          }}
          sx={{
            m: 0,
            p: 2,
            textAlign: 'center',
            fontWeight: 'bolder',
            fontSize: '30px',
            color: 'rgb(126 34 206)',
            position: 'relative'
          }}
          id='customized-dialog-title'
        >
          Sign In
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              color: 'white',
              position: 'absolute',
              right: 8,
              top: 8
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className='bg-white'>
          <Box
            component='form'
            className='flex flex-col items-center space-y-4'
            noValidate
            autoComplete='off'
          >
            <TextField
              //Lấy giá trị ô input bằng onChange
              onChange={handleChange}
              name='username'
              fullWidth
              id='username'
              label='Username'
              variant='outlined'
              className='w-full'
              InputProps={{
                style: {
                  borderColor: 'black'
                }
              }}
              InputLabelProps={{
                style: {
                  color: 'black'
                }
              }}
            />
            <TextField
              //Lấy giá trị ô input bằng onChange
              onChange={handleChange}
              name='password'
              fullWidth
              id='password'
              label='Password'
              type='password'
              variant='outlined'
              className='w-full'
              InputProps={{
                style: {
                  borderColor: 'black'
                }
              }}
              InputLabelProps={{
                style: {
                  color: 'black'
                }
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleSingIn}
            sx={{
              backgroundColor: 'rgb(29 78 216)',
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              padding: '3px 7px 3px 7px',
              fontWeight: 'bolder',
              ':hover': {
                backgroundColor: 'rgb(126 34 206)'
              }
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: '#FF715B',
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              padding: '3px 7px 3px 7px',
              fontWeight: 'bolder',
              ':hover': {
                backgroundColor: 'red'
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
