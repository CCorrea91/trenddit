import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts, fetchSubreddits } from '../api/reddit'
import Post from '../components/Post'
import {Stats} from '../components/Stats'

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchSubreddits())
  }, [dispatch])

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
