import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingCartNavbar from '../material-icon/shoppingcart/ShoppingCartNavbar'
import { useDispatch, useSelector } from 'react-redux'
import AccountIcon from '../material-icon/accountIcon/AccountIcon'
import { updateStateOpenSignIn } from '../../redux-toolkit/features/authenSlice'
import Login from '../login/Login'
import ListCart from '../listcart/ListCart'
import { setCartState } from '../../redux-toolkit/features/cartSlice'

const drawerWidth = 400

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    }),
    position: 'relative'
  })
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  })
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

const listMenu = [
  { title: 'Home', to: '' },
  { title: 'Product', to: 'product' },
  { title: 'Career', to: 'career' },
  { title: 'Support', to: 'support' }
]

const navLinkClass = ({ isActive }) => {
  return isActive
    ? 'active text-purple-700 py-2 px-4 rounded transition duration-300 font-normal'
    : ''
}

export default function Navbar () {
  const theme = useTheme()
  const dispatch = useDispatch()
  // const [open, setOpen] = React.useState(false)
  const { cartState } = useSelector(state => state.cartSlice)
  const { isSignIn, userName } = useSelector(state => state.authenSlice)
  const { carts } = useSelector(state => state.cartSlice)
  const handleDrawerOpen = () => {
    if (isSignIn) {
      // setOpen(true)
      dispatch(setCartState(true))
    } else {
      dispatch(updateStateOpenSignIn(true))
    }
  }

  const handleDrawerClose = () => {
    // setOpen(false)
    dispatch(setCartState(false))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        open={cartState}
        style={{
          'background-image': 'linear-gradient(to right, #E9D5FF, #FCE7F3)'
        }}
        sx={{
          padding: '5px 80px 4px 80px',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: 'none'
        }}
      >
        {/* {
                // background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
              } */}
        <Toolbar>
          <Typography variant='h6' noWrap sx={{ flexGrow: 1 }} component='div'>
            <div className='flex justify-between rounded-xl '>
              <ul>
                <li className='text-4xl font-bold '>
                  <Link
                    className=' py-2 px-4 rounded-[8px] transition duration-300 font-mono'
                    to={''}
                  >
                    Shopeefy
                  </Link>
                </li>
              </ul>
              <ul className='flex space-x-8'>
                {listMenu.map((menu, index) => (
                  <li
                    key={index}
                    className='hover:text-purple-700 font-mono text-[#34323d] py-2 px-4 text-lg rounded transition duration-300 font-normal'
                  >
                    <NavLink to={menu.to} className={navLinkClass}>
                      {menu.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className='flex'>
                <li className='flex hover:text-purple-700 py-2 px-4 rounded transition duration-300 font-bold text-xl'>
                  <div>
                    {isSignIn ? (
                      <div className='flex items-center'>
                        <AccountIcon />
                        <span className='ml-2'>{userName}</span>
                      </div>
                    ) : (
                      <Login />
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </Typography>
          <div className=' hover:text-purple-700 rounded-xl transition duration-300 font-bold'>
            <IconButton
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerOpen}
              sx={{
                ...(cartState && {
                  '&:hover': {
                    backgroundColor: '#f9a8d4',
                    color: 'white'
                  }
                })
              }}
            >
              <ShoppingCartNavbar />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Main
        open={cartState}
        style={{
          'background-image': 'linear-gradient(to right, #E9D5FF, #FCE7F3)'
        }}
      >
        <DrawerHeader />
        <Outlet />

        {/* Hiển thị body page */}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          }
        }}
        variant='persistent'
        anchor='right'
        open={cartState}
      >
        <DrawerHeader>
          <div className='p-0 pr-0 transition duration-300'>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <ShoppingCartIcon />
            <span className='ml-4'>Shopping Cart</span>
          </div>
        </DrawerHeader>
        <Divider />
        {/* Giỏ hàng */}
        <ListCart cartState={cartState} />
      </Drawer>
    </Box>
  )
}
