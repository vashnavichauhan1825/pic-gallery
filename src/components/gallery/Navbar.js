import { useSelector } from "react-redux";
import { Nav } from "../style/container";

const Navbar = (props) => {
  const { imageData } = useSelector((state) => state.gallery);

  const searchHandler = (e) => {
    const keyword = e.target.value;
    const filterImg = imageData.filter((value) =>
      value.user.name.includes(keyword)
    );
    props.searchFunc(filterImg);
    console.log(filterImg);
  };
  return (
    <Nav>
      <input onChange={(e) => searchHandler(e)} placeholder="serach..." />
    </Nav>
  );
};

export default Navbar;
