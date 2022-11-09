import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      )
      .then(({ data }) => {
        setImage(data);
      });
  }, []);
  return <div>Gallery</div>;
};

export default Gallery;
