import React from "react";

export default function App() {

  const [hex,setHex] = React.useState('#442883')

  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  function getHex(){
    setHex(`#${randomColor}`)
    console.log(hex)
  }

  return (

    <div  className="p-5" >
      <h1 className="text-center pb-4">Random Color Generator</h1>
        <div className="shadow-md color-box mx-auto rounded-md" style={ {backgroundColor : `${hex}` ,width: '230px', height: '260px'}  }>
            <span className="grid place-content-center h-full text-gray-100 font-semibold text-2xl">{`#${randomColor}`}</span>
        </div>
      <button onClick={getHex} className="bg-blue-200 rounded-md py-2 px-3  drop-shadow-sm mt-8 block text-center w-32 mx-auto mt-4">Generate</button>

      
  </div>
  )
  
}
  

