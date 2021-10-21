import React from 'react';
import './App.css';
import StudentForm from './Components/StudentForm';
import { StudentList } from './Components/StudentsList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.onFormSubmitted = this.onFormSubmitted.bind(this);
    this.state = {
      students: [
        {id: 101112, name: "Carlos Mario Tobon", age: 45, semester: 2 },
        {id: 101113, name: "Daniel felipe Lubo", age: 32, semester: 2 },
        {id: 101114, name: "Antonio Sanin", age: 40, semester: 2 },    
        {id: 101115, name: "Jesus Ortega", age: 20, semester: 4 }
      ]
    }
  }    

  onFormSubmitted(event){
    event.preventDefault();
    console.log("formSubmitted", event);
  }

  render(){
      return (
      <div>       
        <StudentForm onFormSubmit={this.onFormSubmitted}/> 
        <StudentList students={this.state.students}/>        
      </div>
    );
  }  
}

export default App;
