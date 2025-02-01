import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lesson01 from './lessons/lesson01/Lesson01.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
