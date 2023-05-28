import React, { useState } from 'react'

function AddStudents({students, setStudents}) {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [batch, setBatch] = useState("")
  const handleAddStudent = ()=>{
    const newStudent ={
      id,
      name,
      batch
    }
    console.log(newStudent)
    setStudents([...students, newStudent])
    setId("")
    setName("")
    setBatch("")
  } 
  return (
    <div className='form-group'>
        <h4>Add-Students</h4>
        <input
        placeholder='Enter ID of student'
        type='number'
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />
        <input
        placeholder='Enter Name of student'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input 
        placeholder='Enter Batch of student'
        type='text'
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />
        <div>
        <button onClick={handleAddStudent}>Add student</button>
        </div>
    </div>
  )
}
export default AddStudents