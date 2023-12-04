// import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import { login, register } from './api/users.js'
import { AuthContext } from './contexts/AuthContex.js';

import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import Details from './components/details/Details.jsx';
import Edit from './components/edit/Edit.jsx';
import Catalog from './components/catalog/catalog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Create from './components/create/Create.jsx'
import Logout from './components/logout/Logout.jsx'
import { useLocaleStorage } from './hooks/useLocaleStorage.js';


function App() {
    const key = 'user'
    const [auth, setAuth] = useLocaleStorage(key,{})
    const navigate = useNavigate()
    //  const [count, setCount] = useState(0)
    const onLoginSubmitHandler = async (values) => {

        try {
            
            const user = await login({...values})
         
            console.log(`user: ${user.accessToken}`);
            setAuth(user)
            navigate('/catalog')
        } catch (error) {
            console.log(error);
        }
    }


    const onRegisterSubmitHandler = async (values) => {

        try {
            if (values.email === "" || values.password === "" || values.rePassword == "" || values.username === "") {
                throw new Error('All field require!')
            }
            if (values.rePassword !== values.password) {
                throw new Error('Password don\'t match')
            }

            const user = await register({...values})
           
            setAuth(user)
        
            navigate('/catalog')

        } catch (error) {
            console.log(error);
        }
    }

    const logAutHandler = ()=>{
        
        setAuth({})
        localStorage.removeItem(key)
    }

    const context = {
        userId : auth._id,
        userEmail : auth.email,
        userToken: auth.accessToken,
        hasUser: !!auth.accessToken,
        logAutHandler
        
    }

    return (
        <>
        <AuthContext.Provider value={context}>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/auth/login' element={<Login onLoginSubmitHandler={onLoginSubmitHandler} />} />
                <Route path='/auth/register' element={<Register onRegisterSubmitHandler={onRegisterSubmitHandler} />} />
                <Route path='/data/create' element={<Create  />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/catalog/:id/details' element={<Details />} />
                <Route path='/catalog/:id/edit' element={<Edit />} />
            </Routes>
            <Footer />
            </AuthContext.Provider >
        </>
    )
}


export default App
