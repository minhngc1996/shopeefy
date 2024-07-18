import React from 'react'
import { Paper, Typography } from '@mui/material'

const TableCategory = ({ data }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <Typography variant='body1' color='textPrimary'>
        {data.name}
      </Typography>
    </Paper>
  )
}

export default TableCategory
