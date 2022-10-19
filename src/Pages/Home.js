import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchSubreddits } from '../api/reddit'
import Post from '../components/Post'
import { Subreddit } from '../components/Subreddit'
import '../App.css'

export const Home = () => {

  const dispatch = useDispatch()
  
  const posts = useSelector(state => state.posts.posts)
  const subreddits = useSelector( state => state.subreddits.subreddits)

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchSubreddits())
  }, [dispatch])

  return (
    <section className='feed-container'>
      <div className='feed'>

        {/* Returns a Post component for each post in the posts array */}
        {posts.map(post => {
          return <Post postInfo={post}/>
        })}

      </div>
      <div className='subreddit-container round-border'>
        <div className='subreddit-title'>
          <p>Subreddits</p>
        </div>
        <div className='subreddit-info'>
          {/* Returns a Subreddit component for each post in the subreddits array */}
          {subreddits.map(subreddit => {
            return <Subreddit subredditInfo={subreddit}/>
            })
          }    
        </div>
      </div>
    </section>
  )
}
