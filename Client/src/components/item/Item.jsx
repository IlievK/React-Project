import  { Link}  from "react-router-dom"
import styles from '../catalog/catalog.module.css'
export default function Item ({
  name,
  type,
  production,
  image,
  price,
  description,
  _id
}) {
    return(
        <Link to={`/catalog/${_id}/details`} className={styles['added-electronics-in-market']}>
        <img src={image} className={styles['picture-added-electronics']} />
        <p>{name}</p>
        <p>{type}</p>
        <p>{production}</p>
        <p>{price}</p>
        <p>{description}</p>
      </Link>
    )
}