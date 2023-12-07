import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { deleteItem, getOne } from "../../api/gamesApi"
import styles from '../details/details.module.css'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContex"

import Comment from "./comments/Comment"
import AddComment from "./addcomment/AddComment"
import * as commentServices from '../../api/commentsApi'


export default function Details() {
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const [item, setItem] = useState({})
  const { userId, hasUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const addCommnetHandler = async (values) =>{
    const data = await commentServices.createOne(id,values.comment)
     console.log(data);
    setComments(state => ([...state,data]))
    
  }
  
  useEffect(() => {
    Promise.all([
      getOne(id),
      commentServices.getAllComments(id)
    ])
    .then(([respones, comments]) => {
      setItem(respones)
      setComments(comments)
    })
    .catch(error => console.log(error))
  }, [id])
  const isOwner = item._ownerId === userId
  
  const deleteHandler = async () => {
    

    try {
      
      // await commentServices.deleteItem(item._id)
    const comment = await deleteItem(item?._id)
    // console.log(comment);
      navigate('/catalog')
    } catch (error) {
      console.log(error);
    }

    
  }
  const onFavoriteHandler = () =>{
    console.log('favorite');
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
             {comments.map(comment => <Comment key={comment._id} isOwner={isOwner} {...comment} />)} 
            </ul>}
            {comments.length === 0 && 
            <h2 className={styles['info']}>No comments.</h2>} 
          </div>
        </>
          {hasUser && <div className={styles['buttons']}>

            {!isOwner && <button onClick={onFavoriteHandler} className={styles['delete-btn']}>Favorite </button>}
            {/*If user is owner*/}
            {isOwner && <><>
              <Link to={`/catalog/${item._id}/edit`} className={styles['edit-btn']}>
                Edit
              </Link>
            </>
              <button type='submit' onClick={deleteHandler} className={styles['delete-btn']} >Delete</button></>
            }
            {/* {!isOwner && <p>
              <span className={styles['buy']}>In my Favorite</span>
            </p>
            } */}
          </div>}
          {/*If there is user logged in*/}
        </div>
        {hasUser && !isOwner && <AddComment addCommnetHandler={addCommnetHandler} />}
      </section>

    </>
  )
}