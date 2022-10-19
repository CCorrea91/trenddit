import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api/reddit";

const initialState= {
    posts: [],
    isLoading: false,
    status: '',
    error: false,
    errorMessage: '',
    searchTerm: '',
    selectedPosts: '/new',
    currentPage: 1,
    nextPage: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setNextPage: (state) => {
            state.currentPage ++
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
            state.status = 'Loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = 'Success'
            state.posts = action.payload[0]
            state.nextPage = action.payload[1]
        },
        [fetchPosts.rejected]: (state, action) => {
            state.error = true
            state.status = 'Failed'
            state.errorMessage = action.payload
        }
    }
})

export const selectNextPage = state => state.posts.nextPage
export const { setNextPage } = postsSlice.actions
export default postsSlice