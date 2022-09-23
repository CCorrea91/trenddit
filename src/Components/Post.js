import React from 'react'
import '../App.css'

export const Post = () => {
  return (
    <div className='post'>
        <div className='post-title'>
                <h1>Example Title</h1> 
        </div>
        <div className='post-img round-border'>
            <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        </div>
        <div className='post-info round-border'>
            <div className='post-user'>
                <p>u/exampleuser</p>
            </div>
        </div>
        <br />
    </div>
  )
}

export default Post