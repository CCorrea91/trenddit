import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiRoot = 'www.reddit.com'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async(subreddit = '') => {

        const response = await fetch(`${apiRoot}/${subreddit}.json`)
        const json = await response.json()

        console.log(json)
        return json
    }
)
