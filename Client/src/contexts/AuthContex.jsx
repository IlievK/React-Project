
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api/users";
import { useContext } from "react";
import { useLocaleStorage } from "../hooks/useLocaleStorage";

export const AuthContext = createContext()

export const AuthProvider = ({
    children,
}) => {

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

    const contexValues = {
        userId : auth._id,
        userEmail : auth.email,
        userToken: auth.accessToken,
        hasUser: !!auth.accessToken,
        username: auth.username,
        logAutHandler,
        onRegisterSubmitHandler,
        onLoginSubmitHandler
        
    }

    return(
        <>
        <AuthContext.Provider value={contexValues}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    return  useContext(AuthContext)

}