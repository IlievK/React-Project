import styles from '../home/home.module.css'
export default function Home(){
    return (
        
        <section id={styles['homePage']} className={styles['background-img']}>
            <div className={styles['introduction']}>
                <h1>React Project Home page</h1>
                <p>Hello react</p>
            </div>
        </section>
    )
}