import React, { useEffect, useRef, useState } from "react";

export default function FormHandling() {

    const [bookName, setBookName ] = useState("React");
    const [student, setStudent ] = useState(16);
    const [bookContent, setBookContent ] = useState([
        "JS",
        "React",
        "Internship"
    ]);

    // Form - define functions
    const submitForm = (e) => {
        e.preventDefault();
    };

    const changeBookNameFunc = (e) => {
        setBookName(e.target.value);   
     };

     const inputEl = useRef(null);

     console.log(inputEl);
     useEffect(() => {
        console.log(inputEl);
        inputEl.current.focus();
     }, []);

    return (
        <>
            <div>
                <form onSubmit={submitForm}>
                    <input type="text" placeholder="Change book name"
                    value={bookName} onChange={changeBookNameFunc}
                    ref={inputEl} />
                    <button className="border-gray-500 border bg-gray-300 hover:bg-gray-800" type="submit">Change name</button>
                </form>
               <p> Bookname: {bookName} </p>
            </div>

        </>
    );


}