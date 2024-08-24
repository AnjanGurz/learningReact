import { useState } from "react"


function App() {
  const [color, setColor] = useState("burlywood");

  return (
    <div className=" w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap justify-center top-52 inset-x-0 px-2"> <h1 className="text-2xl"> Click the button to change the background color of this webpage.</h1> </div>

      <div className="fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


          {/* RED */}
          <button onClick={()=> setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>

          {/* blue */}
          <button onClick={()=> setColor('blue')}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor: "blue"}}>blue</button>


          {/* Green */}
          <button onClick={()=> setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>green</button>
          
          {/* Indigo */}
          <button onClick={()=> setColor('Indigo')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Indigo"}}>Indigo</button>

          {/* fuchsia */}
          <button onClick={()=> setColor('fuchsia')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "fuchsia"}}>fuchsia</button>

          {/* navy */}
          <button onClick={()=> setColor('navy')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "navy"}}>navy</button>

          {/* lavender */}
          <button onClick={()=> setColor('grey')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "grey"}}>grey</button>

          {/* violet */}
          <button onClick={()=> setColor('violet')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "violet"}}>violet</button>

          </div>
      </div>
    </div>
  )
}

export default App;