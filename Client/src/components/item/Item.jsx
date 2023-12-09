import  { Link}  from "react-router-dom"
import styles from '../catalog/catalog.module.css'
export default function Item ({
  name,
  image,
  price,
  type,
  production,
  _id
}) {
    return(
        <Link to={`/catalog/${_id}/details`} className={styles['added-games-in-market']}>
        <img src={image} className={styles['picture-added-games']} />
        <h4>Name: {name}</h4>
        <h4>Year: {production}</h4>
        <span>Genre: {type}</span>
      </Link>
    )
}