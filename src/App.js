import { useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { data } from './Data/data';

function App() {
  const [students, setStudents] = useState(data)
  return (
    <div className="App">
      <Students
      students = {students}
      setStudents = {setStudents}
      />
    </div>
  );
}

export default App;
