import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Photo from '../components/Photo'

const Photos = (props) => {
  const [posts, setPosts] = useState([])

  const getPost = async () => {
      const respose = await fetch('https://jsonplaceholder.typicode.com/photos')
      const posts = await respose.json()
      setPosts(posts)
  }

  useEffect(() => {
      getPost()
  }, []);

  return (
      <div>
          {
              posts.map(post => <Photo key={post.id} post={post} />)
          }
      </div>
  )
}

export default Photos