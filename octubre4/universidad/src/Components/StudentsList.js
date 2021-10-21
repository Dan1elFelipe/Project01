import React from "react";

export class StudentList extends React.Component{

    /*
        {
        id: 101112,
        name: "Carlos Mario Tobon",
        age: 45,
        semester: 2
        }
    */ 

    render(){        
        const {students}= this.props;
        console.log("students = ", students);
        const studentRows = students.map(st => {
            return(<tr key={st.id}>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>{st.semester}</td>
            </tr>);
        });

        console.log("studentRows: ", studentRows);
        return(
            <table>
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Semestre</th>
                    </tr>
                </thead>
                <tbody>
                    {studentRows}
                </tbody>
            </table>
        );
    }
}