import React, { useState } from "react";
import "./imageItem.css";
import LikeButton from "../Ui/LikeButton/LikeButton";
import AddButton from "../Ui/AddButton/AddButton";
import ImageThumb from "../ImageThumb/ImageThumb";
import { useDispatch, useSelector } from "react-redux";
import { setLiked, unLiked } from "../../store/reducers/imagesSlice";
import ModalAddAlbum from "../ModalAddAlbum/ModalAddAlbum";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { removePhotoFromAlbum } from "../../store/reducers/albumSlice";
import ShareButton from "../Ui/ShareButton/ShareButton";

const ImageItem = ({
  src,
  page,
  hideAddAction = false,
  hideLikeAction = false,
  removeAction = false,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [addPhoto, setAddPhoto] = useState(false);
  const { likedImages } = useSelector((state) => state.images);
  const { albumId } = useParams();
  const isFoundImages = likedImages.some(
    ({ webformatURL }) => webformatURL === src
  );

  const likeHandler = () => {
    if (isFoundImages) {
      dispatch(unLiked(src));
    } else {
      dispatch(setLiked({ webformatURL: src, pageURL: page }));
    }
  };

  const thumbHandler = () => setOpen(true);

  const addHandler = () => setAddPhoto(true);

  const removeHandler = () =>
    dispatch(removePhotoFromAlbum({ src, folderId: albumId }));

  return (
    <>
      <ImageThumb
        open={open}
        setOpen={setOpen}
        image={src}
        likeHandler={likeHandler}
        liked={isFoundImages}
        addHandler={addHandler}
      />
      <div className="image-item">
        {!hideAddAction && (
          <AddButton subClassName="image-item-action" addHandler={addHandler} />
        )}
        <img src={src} alt={src} onClick={thumbHandler} />
        {!hideLikeAction && (
          <LikeButton
            subClassName="image-item-action"
            likeHandler={likeHandler}
            liked={isFoundImages}
          />
        )}
        {removeAction && (
          <button className="image-item-action remove" onClick={removeHandler}>
            <AiOutlineClose />
          </button>
        )}
        <ShareButton
          link={page}
          subClassName={
            hideLikeAction ? "image-item-action album" : "image-item-action"
          }
        />
      </div>
      <ModalAddAlbum page={page} src={src} open={addPhoto} setOpen={setAddPhoto} />
    </>
  );
};

export default ImageItem;
