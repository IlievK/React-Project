import styles from '../../details/details.module.css'
export default function Comment ({comment}){
    return(
        <li className={styles['info']}>
                <p>Content: I rate this one quite highly.</p>
              </li>
    )
}