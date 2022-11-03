import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainPage from './components/MainPage'
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom"
import ContactPage from './components/ContactPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
