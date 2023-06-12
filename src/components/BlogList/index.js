// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-cont">
      {blogsList.map(each => (
        <BlogItem item={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
