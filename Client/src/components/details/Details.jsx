import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteItem, getOne } from "../../api/gamesApi"
import styles from '../details/details.module.css'
import {  useAuthContext } from "../../contexts/AuthContex"

import Comment from "./comments/Comment"
import AddComment from "./addcomment/AddComment"
import * as commentServices from '../../api/commentsApi'


export default function Details() {
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const [item, setItem] = useState({})
  const { userId, hasUser, username } = useAuthContext()
  const navigate = useNavigate()
  
  const addCommnetHandler = async (values) =>{
    const data = await commentServices.createOne(id,values.comment, username)
    //  console.log(data);
    //  console.log(userId)
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
     await deleteItem(item?._id)
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
            <h3>Genre: {item.type}</h3>
            <h3>Date of creation: {item.production}</h3>
            <h3 htmlFor="">Description:</h3>
            {/* TO DO - CSS to be fixed */}
            <h3 id={styles['descriptioDetail']}>
               {item.description}
            </h3>
            <h2>Price: ${item.price}</h2>
          </div>
          <>
          
          <div className={styles['detailsPage']}>
            <h1>Comments:</h1>
            {comments.length > 0 && <ul>
             
             {comments.map(comment => <Comment key={comment._id} isOwner={isOwner} {...comment} />)} 
            </ul>}
            {comments.length === 0 && 
            <h2 className={styles['info']}>No comments.</h2>} 
          </div>
        </>
          {hasUser && <div className={styles['buttons']}>

              {/* //To be completed */}
            {/* {!isOwner && <button onClick={onFavoriteHandler} className={styles['delete-btn']}>Favorite </button>}   */}
           
            {isOwner && <><>
              <Link to={`/catalog/${item._id}/edit`} className={styles['edit-btn']}>
                Edit
              </Link>
            </>
              <button type='submit' onClick={deleteHandler} className={styles['delete-btn']} >Delete</button></>
            }
            
          </div>}
         
        </div>
        {hasUser && !isOwner && <AddComment addCommnetHandler={addCommnetHandler} />}
      </section>

    </>
  )
}