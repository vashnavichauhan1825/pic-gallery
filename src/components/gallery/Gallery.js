import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { GalleryCont, ImageCard } from "../style/container";
import Card from "./card/Card";

const Gallery = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      )
      .then(({ data }) => {
        setImage(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <GalleryCont>
        {image.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </GalleryCont>
    </>
  );
};

export default Gallery;
