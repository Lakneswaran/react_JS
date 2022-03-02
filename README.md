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



![PBC Diagram](public/asset/class_component_props.PNG)

