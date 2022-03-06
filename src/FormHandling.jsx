import React, { useState } from "react";

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
        setBookName(e.target.value)
;    };

    return (
        <>
            <div>
                <form onSubmit={submitForm}>
                    <input type="text" placeholder="Change book name"
                    value={bookName} onChange={changeBookNameFunc}></input>
                    <button className="border-gray-500 border bg-gray-300 hover:bg-gray-800" type="submit">Change name</button>
                </form>
               <p> Bookname: {bookName} </p>
            </div>

        </>
    );


}