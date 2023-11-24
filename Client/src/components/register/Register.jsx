import { Link } from 'react-router-dom'
import styles from '../register/register.module.css'
import { useForm } from '../../hooks/useForm'
const RegisterForm = {
    Email: 'email',
    Password: 'password',
    Username: 'username',
    RepearPassword: 'rePassword'
}
export default function Register({onRegisterSubmitHandler}) {

    const { values, onChange, onSubmit} = useForm(
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
                <input type="text" id="email" name={RegisterForm.Email} placeholder="Email" value={values[RegisterForm.Email]}/>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name={RegisterForm.Username}
                    placeholder="Enter your Username"
                    onChange={onChange}
                    value={values[RegisterForm.Username]}
                />
                <label htmlFor="password">Password:</label>
                <input onChange={onChange} type="password" id="password" name={RegisterForm.Password} placeholder="Password" value={RegisterForm.Password} />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input
                onChange={onChange}
                    type="password"
                    id="rePassword"
                    name={RegisterForm.RepearPassword}
                    placeholder="Repeat Password"
                    value={values[RegisterForm.RepearPassword]}
                />
                <input type="submit" className={styles['register']} defaultValue="Register" />
                <p><span >
                If you don't have an account, please login <Link to="/auth/login">here</Link>
                    </span> </p>
            </form>
        </section>

    )
}