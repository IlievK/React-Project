import { useState } from 'react'


import './App.css'
import Navigation from './components/Navigation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    </>
  )
}

export default App
