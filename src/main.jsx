import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp.jsx'
import './index.css'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook/>
  </StrictMode>,
)
