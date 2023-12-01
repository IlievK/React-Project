import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getOne } from "../../api/gamesApi"
import styles from '../details/details.module.css'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContex"


export default function Details() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const { userId, hasUser } = useContext(AuthContext)
  useEffect(() => {
    getOne(id)
      .then(respone => setItem(respone))
      .catch(error => console.log(error))
  }, [])
  const isOwner = item._ownerId === userId

  return (
    <>
      <section id={styles['detailsPage']}>
        <div id={styles['detailsInfo']}>
          <h1>Name: {item.name}</h1>
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
          {hasUser && <div className={styles['buttons']}>
            {!isOwner &&
              <a href="#" className={styles['buy-btn']}>
                Buy
              </a>}


            {/*If user is owner*/}
            {isOwner && <>
              <Link to={`/catalog/${item._id}/edit`} className={styles['edit-btn']}>
                Edit
              </Link>
              <Link to="#" className={styles['delete-btn']}>
                Delete
              </Link></>
            }
            {/*If user is not the owner and is bought this toy*/}

            {!isOwner && <p>
              <span className={styles['buy']}>Thank You For Your Purchase</span>
            </p>
            }


          </div>}
          {/*If there is user logged in*/}

        </div>
      </section>

    </>
  )
}