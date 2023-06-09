import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const Navigate=useNavigate();
  

  return (
    <>
    <button onClick={()=>Navigate("create")}>click</button>

    </>
  )
}

export default App
