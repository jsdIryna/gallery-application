import React from "react";
import Modal from "../Modal/Modal";
import "./imageThumb.css";
import AddButton from "../Ui/AddButton/AddButton";
import LikeButton from "../Ui/LikeButton/LikeButton";

const ImageThumb = ({ open, setOpen, image, liked, likeHandler, addHandler }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="image-thumb">
        <AddButton subClassName="image-thumb-action" addHandler={addHandler}/>
        <img src={image} alt={image} />
        <LikeButton subClassName="image-thumb-action" liked={liked} likeHandler={likeHandler}  />
      </div>
    </Modal>
  );
};

export default ImageThumb;
