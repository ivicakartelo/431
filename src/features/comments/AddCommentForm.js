import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentAdded } from './commentsSlice'
//import { postAdded } from './postsSlice'

  export const AddCommentForm = () => {
  const [rating, setRating] = useState('')
  const [author, setAuthor] = useState('')
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const onRatingChanged = e => setRating(e.target.value) 
  const onAuthorChanged = e => setAuthor(e.target.value)
  const onCommentChanged = e => setComment(e.target.value)

  const onSaveCommentClicked = () => {
    if (rating && author && comment) {
      dispatch(commentAdded(rating, author, comment))
      setRating('')
      setAuthor('')
      setComment('')
    }
  }
  
  const canSave = Boolean(rating) && Boolean(author) && Boolean(comment)

  return (
    <section>
      <h2>Add a New Comment</h2>
      <form>
        <label htmlFor="commentRating">Comment Rating:</label>
        
        <input
          type="text"
          id="commentRating"
          name="commentRating"
          value={rating}
          onChange={onRatingChanged}
        />

        <label htmlFor="commentAuthor">Author:</label>
        
        <input
          type="text"
          id="commentAuthor"
          name="commentAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        
        <label htmlFor="commentText"><p>Comment Text</p></label>
        <textarea
          id="commenttext"
          name="commenttext"
          value={comment}
          onChange={onCommentChanged}
        />
        <button type="button" onClick={onSaveCommentClicked} disabled={!canSave}>
            Save Comment
        </button>
      </form>
    </section>
  )
}