import './App.css';
import Student from './Student/Student';
import students from './data';

function App() {
  return (
    <div>
      <h1>Students</h1>
      {students.map(student => {
        return <Student key={student.name} student={student}/>
      })}
    </div>
  );
}

export default App;
