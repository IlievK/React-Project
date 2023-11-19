import { useState } from 'react'


import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import Catalog from './components/catalog/catalog.jsx'

function App() {  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <Routes> 
      <Route  path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
