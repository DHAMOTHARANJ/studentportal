import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import { Button, InputLabel, TextField } from '@mui/material'

function AddStudents({students, setStudents}) {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [batch, setBatch] = useState("")
  const [role, setRole] = useState("")
  const [education, setEducation] = useState("")
  const navigate = useNavigate()
  const handleAddStudent = ()=>{
    const newStudent ={
      id,
      name,
      batch,
      role,
      education
    }
    console.log(newStudent)
    setStudents([...students, newStudent])
    navigate('/students')
  } 
  return (
    <Base
    title={"Add new Employee Info"}
    description={"Fill the form to add new Employee Info"}
    >
    <div className='form-group'>
       <div className='boxes-group'>
        <TextField className='boxes' label="ID" variant="filled" color="success" focused 
        placeholder='Enter ID of student'
        type='number'
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />
        <TextField className='boxes' label="Name" variant="filled" color="success" focused 
        placeholder='Enter Name of student'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <TextField className='boxes' label="Role" variant="filled" color="success" focused 
        placeholder='Enter Role of student'
        type='text'
        value={name}
        onChange={(e)=>setRole(e.target.value)}
        />
        <TextField className='boxes' label="Education" variant="filled" color="success" focused 
        placeholder='Enter Education of student'
        type='text'
        value={name}
        onChange={(e)=>setEducation(e.target.value)}
        />
        <TextField className='boxes' label="Batch" variant="filled" color="success" focused 
        placeholder='Enter Batch of student'
        type='text'
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />
        </div> 
        <div  className='submit-btn'>
        <Button id='submit-btn' onClick={handleAddStudent}
        variant="contained" color="success">
            Submit
        </Button>
        </div>
    </div>
    </Base>
  )
}
export default AddStudents