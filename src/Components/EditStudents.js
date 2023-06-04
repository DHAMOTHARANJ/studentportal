import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

function EditStudents({studId, students, setStudents}) {
  const {id} = useParams()
  const navigate = useNavigate()
  const [idx, setIdx] = useState("")
  const [name, setName] = useState("")
  const [batch, setBatch] = useState("")
  const [role, setRole] = useState("")
  const [education, setEducation] = useState("")
  useEffect(()=>{
    const studentData = students.find(stud=> stud.id === id);
    if(studentData){
    setIdx(studentData.id)
    setName(studentData.name)
    setRole(studentData.role)
    setEducation(studentData.education)
    setBatch(studentData.batch)
    }
  }, [id, students])
  const updateStudent =()=>{
    // console.log(studId)
    const studIndex = students.findIndex((stud)=>stud.id === id)
   
    const updatedStudent = {
      id,
      name,
      batch,
      role,
      education
    }
    
    students[studIndex] = updatedStudent  
    setStudents([...students]) 
     navigate('/students')
  }
  return (
    <Base
    title={"Edit the Employee Details"}
    description={"Fill the form to Edit the Employee Detail"}
    >
    <div className='form-group'>
        <TextField
          className='boxes'
          label="ID"
          variant="standard"
          color="warning"
          focused
        placeholder='Enter ID of student'
        type='number'
        value={idx}
        onChange={(e)=>setIdx(e.target.value)}
        />
        <TextField
          className='boxes'
          label="Name"
          variant="standard"
          color="warning"
          focused
        placeholder='Enter Name'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
         <TextField
          className='boxes'
          label="Role"
          variant="standard"
          color="warning"
          focused
        placeholder='Enter Role'
        type='text'
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        />
         <TextField
          className='boxes'
          label="Name"
          variant="standard"
          color="warning"
          focused
        placeholder='Enter Education'
        type='text'
        value={education}
        onChange={(e)=>setEducation(e.target.value)}
        />
        <TextField
          className='boxes'
          label="Batch"
          variant="standard"
          color="warning"
          focused
        placeholder='Enter Batch'
        type='text'
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />
        <div className='submit-btn'> 
        <Button id='submit-btn' onClick={updateStudent}
        variant="contained" color="success">
            Update Info
        </Button>
        </div>
    </div>
    </Base>
  )
}

export default EditStudents