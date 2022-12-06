import { useSelector } from 'react-redux'



export const CommentsList = () => {
  const comments = useSelector(state => state.comments)
  const postComments = ({ postId }) => (state =>
      state.comments.filter(comment => comment.postId === postId)
      
      )}

      console.log(Comments)
    /*
  const postComments1 = postComments.map(comment => (
    <article key={comment.commentId}>
      <h3>{comment.rating}</h3>
      <h3>{comment.author}</h3>
      <p>{comment.comment.substring(0, 100)}</p>
    </article>
  ))

return (
  <section>
    <h2>Comment</h2>
    {postComments1}    
  </section>
)
} */