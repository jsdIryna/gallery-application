import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./album.css";
import {
  MdCreateNewFolder,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FcFolder } from "react-icons/fc";
import { createAlbum, removeAlbum } from "../../store/reducers/albumSlice";
import { Link, Outlet, useParams } from "react-router-dom";
import ModalButton from "../ModalButton/ModalButton";

const Albums = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.albums);
  const [open, setOpen] = useState(false);
  const [albumName, setAlbumName] = useState("");

  const { albumId } = useParams();

  const createHandler = () => {
    setOpen(!open);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setOpen(false);
    const data = {
      name: albumName,
      id: Date.now(),
      content: [],
    };
    dispatch(createAlbum(data));

    setAlbumName("");
  };

  const changeHandler = (e) => {
    setAlbumName(e.target.value);
  };

  const removeHandler = (e, id) => {
    e.preventDefault();
    dispatch(removeAlbum(id));
  };

  return (
    <div className="albums">
      <Outlet />

      {!albumId && (
        <>
          <button className="create-button" onClick={createHandler}>
            <MdCreateNewFolder />
          </button>
          <div className="album-list">
            {albums.length > 0 &&
              albums.map(({ name, id }) => (
                <Link to={`${id}`} key={id}>
                  <div className="album-item-wrapper">
                    <div className="album-item">
                      <FcFolder />
                      <span>{name}</span>
                    </div>
                    <button
                      className="remove-album"
                      onClick={(e) => removeHandler(e, id)}
                    >
                      <MdOutlineRemoveCircleOutline />
                    </button>
                  </div>
                </Link>
              ))}
          </div>
          <Modal className="create-album" open={open} setOpen={setOpen}>
            <div className='create-album-content'>
              <h2>Create folder</h2>
              <form className="form-album" onSubmit={onSubmitHandler}>
                <input type="text" onChange={changeHandler} value={albumName} />
                <ModalButton type="submit">Create</ModalButton>
              </form>
            </div>

          </Modal>
        </>
      )}
    </div>
  );
};

export default Albums;
