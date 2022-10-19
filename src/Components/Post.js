import React from 'react'
import '../App.css'

export const Post = ({postInfo}) => {

  const postMedia = postInfo.url
  const postAuthor = postInfo.author
  const postTitle = postInfo.title

  return (
    <div className='post'>
        <div className='post-title'>
                <h1>{postTitle}</h1> 
        </div>
        <div className='post-img round-border'>
            <img alt='' src={postMedia}/>
        </div>
        <div className='post-info round-border'>
            <div className='post-user'>
                <p>u/{postAuthor}</p>
            </div>
        </div>
        <br />
    </div>
  )
}

export default Post