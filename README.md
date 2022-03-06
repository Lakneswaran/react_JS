# react_JS
Basics &amp; Theory a small testings 

## What is React?

- React is a Javascript library for building user interface & helps to build single page applications.
- React allows us to create reusable UI components.

## Why is reactJS?

- React uses virtual DOM which is a JSObject. This will improve apps performance, since JS virtual DOM is faster than the regular DOM.
- Little to no breaking changes. -> one version to new version upgrading the code will not break.
- Virtual DOM is representation of the actual DOM.

## What is component?

- House: Bricks, Door, windows,... ReactJS - combine of lot of components.
- JSX -> Javascript XML Class => <div className="">

## What is JSX?

- JSX stands for JS XML. Babel is a JS compiler that includes the ability to compile JSX into regular JS.
-  http://babeljs.io/repl
* -  JSX => <div className="shopping-list"><h1>Shopping List for {this.props.name}</h1><ul><li></li></ul></div>
- Babel compiler JSX -> javascript

## Components Types

- Class Components
- Functional Components

## Important things to remember in React

- Functional programming : functional comp. is light weighted and ease to read and creat
- Immutability : Arr or Obj changing not only the value, also the variable it self.

## Creating React APP Using CLi

- npx create-react-app project-name
- Public, src and package.json file.
- when you change something in App.js automatically changes in the browser without reload. - Hot reload.
- Webpack tool maintain everything inside the json file. 
- You can change the configuration of the webpack with "run eject".
- Public folder - index.html -> <div id="root"></div> in this root we are going to mount our application.
- src -> index.js -> starting point of our application.
- ReactDOM.render(two arguments) - (JSX, DOM element) -> We are rendering this JSX into DOM.
- App.js is a functional component. 

## Props & Class component

- export default class Newcomponent extends React.Component{} - that class will act as react comp.
- There's a render function -> it's render the Html JS. return<div>
- We need to import this component in APP.js
- html using attributes <p name="hello"> => in react props. 
- In component we can access this property title. return <div>{ this.props.name } </div>
- we extends the component from the react component, so we have also access to { this.props }
- When we passing html attribute in App.js in component getting that as an object with properties.
- So we can pass data from parent comp. App() -> child comp.
- To access variable name inside JSX with {name + "Kris"}
- React is consider all inside {} as JS. 



![Probs classcomp](public/asset/class_component_props.PNG)


## Functional Component

- Functionalcomp.js -> using the component in app.js gives error. 
-  in the functional comp. babbel convert the <div></div> JSX into JS -> react.create.element it will created.
- react variable is missing -> error.
- When we using a component, we need to import react.
- In class component while we extending from react.Compenent, the child class get access to props and states.
- In functional class we didn't extending anything, so we giving Functionalcomp(props) as a argument.

## Event handling

- JSX expressions must have one parent element. 
- In functional component if we add <div> && <button>, two parent class -> solution: <><div><button></>
- empty tags => <> </> helps multiple DOM wrapping in one root element. 
- In old version of react using react.fragment tag doing same as empty tag.
- <button onClick={clicked}> -> const clicked = () in js inside (e) - the argument have clickevent details wrapped inside. 

- Event handling in class component. 
- when we click the function clicked called. In jS onclick() jsx onClick(). 
- alert(this) => Newcomponent class instance - object will alert. Because we run this program in stright mode running.
- this.clclicked connenct with the button this pointing on the button. - we get undefined - to solve this bind the class instance with the function. 
-  super() -> use to invoke constructor in React.Component 

![Probs classcomp](public/asset/functiional_comp.PNG)

## State in class component

- data of the component. Every component have a state and based on that teh component how to render we'll deciding. 
- mutability = this.state.name = ; immutability => we applying new object Rather than copying that old object key and value.
- using spread operator to  copying current state. 

![Probs classcomp](public/asset/state_in_react.PNG)


## state in functional component.

- we did't extend fro react.Component so this. is not available. -> to solve this we using useState.
- With using useState function inside func. comp. creating state and using that. 
- To call the useState useState("default value") 
- This function will return two value in Array form.
- ES6 D-stucture using getting the values, first = variable, getter this default value. second value = setter
- function.
- const [getter, setter] = useState("")

![Probs classcomp](public/asset/state_in_func.PNG)
 
 ## Lifecycle hooks

 - Component in different stages executing different function calling Lifecycle hooks.
 - In human Life Birth working RIP, same component will create, update and destroy. 
 - Those function will automatic execute itself.
 - With using this we can decide how we change the component state or component rerender or not.
 - - Mounting:  
 -     - constructor()  - static getDerivedStateFromProps()    - render()          - componentDidMount()
 
 - - Updating:  
 -     - static getDerivedStateFromProps()  -  shouldComponentUpdate()  - render()  -getSnapshopBeforeUpdate()  - componentDidUpdate()   

 - - Unmounting:  
 -     - componentWillUnmount()                           
 
- Lifecycle hooks : componentDidMount() and componentWillUnmount 
- while component has created constructor will execute..
- ComponentDidMount() hooks uses inside this function required API calls, value changing, we can do that inside this.
- then teh state will update properly and rerender
- ComponentWillUnmount()  this function to destroy.
- component destroy means when removing in at The DOM tree.

- - This is constructor -> Render -> componentDidMount -> componentWillUnmount.



![Probs classcomp](public/asset/lifecylcle_hooks.PNG)

## UseEffect in functional Component

- We have used lifecycle hooks in class component. With help of useEffect function we have access to use lifecycle 
- hooks in functional component.
- Constructor in FC is what we wrote directly inside a function. const [] = useState()
- useEffect function inside will be componentDidMount appear => where api call and ajax.
- When we return a function in userEffect. then ill component destroy then it will execute 
- return () => componentWillUnmount.


![Probs classcomp](public/asset/useeffect_in_fc.PNG)

- useState, useEffect, use... Functions are starting with use are reactHooks. 
- The main purpose of reactHooks are USe functions that can used by FC.
- A useEffect function can equally compare with componentDidMount.
- UseEffect can accept two arguments. One is (function () => {} and second is a dependency array , []). 
- If dependency array is empty, the function will execute only once while component is creating. 
- useEffect can be reused, multiple times. 
- We can use the dependency array when any changes in the state. const [current, previous] = useState().

![Probs classcomp](public/asset/useeffect_in_fc_MX.PNG)







