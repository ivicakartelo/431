import { useSelector } from 'react-redux'

export const CommentsList = ({ post }) => {
  const comments = useSelector(state => state.comments)
  .filter(comment => comment.post === post)  
  .map(comment => (
    <article key={comment.commentId}>
      <h3>{comment.author}</h3>
    </article>
  ))
return (
  <section>
    <h2>Comments:</h2>
    {comments}    
  </section>
)
}