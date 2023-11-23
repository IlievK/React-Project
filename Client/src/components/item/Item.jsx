import  { Link}  from "react-router-dom"
import styles from '../catalog/catalog.module.css'
export default function Item ({
  title,
  category,
  maxLevel,
  imageUrl,
  summary,
  _id
}) {
    return(
        <Link to={`/catalog/${_id}`} className={styles['added-electronics-in-market']}>
        <img src={imageUrl} className={styles['picture-added-electronics']} />
        <p>{title}</p>
        <p>{category}</p>
        <p>{maxLevel}</p>
      </Link>
    )
}