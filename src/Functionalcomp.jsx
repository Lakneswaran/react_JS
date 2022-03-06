import React, { useEffect, useState } from "react";


export default function Functionalcomp(props) {
    // State in Functional component

    const [bookName, setBookName ] = useState("React");
    const [student, setStudent ] = useState(16);


    const clicked = e => {
        console.log(e);
        // alert(1);
    };
    const stateFun = e => {
        setStudent(student + 1)
    };

    // UseEffect in functional component

    console.log("This is constructor inside the function");
    useEffect(() => {
        console.log("This is componentDidMount");
        // Api call / ajax
        return () => {
            console.log("componentWillUnmount")
        };
    }, []);
    // We can use multiple times.
    useEffect(() => {
        console.log("Students Increased");
    }, [student]);

    return (
    <>  
        <div>
         <p>Book name: {bookName}</p>   
         <p>Students: {student}</p>   
         <button className="border-red-500 border bg-red-300 hover:bg-red-800" onClick={stateFun}>Click me</button> 
        </div>
        <div> Hello from Func comp</div>
        <button className="border-blue-500 border bg-blue-300 hover:bg-blue-800" onClick={clicked}>Click me</button> 
         
    </> 
    );
}