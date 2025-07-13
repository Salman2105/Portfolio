import React from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
