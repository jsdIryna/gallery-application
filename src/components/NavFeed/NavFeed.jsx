import React from "react";
import { Link } from "react-router-dom";
import "./navFeed.css";
import { IoMdPhotos } from "react-icons/io";
import { CgAlbum } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";

const NavFeed = () => {
  return (
    <div className="nav-feed">
      <div className="nav-feed-action">
        <Link to="/">
          <IoMdPhotos />
          Photos
        </Link>
      </div>
      <div className="nav-feed-action">
        <Link to="/albums">
          <CgAlbum />
          Albums
        </Link>
      </div>
      <div className="nav-feed-action">
        <Link to="/liked">
          <AiFillHeart />
          Liked
        </Link>
      </div>
    </div>
  );
};

export default NavFeed;
