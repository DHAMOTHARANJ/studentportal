import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Base({title, description, children}) {
    const navigate = useNavigate()
  return (
    <div className='main-container'>
        <header>
        <nav>
        <AppBar position="static">
  <Toolbar variant="dense">
    <div className='logo-pin'>
        <img src='https://th.bing.com/th/id/R.1817b101528fc28470f0ba999ec84e8b?rik=FyPD2I2JJJ8q1w&riu=http%3a%2f%2frailsgirls.com%2fimages%2fchennai%2fguvi.png&ehk=ujcz6g4bKldAgh7SlJW%2fbs0YjQU1EUBxZQgSWCoQi18%3d&risl=&pid=ImgRaw&r=0'/>
    </div>
    <IconButton edge="start" color="inherit" aria-label="Dashboard" sx={{ mr: 2 }} onClick={()=>navigate('/')}>
    Dashboard
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="students" sx={{ mr: 2 }} onClick={()=>navigate('/students')}>
        Employee
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="Add Students" sx={{ mr: 2 }} onClick={()=>navigate('/add-students')}>
        Add Employee
    </IconButton>
  </Toolbar>
</AppBar>
</nav>
    </header>
        <main>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <div className='container'>
                {children}
            </div>
        </main>
    </div>
  )
}

export default Base