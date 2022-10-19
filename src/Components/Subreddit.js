import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api/reddit';

export const Subreddit = ({subredditInfo}) => {

  const subredditName = subredditInfo.display_name

  return (
    <>
      <div className='subreddit-info'>
        <Link to={fetchPosts(`/${subredditName}`)} path={subredditName}>r/{subredditName}</Link>
      </div>
    </>
  )
}

export default Subreddit
