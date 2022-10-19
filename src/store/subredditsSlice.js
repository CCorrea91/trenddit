import { fetchSubreddits } from "../api/reddit"
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    subreddits: [],
    isLoading: false,
    status: '',
    error: false,
    errorMessage: '',
}

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state) => {
            state.isLoading = true
            state.status = 'Loading'
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = 'Success'
            state.subreddits = action.payload
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.error = true
            state.status = 'Failed'
            state.errorMessage = action.payload
        }
    }
})

export default subredditsSlice;