import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if (postIndex !== -1) {
                state.posts[postIndex] = action.payload;
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id);
        }
    }
})

export const { addPost, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
