import { useSelector } from 'react-redux'

export const RepliesList = ({ commentId }) => {
  const replies = useSelector(state => state.replies)
  .filter(reply => reply.comment === commentId)  
  .map(reply => (
    <article key={reply.replyId}>
      <h1>{reply.date}</h1>
      <h3>{reply.author}</h3>
      <p>{reply.reply}</p>
      
    </article>
  ))
return (
  <section>
    <h2>Replies:</h2>
    {replies}    
  </section>
)
}