import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import "./modalAddAlbum.css";
import { updateAlbum } from "../../store/reducers/albumSlice";
import ModalButton from "../ModalButton/ModalButton";

const ModalAddAlbum = ({ open, setOpen, src, page }) => {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.albums);
  const [albumName, setAlbumName] = useState("");

  const listHandler = (e) => setAlbumName(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (albumName) {
      dispatch(updateAlbum({ webformatURL: src, albumName, pageURL: page }));
    }
    setOpen(false);
  };

  return (
    <Modal className="create-album" open={open} setOpen={setOpen}>
      <div className="create-album-content">
        <h2>Choose the folder</h2>
        <form className="add-to-album" onSubmit={onSubmitHandler}>
          <div className="form__select">
            <select
              name="select"
              defaultValue="choose album"
              onChange={listHandler}
            >
              <option value="choose album" disabled="disabled">
                choose album
              </option>
              {albums.length > 0 &&
                albums.map(({ name, id }) => (
                  <option value={name} key={id}>
                    {name}
                  </option>
                ))}
            </select>
          </div>

          <ModalButton type="submit">choose</ModalButton>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddAlbum;
