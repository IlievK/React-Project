import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContex"


export const HasUser = ({
    children,
}) =>{
    const {hasUser} = useAuthContext()

    if(!hasUser){
        return <Navigate to='/auth/login' />
    }

    return children ? children : <Outlet />
}