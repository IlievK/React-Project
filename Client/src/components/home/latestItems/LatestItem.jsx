import { Link } from "react-router-dom"
import styles from '../home.module.css'
export default function LatestItem({
    name,
    image,
    price,
    description,
    _id
}) {
    return (
        <Link to={`/catalog/${_id}/details`} className={styles['added-games-in-market']}>
            <img src={image} className={styles['picture-added-games']} />
            <h4>Name: {name}</h4>
            <span>Price:${price}</span>
        </Link>
    )
}