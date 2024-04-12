import { useState } from "react";

function MyApp() {
  const [color, setColor] = useState("black");
  return(
  <div className="h-screen m-0 p-0 w-screen relative" style={{backgroundColor : color}}>

  <div className="bg-white py-2 px-4 rounded-lg flex justify-center items-center w-full flex-wrap absolute bottom-4">

    <button className="bg-green-700 text-white p-0 py-2 px-3 mx-2 my-2" onClick={()=>{
      setColor('green')
    }}>Green</button>

    <button className="bg-blue-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('blue')
    }}>Blue</button>

    <button className="bg-red-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('red')
    }}>Red</button>

    <button className="bg-pink-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('pink')
    }}>Pink</button>

    <button className="bg-gray-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('gray')
    }}>Gray</button>

    <button className="bg-cyan-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('cyan')
    }}>Cyan</button>

    <button className="bg-indigo-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('indigo')
    }}>Indigo</button>

    <button className="bg-orange-700 text-white p-0 py-2 px-3 mx-2" onClick={()=>{
      setColor('orange')
    }}>Orange</button>
  </div>
  </div>
  )
}

export default MyApp;
