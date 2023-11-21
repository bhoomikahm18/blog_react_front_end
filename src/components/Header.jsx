import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar position='sticky' sx={{ background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,19,121,1) 0%, rgba(0,212,255,1) 100%)` }}>
      <Toolbar>
        <Typography variant='h4'>Blog App</Typography>
        <Box display='flex' marginLeft={"auto"}>
          <Button variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
          <Button variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header