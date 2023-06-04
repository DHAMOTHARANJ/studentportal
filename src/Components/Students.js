import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import { Button, Paper } from '@mui/material'

function Students({students, setStudents}) {
  const navigate = useNavigate()
    const deleteStusent = (studentID)=>{
      const removedStudents = students.filter((student, idx)=>student.id !== studentID)
      console.log(removedStudents)
      setStudents(removedStudents)
    }
  return (
    <Base
    title={"All Employee Info"}
    description={"All Employee info available here"}
    >
     <div className='student-collection'>
        {students.map((stud, idx)=>(
          <Paper elevation={6} className='student-card' key={stud.id}>
            <h2>{stud.name}</h2>
            <h4>{stud.role}</h4>
            <p>{stud.education}</p>
            <p>{stud.batch}</p>
            <div className='card-btn-group'>
              <Button className='edit-btn'
                onClick={()=>navigate(`/edit/${stud.id}`)} variant="outlined">
              Edit</Button>
              <Button
                onClick={()=>deleteStusent(stud.id)} variant="outlined" color="error">
              Delete</Button>
            </div>
          </Paper>
    ))}
    </div>   
    </Base>
  )
}
export default Students;
// export const studentValiationSchema = yup.object({
//   nameyup.string().required("please fill the name details"),
//   batch : yup.string().required("Please fill the batch details")
//   .min(5,"Hey please fill proper"),
//   gender:yup.string().required("dsbdh"),
//   education:yup.string().required("fhgdf")
// })