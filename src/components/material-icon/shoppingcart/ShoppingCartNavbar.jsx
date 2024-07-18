import * as React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))

export default function ShoppingCartNavbar () {
  const { carts } = useSelector(state => state.cartSlice)
  const { isSignIn } = useSelector(state => state.authenSlice)

  return (
    <IconButton aria-label='cart'>
      {!isSignIn ? (
        <ShoppingCartIcon />
      ) : (
        <StyledBadge badgeContent={carts.length} color='warning'>
          <ShoppingCartIcon />
        </StyledBadge>
      )}
    </IconButton>
  )
}
