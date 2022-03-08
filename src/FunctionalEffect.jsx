import React, { useEffect, useState } from "react";

        // componentWIllUnMount
    function TestingUnMount(){

        console.log('Re-rendered')
        useEffect(() => {
            console.log('Created')
            return () =>{
                console.log("I'm destroying");
            }   // componentWillUnMount
        }, [])
        return 'TestingUnMount'
    }


export default function FunctionalEffect() {

            const [val1, setVal1] = useState(10);
            const [val2, setVal2] = useState(10);
            // console.log('Re-render');
            useEffect(() =>{
                console.log('UseEffect')
                setVal2(val1 * 2);
            }, [val1])

            // API call - componentDidMount

            const [todo, setTodo] = useState({});
            useEffect(() =>{
                fetch('https://jsonplaceholder.typicode.com/1')
                .then(response => response.json())
                .then(json => setTodo(json))
            }, [])

            // API call - dynamic - componentDidUpdate

            const [page, setPage] = useState('posts');
            const [response, setResponse] = useState([]);
            useEffect(() => {
                fetch(`https://jsonplaceholder.typicode.com/${page}/1`)
                .then(response => response.json())
                .then(json => setResponse(json))   
            }, [page])

            // componentWIllUnMount

            console.log('Re-rendered')
            useEffect(() => {
                console.log('Created')
                return () =>{
                    console.log("I'm destroying");
                }   // componentWillUnMount
            }, [])

            // componetWillUnMount - changeshow

            const [show, changeShow] = useState(true);

    return (
        <>
           <div class=" animate-pulse flex space-x-4">
            <p class="h-10 mt-6  bg-silver-700 rounde">This is componentDidUpdate when you click Toggle 1 :</p>
            <p> {val1} </p>
            <p> {val2} </p>
            <button className="border-orange-500 border bg-orange-300 hover:bg-orange-800" onClick={ () => setVal1(val1 + 1)}>Toggle 1</button>
            <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={ () => setVal2(val2 + 1)}>Toggle 2</button>
          </div>
          <div class="h-10 mt-6">
              <p class="... ring-2 ring-blue-500">{JSON.stringify(todo)}</p>
          </div>
          <div class="h-12 mt-6">
                <button className="border-orange-500 border bg-orange-300 hover:bg-orange-800"  onClick={() => setPage('posts')}>Posts</button>
                <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={() => setPage('comments')}>Comments</button>
                <p class="... ring-2 ring-blue-500 mt-6">{JSON.stringify(response)}</p>
          </div>
          <div class="mt-20  flex space-x-4">
                <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={() => changeShow(!show)}>Toggle 3</button>
                <p class="... ring-2 ring-green-500 ">{show && <TestingUnMount />}</p>
          </div>
        </>
    )

}