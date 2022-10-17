import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api/reddit";



export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        status: '',
        error: false,
        errorMessage: '',
        searchTerm: '',
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
            state.status = 'Loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = 'Success'
            state.posts = action.payload
        },
        [fetchPosts.rejected]: (state, action) => {
            state.error = true
            state.status = 'Failed'
            state.errorMessage = action.payload
        }
    }
})


export const selectPosts = (state) => state.postsSlice.posts;

export const { 
    startGetPosts, 
    getPostsSuccess, 
    getPostsFailed 
} = postsSlice.actions;

export default postsSlice.reducer; 