import { createSlice } from "@reduxjs/toolkit";
import { fetchNewPosts } from "./reddit";



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
    // reducers: {
    //     startGetPosts (state) {
    //         state.isLoading = true;
    //     },
    //     getPostsSuccess (state, action) {
    //         state.isLoading = false;
    //         state.posts = action.payload;
    //     },
    //     getPostsFailed (state, action) {
    //         state.isLoading = false;
    //         state.error = true;
    //         state.errorMessage = action.payload;
    //     }
    // }
    extraReducers: {
        [fetchNewPosts.pending]: (state) => {
            state.isLoading = true
            state.status = 'Loading'
        },
        [fetchNewPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = 'Success'
            state.posts = action.payload
        },
        [fetchNewPosts.rejected]: (state, action) => {
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