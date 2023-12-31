import { useForm } from '../../../hooks/useForm'
import styles from '../details.module.css'

export default function AddComment({addCommnetHandler}){

  const CommentForm ={
    Commnet : 'comment'
  }
  const {formValues,onChange, onSubmit, changeValues } = useForm({
    [CommentForm.Commnet] : ""
  }, addCommnetHandler)
    return(
        <>
        
          <article className={styles['create-comment']}>
            <label>Add new comment:</label>
            <form id={styles['detailsPage']} onSubmit={onSubmit}>
              <textarea
              onChange={onChange}
              name="comment"
              placeholder="Comment......"
              value={formValues[CommentForm.Commnet]}
              ></textarea>
              <input className={styles['edit-btn']} type="submit" value="Add Comment" />
              {/* <button className={styles['edit-btn']}  type="submit" >Add Comment</button> */}
            </form>
          </article>
        </>
    )
}