import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImage } from "../../store/getDataSlice";
import { Nav } from "../style/container";

const Navbar = (props) => {
  const { imageData } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  const [pic, setPic] = useState("");
  const searchHandler = (e) => {
    dispatch(searchImage(e.target.value));
    // axios
    //   .get(
    //     `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    //   )
    //   .then((data) => console.log(data));
  };
  return (
    <Nav>
      <input
        type="text"
        onChange={(e) => searchHandler(e)}
        placeholder="serach..."
      />
    </Nav>
  );
};

export default Navbar;
