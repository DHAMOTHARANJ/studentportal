import React, { useState } from 'react'
import Base from '../Base/Base'
import AddStudents from './AddStudents'
import EditStudents from './EditStudents'

function Students({students, setStudents}) {
  const [studId, setStudId] = useState("")
    const deleteStusent = (studentID)=>{
      const removedStudents = students.filter((student, idx)=>student.id !== studentID)
      console.log(removedStudents)
      setStudents(removedStudents)
    }
  return (
    <Base
    title={"All Students Info"}
    description={"All students info available here"}
    >
      <AddStudents
      students = {students}
      setStudents = {setStudents}
      />
      <EditStudents
      studId = {studId}
      students = {students}
      setStudents = {setStudents}
      />
     <div className='student-collection'>
    {students.map((stud, idx)=>(
            <div className='student-card' key={stud.id}>
            <h2>{stud.name}</h2>
            <p>{stud.batch}</p>
            <div className='card-btn-group'>
                <button onClick={()=>setStudId(stud.id)}>Edit</button>
                <button onClick={()=>deleteStusent(stud.id)}>Delete</button>
            </div>
            </div>
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