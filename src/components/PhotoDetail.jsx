import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PhotoDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(respose => respose.json())
            .then(data => setPost(data))
    })

    const navigate = useNavigate()

    const goToBack = () => {
        navigate('/photos')
    }
    return (

        <div>

            <img src={post.url} alt="" />
            <button onClick={goToBack}>GoToBack</button>
        </div>
    )
}

export default PhotoDetail