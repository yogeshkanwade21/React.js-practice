import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '1', title: 'Learning Redux', content: 'Getting started with redux by building a simple app'},
    {id: '2', title: 'Completed Redux', content: 'Completed the Redux tutorial and built a simple app'},         
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
        