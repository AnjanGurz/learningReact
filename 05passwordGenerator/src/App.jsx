import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copy, setCopied] = useState('copy') // added by anjan for better user exp

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str+= '0123456789'
    if (charAllowed) str+= '~!@#$%^&*()_+-=[]{}|;:,.<>?/'

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)      
    }

    setPassword(pass)
    setCopied('copy') // added by anjan -> every other customize btn click the state of the btn label change into it's intital value to make better user-exp

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select(); // to make user what is beging sleected
    passwordRef.current?.setSelectionRange(0, 8) // to manipulate how much range of character of pass can be copied by user in example we can use only 3 char password due to range set 0-3.
    // window.navigator.clipboard.writeText(password)
    window.navigator.clipboard.writeText(passwordRef.current?.value.slice(0, 8)); // Added .value and .slice(0, 3) -> use this technique to copy what is selected shown to the user
    setCopied('copied') // interactivity added by anjan
  },[password])


  {/* useEffect is used to run the main logic of the program on initial render and if dependencies change, it will re-run the logic again using dependencies state. */}
  useEffect(()=> {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800" > 

        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly ref={passwordRef}
          />  

          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> {copy} </button>     
        </div>
    
        {/* input box and checkbox container */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-y-4 gap-x-2'>

          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={100} value = {length} className='cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4' onChange={(e)=> {setLength(e.target.value)}}  />
            <label>Length:&nbsp;{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                    setNumAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>
    </> 
  )
}

export default App
