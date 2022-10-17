import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './postsSlice'
import { subredditsSlice } from './subredditsSlice'

const store = configureStore({
    reducer: {
        posts: postsSlice,
        subreddits: subredditsSlice,
    }
})

export default store