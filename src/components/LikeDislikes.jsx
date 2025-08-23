import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addlikes, dislikes, resetLikeDislike } from "../redux/feature/like_dislike/likeDislikeSlice";

const LikeDislikes = () => {
  const dispatch = useDispatch() 

   const {like, dislike} = useSelector((state)=>state.likeDislike)

  const handleAddLikes = () => {
      dispatch(addlikes())  
  }
  const handleDesLikes = () => {
  
      dispatch(dislikes())
  
  }
  const handleReset = () => {
  
      dispatch(resetLikeDislike())
  
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 gap-20">
      <p className="text-2xl font-bold text-purple-600">Like_dislikes App</p>

      <div className="flex flex-col gap-10 shadow-2xl bg-white px-10 py-6">
        <div className="flex gap-8">
          <p>
            Likes: <span>{like}</span>
          </p>
          <p>
            Dislikes: <span>{dislike}</span>
          </p>
        </div>

        <div className="flex gap-4">
            <button onClick={handleAddLikes} className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded cursor-pointer">Like</button>
            <button onClick={handleDesLikes} className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded cursor-pointer">Dislike</button>
            <button onClick={handleReset} className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded cursor-pointer">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislikes;
