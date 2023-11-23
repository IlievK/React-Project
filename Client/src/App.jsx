import { useState } from 'react'


import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import Catalog from './components/catalog/catalog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Create from './components/create/Create.jsx'
import Logout from './components/logout/Logout.jsx'

function App() { 
   const [count, setCount] = useState(0)
    const onSubmitHandler = (values) => {
      console.log(values);
    }
  return (
    <>
    <Navigation />
    <Routes> 
      <Route  path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog/>} />
      <Route path='/auth/login' element={<Login onSubmitHandler={onSubmitHandler} />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/data/create' element={<Create />} />
      <Route path='/logout' element={<Logout />} />
      {/* <Route path='/catalog/:id/details' element={<Details />} /> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App
