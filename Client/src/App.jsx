import { useState } from 'react'


import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/home/home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
      <Home />
    <Footer />
    </>
  )
}

export default App
