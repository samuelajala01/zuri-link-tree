import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainPage from './components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainPage/>
  )
}

export default App
