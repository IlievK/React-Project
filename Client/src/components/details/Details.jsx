import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne } from "../../api/gamesApi"
import styles from '../details/details.module.css'
export default function Details(){
const {id} = useParams()
const [item, setItem] = useState({})

useEffect(()=>{
    getOne(id)
    .then(respone => setItem(respone))
    .catch(error => console.log(error))
})
    return(
        <>
        <img src={item.image} className={styles['picture-added-electronics']} />
        <p>{item.name}</p>
        <p>{item.type}</p>
        <p></p>
        <p></p>
        <p></p>
        
        <section id={styles['detailsPage']}>
  <div id={styles['detailsInfo']}>
    <h1>Name: {item.naame}</h1>
    <div className={styles['info']}>
      <img src={item.image} />
    </div>
    <div className={styles['info']}>
      <h3>Type: {item.type}</h3>
      <h3>Year of Production: {item.production}</h3>
      <h3>
        Description: {item.description}
      </h3>
      <h2>Price: ${item.price}</h2>
    </div>
    {/*If there is user logged in*/}
    <div className={styles['buttons']}>
      {/*If user is not owner of the toy post*/}
      <a href="#" className={styles['buy-btn']}>
        Buy
      </a>
      {/*If user is owner*/}
      <a href="#" className={styles['edit-btn']}>
        Edit
      </a>
      <a href="#" className={styles['delete-btn']}>
        Delete
      </a>
      {/*If user is not the owner and is bought this toy*/}
      <p>
        <span className={styles['buy']}>Thank You For Your Purchase</span>
      </p>
    </div>
  </div>
</section>

        </>
    )
}