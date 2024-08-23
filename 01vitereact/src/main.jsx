import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from 'react';


function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type : 'a',
//   props : {
//       href:'https://www.google.com/',
//       target: '_blank'
//   },
//   children : 'Click me to visit google'
// }

// this is jsx element
/*
The JSX compiler automatically calls the React.createElement() function for us, so we don't need to write it explicitly.

When we write a JSX element like <div>Hello World!</div>, the compiler automatically converts it to React.createElement("div", null, "Hello World!").

When you write a JSX element, the compiler will automatically convert it to a React.createElement() call, regardless of whether you include parentheses or not.
*/

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

// Syntax for to crate element in react :
/*
React.createElement(
  type,
  props,
  children
)
*/

//When we created our own simple React library, we implemented our own logic for rendering components using custom object key-value pairs and function parameters. This was done to mimic the real React library's underlying mechanics, where a specific set of rules governs how parameters are accepted and code is executed to create and render elements via react-dom.

// In other words, our library was a simplified version of React, allowing us to understand how React works under the hood. We defined our own components and used React.createElement() to create elements, just like React does

const username = "_Anjan";
// Expressions vs. Statements: JSX supports JavaScript expressions, not statements. For example, you can use x + y but not if (condition) { ... }.

const newElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit Google",
  username
);

createRoot(document.getElementById("root")).render(
  // <MyApp />
  // anotherElement
  newElement
);
