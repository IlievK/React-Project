import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { getOne } from "../../api/gamesApi"
import styles from '../details/details.module.css'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContex"


export default function Details() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const { userId, hasUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    getOne(id)
      .then(respone => setItem(respone))
      .catch(error => console.log(error))
  }, [])
  const isOwner = item._ownerId === userId

  const deleteHandler = ()=>{
    console.log('delete');

    // navigate('/')

  }
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
            {isOwner && <><>
              <Link to={`/catalog/${item._id}/edit`} className={styles['edit-btn']}>
                Edit
              </Link>
              </>
              <button type='submit' onClick={deleteHandler} className={styles['delete-btn']} >Delete</button></>
            }
            {/*If user is not the owner and is bought this toy*/}

            {!isOwner && <p>
              <span className={styles['buy']}>Thank You For Your Purchase</span>
            </p>
            }


          </div>}
          {/*If there is user logged in*/}
        </div>
          <>
  {/* Bonus ( for Guests and Users ) */}
  <div className="details-comments">
    <h2>Comments:</h2>
    <ul>
      {/* list all comments for current game (If any) */}
      <li className="comment">
        <p>Content: I rate this one quite highly.</p>
      </li>
      <li className="comment">
        <p>Content: The best game.</p>
      </li>
    </ul>
    {/* Display paragraph: If there are no games in the database */}
    <p className="no-comment">No comments.</p>
  </div>
</>
<>
  {/* Bonus */}
  {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
  <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form">
      <textarea name="comment" placeholder="Comment......" defaultValue={""} />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article>
</>

      </section>

    </>
  )
}