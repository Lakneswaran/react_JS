import React from "react";

export default class Newcomponent extends
React.Component{
    constructor() {
        super( )
        this.clicked = this.clicked.bind(this);
        this.addstudent = this.addstudent.bind(this);
        this.state = {
            name: "BeCode",
            students: 16
        }
    }

    clicked() {
       alert(1);
    }
    addstudent() {
        let students = this.state.students + 1
        // this.state.students += 1;
        // console.log(this.state.students);
        this.setState({
            ...this.state,
            students
        });
     }

    render() {
        return (
        <>
         <div className="text-4xl border-red-500 border-2 bg-yellow-100">Have a nice day { this.props.name }</div>
         <p>CampusName: {this.state.name}</p>
         <p>Students: {this.state.students}</p>
         <button onClick={this.clicked} className="border-blue-500 border bg-blue-300 hover:bg-blue-800">this button</button>
         <button onClick={this.addstudent} className="border-green-500 border bg-green-300 hover:bg-green-800">Add Student</button>
        </> 
        )
    }
}