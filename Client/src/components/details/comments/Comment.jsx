import styles from '../../details/details.module.css'
export default function Comment({ data, username }, isOwner) {
    return (
        <>

            <li className={styles['info']}>
                <p>{username}:{data}</p>
            </li>
            {/* <button  className={styles['delete-btn']}>edit </button> */}
        </>
    )
}