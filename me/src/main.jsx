import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from "react-ga4";
import './index.css'
import App from './App.jsx'

ReactGA.initialize("G-SHDD77BWT"); // your tracking ID
ReactGA.send("pageview");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
