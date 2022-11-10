import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getImages, searchImage } from "../../store/getDataSlice";
import { Nav } from "../style/container";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    const keyword = e.target.value;
    if (keyword.length !== 0) {
      dispatch(searchImage(keyword));
    } else {
      dispatch(getImages());
    }
  };
  return (
    <Nav>
      <Link to="/">
        <h2>
          <i class="fa fa-camera-retro" aria-hidden="true"></i>PIC-GALLERY
        </h2>
      </Link>
      <input
        type="text"
        onChange={(e) => searchHandler(e)}
        placeholder="search..."
      />
      <a
        href="https://github.com/vashnavichauhan1825/pic-gallery/tree/main"
        target="_blank"
      >
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
    </Nav>
  );
};

export default Navbar;
