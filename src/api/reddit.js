import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiRoot = 'https://www.reddit.com'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async(subreddit = '/new') => {

        const response = await fetch(`${apiRoot}/${subreddit}.json`)
        const json = await response.json()
        const posts = json.data.children
        const post = posts.map(post => post.data)
        const nextPage = json.data.after
        console.log(post, nextPage)
        return [post, nextPage]

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

