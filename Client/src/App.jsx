import { useState} from 'react'
import { useNavigate } from "react-router-dom";

import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/catalog/catalog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Create from './components/create/Create.jsx'
import Logout from './components/logout/Logout.jsx'
import { login, register } from './api/users.js'

function App() {
    const navigate = useNavigate()
    //  const [count, setCount] = useState(0)
    const onLoginSubmitHandler = async (values) => {
        console.log(`Email:${values.email}`);
        console.log(`Password:${values.password}`);
        const user = await login(values.email, values.password)
        const token = JSON.parse(sessionStorage.getItem('user'))
        console.log(token._id);
    }


    const onRegisterSubmitHandler = async (values) => {

        try {
            if (values.email === "" || values.password === "" || values.rePassword == "" || values.username === "") {
                throw new Error('All field require!')
            }
            if (values.rePassword !== values.password) {
                throw new Error('Password don\'t match')
            }

            const user = await register(values.email, values.password, values.username)
            const token = JSON.parse(sessionStorage.getItem('user'))
            console.log(token._id);
            navigate('/catalog')

        } catch (error) {
            console.log(error);
        }


    }
    const onCreateSubmitHndler = (values) => {
        console.log(values);
    }
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/auth/login' element={<Login onLoginSubmitHandler={onLoginSubmitHandler} />} />
                <Route path='/auth/register' element={<Register onRegisterSubmitHandler={onRegisterSubmitHandler} />} />
                <Route path='/data/create' element={<Create onCreateSubmitHndler={onCreateSubmitHndler} />} />
                <Route path='/logout' element={<Logout />} />
                {/* <Route path='/catalog/:id/details' element={<Details />} /> */}
            </Routes>
            <Footer />
        </>
    )
}

export default App
