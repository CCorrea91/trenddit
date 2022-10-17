import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiRoot = 'https://www.reddit.com'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async(subreddit = '') => {

        const response = await fetch(`${apiRoot}/${subreddit}.json`)
        const json = await response.json()
        const posts = json.data.children
        const post = posts.map(post => post.data)
        return post

    }
)

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async() => {

        const response = await fetch(`${apiRoot}/subreddits.json`)
        const json = await response.json()
        const subreddits = json.data.children
        const subreddit = subreddits.map(sub => sub.data)
        return subreddit
    }
)

