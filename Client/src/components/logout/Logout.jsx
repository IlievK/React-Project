import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {  useAuthContext } from "../../contexts/AuthContex"
import { logout } from "../../api/users"

export default function Logout(){
    const navigate = useNavigate()
    const {logAutHandler} = useAuthContext()
    
    useEffect(()=>{
        logout()
        .then(()=> logAutHandler())
        .then(() => navigate('/'))
        .catch((error) => console.log(error))
    },[])


    return null
}