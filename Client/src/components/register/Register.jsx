import { Link } from 'react-router-dom'
import styles from '../register/register.module.css'
import { useForm } from '../../hooks/useForm'
const RegisterForm = {
    Email: 'email',
    Password: 'password',
    Username
}
export default function Register() {

    const { values, onChange, onSubmit} = useForm({

    }, onRegisterSubmitHandler)

    return (
        <section className={styles['registerPage']} >
            <form className={styles['registerForm']} action="#" method="">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="" placeholder="Email" />
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name={RegisterForm.Username}
                    placeholder="Enter your Username"
                    onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="" placeholder="Password" />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input
                    type="password"
                    id="rePassword"
                    name=""
                    placeholder="Repeat Password"
                />
                <input type="submit" className={styles['register']} defaultValue="Register" />
                <p><span >
                If you don't have an account, please login <Link to="/auth/login">here</Link>
                    </span> </p>
            </form>
        </section>

    )
}