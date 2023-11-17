import { useState } from 'react'


import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <Footer />
    </>
  )
}

export default App
