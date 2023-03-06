import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Gallery from "../Gallery/Gallery";

const AlbumDetail = () => {
  const { albums } = useSelector((state) => state.albums);
  const [currentAlbum, setCurrentAlbum] = useState({});

  const { albumId } = useParams();

  useEffect(() => {
    const albumData = albums.find(({ id }) => id === +albumId);
    setCurrentAlbum(albumData);
  }, [albums]);

  return (
    <>{currentAlbum.content && <Gallery hideAddAction hideLikeAction removeAction images={currentAlbum.content} />}</>
  );
};

export default AlbumDetail;