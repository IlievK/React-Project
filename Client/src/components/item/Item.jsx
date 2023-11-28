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
        <h4>Name: {name}</h4>
        
        <h4>Price: ${price}</h4>
        <span>Description: {description}</span>
      </Link>
    )
}