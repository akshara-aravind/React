/*
What is React, and why is it used in modern web development?
The difference between Single Page Applications (SPA) and Multi Page Applications (MPA).
Understanding Components as the building blocks of React.
Introduction to JSX (writing HTML-like syntax inside JavaScript)
*/

//REACT :- 
//--> react is a powerful js library
//--> especially for single-page applications
//-->components based architecture


//USES
//--> component based - UI is split into reusable pieces
//--> easy to maintain large applications

//SPA:- 
//updates content without reloading pages, faster after initial reload, smooth app-like, gmail, facebook, tech:- react,angular and vue

//MPA
//loads a new html page every time, slower due to full reload, traditional website feel, amazon, wikipedia, tech:-PHP,JSP,Django

//Componets in React
//components are the building blocks of react UI
//why components are important:- reusable, easy to manage, makes UI modular

//JSX
//JSX allows you to write HTML-like syntax inside js
//usage:- easy to read, looks like html

//public:- static files, index.html,images, svg
//src :- react code , components, app.jsx,main.jsx,style.css
//main.jsx-starts react
//app.jsx-main UI component

//Props:- used to pass data from parent component to child component

//useState :- useState is a react hook used to store and change data inside a functional component.

//useEffect :- useEffect is a react hook used to perform side effects, api calls , timers , event listeners and DOM updates.
//-->side effect means things outside UI rendering'
//basic syntax:- useEffect(() =>{
//    },[])
//-->react hook that tells react do some code when 
//    this component re-renders
//    this component mounts
//     the state of a value

//USES
/**
 1 Event Listeners
 2 DOM manipulation
 3 Subscriptions 
 4 Fetching data from an API
 5 Clean up when a component unmounts
 */


 //files
 //eslint.config.js --> code quality & error checking
 //package.json --> project name, dependencies, and scripts
 //package-lock.json --> recorde of installed packages
 //README.md --> project documentation file
 //vite.config.js --> vite build tool configuration
 //.gitignore --> tells git which files not to upload
 //src --> main react code lives here, main.jsx, app.jsx, components, assests, styles
 //public --> images, public images
 //node_modules --> all installed libraries
 //assests --> images used inside react components


 //state in React:- a built-in object used to store data or information about a component that can change over time.