// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="lists-container">
        {blogsList.map(eachItem => (
          <BlogItem listDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
