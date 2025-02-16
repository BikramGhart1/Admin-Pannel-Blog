import { createSlice } from "@reduxjs/toolkit";

const loadPostFromStorage = () => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
}
const saveToLocalStorage = (posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
}
const postSlice = createSlice({
    name: "posts",
    initialState: { posts: loadPostFromStorage() },
    reducers: {
        addPost: (state, action) => {
            state.posts.push({ ...action.payload, comments: [], likes: 0, });
            saveToLocalStorage(state.posts);

        },
        updatePost: (state, action) => {
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if (postIndex !== -1) {
                state.posts[postIndex] = { ...action.payload, comments: state.posts[postIndex].comments, };
            }
            saveToLocalStorage(state.posts);
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id);
            saveToLocalStorage(state.posts);
        }, incrPostLike: (state, action) => {
            // const post = state.posts.find((post) => post.id === action.payload.id);
            // console.log('incr clicked');
            // post.likes=post.likes+1;
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if (postIndex !== -1) {
                state.posts[postIndex].likes += 1;
            }
            saveToLocalStorage(state.posts);
            console.log("Like button from Reducer");

        }, decrPostLike: (state, action) => {
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if (postIndex !== -1) {
                state.posts[postIndex].likes -= 1;
            }
            saveToLocalStorage(state.posts);

        },
        addComment: (state, action) => {
            const { id, commentContent, commentId } = action.payload;
            const post = state.posts.find(post => post.id === id);
            if (post) {
                post.comments.push({ commentId: commentId, content: commentContent });
            }
            saveToLocalStorage(state.posts);
        },
        updateComment: (state, action) => {
            const { id, commentId, newComment } = action.payload;
            const post = state.posts.find(p => p.id === id);
            if (post) {
                const commentIndex = post.comments.findIndex(comment => comment.commentId === commentId);
                if (commentIndex !== -1) {
                    post.comments[commentIndex] = newComment;
                }
            }
            saveToLocalStorage(state.posts);
        },
        deleteComment: (state, action) => {
            const { id, commentId } = action.payload;
            const post = state.posts.find(p => p.id === id);
            if (post) {
                post.comments = post.comments.filter(comment => comment.commentId !== commentId);
            }
            saveToLocalStorage(state.posts);
        }
    }
})

export const { addPost, updatePost, deletePost, incrPostLike, decrPostLike, addComment, updateComment, deleteComment } = postSlice.actions;

export default postSlice.reducer;
