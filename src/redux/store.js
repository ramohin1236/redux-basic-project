import { configureStore } from '@reduxjs/toolkit'
import likeDislikesReducers from '../redux/feature/like_dislike/likeDislikeSlice'

const store = configureStore({
  reducer: {
    likeDislike: likeDislikesReducers
  }
})

export default store 