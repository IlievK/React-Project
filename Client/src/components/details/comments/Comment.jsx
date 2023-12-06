import styles from '../../details/details.module.css'
export default function Comment ({data}){
    return(
        <li className={styles['info']}>
                <p>Comment:{data}</p>
              </li>
    )
}