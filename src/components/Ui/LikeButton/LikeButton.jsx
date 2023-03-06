import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = ({ liked, likeHandler, subClassName }) => {
  return (
    <button className={`${subClassName} like`} onClick={likeHandler}>
      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default LikeButton;
