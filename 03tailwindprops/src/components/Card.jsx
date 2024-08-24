import React from 'react'

function Card({userName, btnText = ' Click'}) {

  // console.log('props', props);
  

  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
    <img
      src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{userName}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {btnText} &rarr;
      </button>
    </div>
  </div>
  )
}

export default Card;