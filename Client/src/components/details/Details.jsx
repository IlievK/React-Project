import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { getOne } from "../../api/gamesApi"
import styles from '../details/details.module.css'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContex"
import { useForm } from "../../hooks/useForm"
import Comment from "./comments/Comment"
import AddComment from "./addcomment/AddComment"

export default function Details() {
  const [comments, setComments] = useState([1,2,3])
  const { id } = useParams()
  const [item, setItem] = useState({})
  const { userId, hasUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const addCommnetHandler = (values) =>{
    console.log(values);
    console.log('ADD comment!');
  }
  
  useEffect(() => {
    getOne(id)
    .then(respone => setItem(respone))
    .catch(error => console.log(error))
  }, [])
  const isOwner = item._ownerId === userId
  
  const deleteHandler = () => {
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
            <label htmlFor="">Description</label>
            {/* TO DO - CSS to be fixed */}
            <h3 id={styles['descriptioDetail']}>
              Description: {item.description}
            </h3>
            <h2>Price: ${item.price}</h2>
          </div>
          <>
          {/* Bonus ( for Guests and Users ) */}
          <div className={styles['detailsPage']}>
            <h1>Comments:</h1>
            {comments.length > 0 && <ul>
              {/* list all comments for current game (If any) */}
             {comments.map(comment => <Comment key={123 + Math.random()} {...comment} />)} 
            </ul>}
            {comments.length === 0 && 
            <h2 className={styles['info']}>No comments.</h2>} 
          </div>
        </>
          {hasUser && <div className={styles['buttons']}>

            {!isOwner && <a href="#" className={styles['buy-btn']}>Buy </a>}
            {/*If user is owner*/}
            {isOwner && <><>
              <Link to={`/catalog/${item._id}/edit`} className={styles['edit-btn']}>
                Edit
              </Link>
            </>
              <button type='submit' onClick={deleteHandler} className={styles['delete-btn']} >Delete</button></>
            }
            {!isOwner && <p>
              <span className={styles['buy']}>Thank You For Your Purchase</span>
            </p>
            }
          </div>}
          {/*If there is user logged in*/}
        </div>
        {hasUser && !isOwner && <AddComment addCommnetHandler={addCommnetHandler} />}
      </section>

    </>
  )
}