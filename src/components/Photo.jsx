import React from 'react'
import { Link } from 'react-router-dom'

const Photo = ({ post }) => {
  return (
    <div>
    
      <Link to={`/photos/${post.id}`}>{post.title}</Link>

      <p>--------------------------------------------------</p>
    </div>
  )
}

export default Photo