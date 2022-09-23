import React from 'react'
import Post from '../Components/Post'
import {Stats} from '../Components/Stats'

export const Feed = () => {
  return (
    <section className='feed-container'>
      <div className='feed'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <div className='stats'>
        <Stats/>
      </div>
    </section>
  )
}
