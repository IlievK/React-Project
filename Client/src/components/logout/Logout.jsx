import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContex"
import { logout } from "../../api/users"
export default function Logout(){
    const navigate = useNavigate()
    const {logAutHandler} = useContext(AuthContext)
    
    useEffect(()=>{
        logout()
        .then(()=> logAutHandler())
        .then(() => navigate('/'))
        .catch((error) => console.log(error))
    },[])


    return null
}