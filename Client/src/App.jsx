
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContex.jsx';

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



function App() {
    return (
        <>
        <AuthProvider>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/register' element={<Register/>} />
                <Route path='/data/create' element={<Create  />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/catalog/:id/details' element={<Details />} />
                <Route path='/catalog/:id/edit' element={<Edit />} />
            </Routes>
            <Footer />
            </AuthProvider >
        </>
    )
}


export default App
