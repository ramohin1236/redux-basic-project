import { createSlice } from '@reduxjs/toolkit';

const initaialState = {
    like:0,
    dislike:0
}

const likeDislikeSlice = createSlice({
    name: "likeDislike",
    initialState: initaialState,
    reducers: {
        addlikes: (state => {
            state.like += 1
        }),
       dislikes: (state => {
           state.dislike += 1
       }),
       resetLikeDislike: (state)=>{
        state.like =0;
        state.dislike=0
       }
    }
})

export const {addlikes, dislikes, resetLikeDislike} = likeDislikeSlice.actions;

export default likeDislikeSlice.reducer;


