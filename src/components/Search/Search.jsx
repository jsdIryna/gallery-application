import React, { useState } from "react";
import "./search.css";
import Input from "../Input/Input";
import { getImages } from "../../store/reducers/imagesSlice";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getImages(value));
  };

  return (
    <div className="search">
      <form onSubmit={onSubmitHandler} className="form">
        <button type="submit" className="button">
          <AiOutlineSearch />
        </button>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => setValue("")} className="button button-cross">
          <RxCross2 />
        </button>
      </form>
    </div>
  );
};

export default Search;
