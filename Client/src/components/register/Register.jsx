import { Link } from 'react-router-dom'
import styles from '../register/register.module.css'
export default function Register() {
    return (
        <section className={styles['registerPage']} >
            <form className={styles['registerForm']} action="#" method="">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="" placeholder="Email" />
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name=""
                    placeholder="Enter your Username"
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