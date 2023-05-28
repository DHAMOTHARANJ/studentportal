import React, { useEffect, useState } from 'react'

function EditStudents({studId, students, setStudents}) {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [batch, setBatch] = useState("")
  useEffect(()=>{
    const studentData = students.find(stud=> stud.id === studId);
    if(studentData){
    setId(studentData.id)
    setName(studentData.name)
    setBatch(studentData.batch)
    }
  }, [studId, students])
  const updateStudent =()=>{
    // console.log(studId)
    const studIndex = students.findIndex((stud)=>stud.id === studId)
   
    const updatedStudent = {
      id,
      name,
      batch
    }
    
    students[studIndex] = updatedStudent  
    setStudents([...students])  
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
        <button
        onClick={updateStudent}
        >Update student</button>
        </div>
    </div>
  )
}

export default EditStudents