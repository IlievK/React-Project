import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm.js'
import styles from '../login/login.module.css'
import { useAuthContext } from '../../contexts/AuthContex.jsx'

const LoginForm = {
    Email: 'email',
    Password: 'password'
}

export default function Login() {
    const {onLoginSubmitHandler}= useAuthContext()
    
    const { formValues, onChange, onSubmit } = useForm(
        {
            [LoginForm.Email]: '',
            [LoginForm.Password]: ''

        }, onLoginSubmitHandler)
    return (
        <section className={styles['loginPage']} >
            <form className={styles['loginForm']} onSubmit={onSubmit} >
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" name={LoginForm.Email} placeholder="Email" value={formValues[LoginForm.Email]} />
                <label htmlFor="password">Password:</label>
                <input onChange={onChange} type="password" id="password" name={LoginForm.Password} placeholder="Password" value={formValues[LoginForm.Password]} />
                <input type="submit" className={styles['loginForm']} value='Login' />
                <p><span>
                    If you don't have an account, please register <Link to="/auth/register">here</Link>
                </span> </p>

            </form>
        </section>
    )
}