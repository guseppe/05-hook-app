import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp.jsx'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import { SimpleForm } from './02-useEfect/SimpleForm.jsx'
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormWithCustomHook/>
  </StrictMode>,
)
