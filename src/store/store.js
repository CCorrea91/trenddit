import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './postsSlice'
import { subredditsSlice } from './subredditsSlice'

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        subreddits: subredditsSlice.reducer,
    }
})

export default store