import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp.jsx'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
//import { SimpleForm } from './02-useEfect/SimpleForm.jsx'
//import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { Layout } from './05-useLayoutEffect/Layout.jsx'
//import { Memorize } from './06-Memo/Memorize.jsx'
import { MemorizeHook } from './06-Memo/MemorizeHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemorizeHook/>
  </StrictMode>,
)
