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

 //UseContext:- React hook that allows you to share values between multiple levels of components without passing props through each level.
 //--> useContext is react hook used to share data globally beteen components without props drilling.

//Steps:-
/*
//PROVIDER COMPONENT
1.import {createContext} from 'react';
2.export const MyContext = createContext();
3.<MyContext.Provider value ={value}>
      <Child />
  <MyContext.Provider>

  //CONSUMER COMPONENT
  1.import React, {useContext} from 'react'
    import {MyContext} from './ComponentA';
  2.const value = useContext{Mycontext}
*/

//And also create context.js in seperate file because shows an warning message , this is onlu a development tooling warning.

//USES
//-->dark/light mode
//-->authentication

//WHY ADDING VALUE IN INPUT
//-->without adding value browser controls the input, react only listens otherwise react controls the input

//UDEMY

//obj.map have an key for  - identify each element uniquely.

//React FRAGMENT --> <></> this parent element is fragement.

//State:-components memeory
//--> data that a component can hold over time necessary for information that it needs to remember throught the app's lifecycle.

// arrow fn in useState ensures you always get the latest state value.
//-->if we use like this setStep(s +1) twice does not update by two by using 
//   like this setStep(s =>s+1) twice this update by 2

//we using addEventListener then the page is reloaded so --> e.preventDefault() is used for removing the submition.

//-->STATE vs PROPS
//-->internal data,owned by component --  external data,owned by parent component
//-->re-render  -- read-only , receving new props causes component to re-render.

//controlled element -->we call an input element that is completely synchronised with state means form input whose value is fully controlled by React state.

//2 TYPES OF STATE
 //-->LOCAL STATE
  //#State belongs to one component only
 //-->GLOBAL STATE
  //#shares across multiple components
  //#using by Context API , Redux-library 

//--->USES OF STATE
//- need to store data
//- will data change some point

//-->Derived state: calculated from existing state or props not stored seperately.

//children--> special props whatever you put between a components opening and closing tags.
//eg:- return <div className="card">{children}</div>;

//COMPONENT CATEGRORY
//1 STATELESS or PRESENTATIONAL
  //# no state, recevie props , usually small and reusable

//2 STATEFUL
  //# have state

//3 STRUTURAL
  //# pages, layouts, or screens of the app, can be huge and non-reusable

//component composition
//--> component composition means building a UI by combining small, reusable components instead of writing one large component.

//State Lifting:- moving state to the closest parent so multiple child component can use it
//props drilling :- passing props through many components 
//avoid this we using children for passing child inside the main component
//eg;- <nav>
//        <input>
//        <button>
//     </nav>
// here we pass value direct to child without passing the parent nav.

//if an div has role = 'button' this is for this div behave like an button.

//-->Props as component API
//* props are the public interface(API) of a component - the way other components communicate with and configure it.

//For adding propType:-
//1) import PropTypes from 'prop-types'

//2)StarRating.PropTypes={
//     maxRating:PropTypes.number
// }

                                /*TAILWIND*/
//TAILWIND SETUP

//1) Firsly create an folder using npm create vite@latest
//2) then that folder 
//  * npm install tailwindcss @tailwindcss/vite
//3) in vite.config.js --> add import tailwindcss from '@tailwindcss/vite' and 
//   in plugins:-->  plugins: tailwindcss() add this 
//4) after that import in css like this @import "tailwindcss";
//5) then run it, npm run dev

//full height:- h-screen
//for color not have any text-brown so put like text-amber-800 
//font -size : text-2xl
//padding:- p-5- for all direction
        // px-5 --> for left and right
        // py-5 --> for top and bottom
        // pt --> top
        // pb --> bottom
        // pl --> left
        // pr --> right
//margin :- same as padding like m-5, mx,my,..
//border-radius:- rounded-lg: 8px
  //for left of bottom :- rounded-bl-lg
  //for circle--> rounded-full
//box-shadow:- shadow, shadow-xl,md ,
//hover:--> hover:text-3xl transition-all duration-300
//grid:--> grid grid-cols-2

//sm:grid-cols-2 means  
/*                     sm >= 640px 2 other in small size one
                        md >= 768px
                        lg >= 1024px
                        xl >= 1280px
*/
//REACT WORKS BEHIND THE SCENES