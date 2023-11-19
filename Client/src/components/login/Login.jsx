import styles from '../login/login.module.css'

export default function Login() {
    return (
        <section className={styles['loginPage']} id="loginPage">
            <form className={styles['loginForm']} id="loginForm" action="" method="">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="" placeholder="Password" />
                <input type="submit" className="register" defaultValue="Login" />
            </form>
        </section>
    )
}