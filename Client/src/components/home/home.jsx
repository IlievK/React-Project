import styles from '../home/home.module.css'
export default function(){
    return (
        
        <section id="homePage" className={styles['background-img']}>
            <div className={styles['introduction']}>
                <h1>The Trusted Wholesale Marketplace for Used Electronics</h1>
                <p>Each year, 50 million tons of IT gear reaches end-of-life. Tradeloop is where companies safely buy, repair, recycle, and resell it. How it works?</p>
            </div>
        </section>
    )
}