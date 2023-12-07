import styles from '../../details/details.module.css'
export default function Comment({ data }, isOwner) {
    return (
        <>

            <li className={styles['info']}>
                <p>Comment:{data}</p>
            </li>
            {!isOwner && <button onClick={onFavoriteHandler} className={styles['delete-btn']}>Favorite </button>}
        </>
    )
}