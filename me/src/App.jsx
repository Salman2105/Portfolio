import React from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import usePageTracking from "./usePageTracking";


function App() {
  usePageTracking(); // 👈 now tracking route changes

  return (
    <ThemeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
