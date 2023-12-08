import { Link } from 'react-router-dom'
import styles from '../register/register.module.css'
import { useForm } from '../../hooks/useForm'
import { useAuthContext } from '../../contexts/AuthContex'
const RegisterForm = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RepearPassword: 'rePassword'
}
export default function Register() {
const {onRegisterSubmitHandler} = useAuthContext()
    const {formValues, onChange, onSubmit} = useForm(
        {
        [RegisterForm.Email]:'',
        [RegisterForm.Password]:'',
        [RegisterForm.Username]:'',
        [RegisterForm.RepearPassword]:'',
    }, onRegisterSubmitHandler)

    return (
        <section className={styles['registerPage']} >
            <form className={styles['registerForm']} onSubmit={onSubmit} method="post">
                <label htmlFor="email">Email:</label>
                <input
                onChange={onChange}
                type="text"
                id="email"
                name={RegisterForm.Email}
                placeholder="Email"
                value={formValues[RegisterForm.Email]}
                />
                <label htmlFor="username">Username:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="username"
                    name={RegisterForm.Username}
                    placeholder="Enter your Username"
                    value={formValues[RegisterForm.Username]}
                />
                <label htmlFor="password">Password:</label>
                <input
                onChange={onChange}
                type="password"
                id="password"
                name={RegisterForm.Password}
                placeholder="Password"
                value={formValues[RegisterForm.Password]}
                 />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input
                onChange={onChange}
                    type="password"
                    id="rePassword"
                    name={RegisterForm.RepearPassword}
                    placeholder="Repeat Password"
                    value={formValues[RegisterForm.RepearPassword]}
                />
                <input type="submit" className={styles['register']} value="Register" />
                <p><span >
                If you don't have an account, please login <Link to="/auth/login">here</Link>
                    </span> </p>
            </form>
        </section>

    )
}