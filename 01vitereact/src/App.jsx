// learnings
/*
file should use .jsx extension rule of the library and the name of method/function should start with capital letter like App()

jsx allows to write the  combine htmlAndjs scripts

This code is then converted to JavaScript during the build process, using a tool like Babel(compiles jsx into js).
*/

import Crunk from "./crunky";

function App() {
  // In JSX, a single component can only return one element, so to work around this, you can wrap multiple elements in a single parent element, such as a div or you can cover it up with empty tag also known as fragment (<>elements</>).


  const username = 'anjan'
  // Expressions vs. Statements: JSX supports JavaScript expressions, not statements. For example, you can use x + y but not if (condition) { ... }.

  // acessing the value of variable using curly braces{} and while it is use it is known as evaluation expression (it is js final outcome)

  return (
    <>
      <h1>Chai aur react with vite | anjan yaHOOO | {username} </h1> 
      <Crunk />
    </>
  );
}

export default App;
