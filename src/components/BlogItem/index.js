// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item

  return (
    <li className="item-list">
      <div className="item-cont">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="p">{description}</p>
    </li>
  )
}

export default BlogItem
