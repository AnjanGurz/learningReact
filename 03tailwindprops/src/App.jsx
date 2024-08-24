import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    userName : 'crunky',
    age : 21
  }

  let newarr = [100, 104 ,108]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-7'>Hello World</h1>
      {/* <Card enginnerName = 'anjan' anotherobj={myObj} array ={newarr}/> */}
      <Card userName= 'Anjan' btnText = 'click me'/>
      <Card userName= 'Crunky' btnText = 'Move'/>
      <Card userName= 'Crunky'/>
    </>
  )
}

export default App
