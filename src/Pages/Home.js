// import React, { useEffect } from 'react'
import Post from '../components/Post'
import {Stats} from '../components/Stats'
// import { useDispatch } from 'react-redux'
// import { fetchPosts } from '../api/reddit'

export const Home = () => {


  return (
    <section className='feed-container'>
      <div className='feed'>
        <Post/>

      </div>
      <div className='stats'>
        <Stats/>
      </div>
    </section>
  )
}
