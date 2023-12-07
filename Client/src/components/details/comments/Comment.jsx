import styles from '../../details/details.module.css'
export default function Comment({ data }, isOwner) {
    return (
        <>

            <li className={styles['info']}>
                <p>Comment:{data}</p>
            </li>
            {/* <button  className={styles['delete-btn']}>edit </button> */}
        </>
    )
}