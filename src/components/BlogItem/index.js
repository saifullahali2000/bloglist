// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listDetails} = props
  const {title, description, publishedDate} = listDetails
  return (
    <li>
      <div className="list-items">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
