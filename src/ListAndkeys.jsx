import React, { useState } from "react";

export default function ListAndKeys() {
    const [objs, setObjs] = useState([
        { id: "1", name: "React"},
        { id: "2", name: "JS"},
        { id: "3", name: "CSS"},
        { id: "4", name: "HTML"},
        { id: "5", name: "SASS"},
        { id: "6", name: "Bootstrap"},
        { id: "7", name: "PHP"},
        { id: "8", name: "Symfony"},
        { id: "9", name: "TypeScript"},
        { id: "10", name: "Angular"}
    ]);

    const deleteObj = (id) => {
        let newObj = objs.filter((item) => item.id !== id);
        setObjs(newObj);
    };

    return (

        <>
            <div class="mt-20">
                <h1>Hello List & keys of Books</h1>
                <ul class="mt-6">
                    {objs.map((item, i) => {
                        return <li class="bg-white-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
                        key={item.id} 
                        onClick={() =>
                        deleteObj(item.id)}>{item.name}</li>;
                    })};
                </ul>
            </div>
        </>
    )
}