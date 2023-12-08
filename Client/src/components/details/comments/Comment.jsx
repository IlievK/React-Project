import styles from '../../details/details.module.css'
export default function Comment({ data, userEmail }, isOwner) {
    return (
        <>

            <li className={styles['info']}>
                <p>{userEmail}:{data}</p>
            </li>
            {/* <button  className={styles['delete-btn']}>edit </button> */}
        </>
    )
}