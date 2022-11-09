import { useEffect, useState, useRef } from "react";

import { toBlob } from "html-to-image";
import Navbar from "./Navbar";
import { GalleryCont, ImageCard, IndividualImage } from "../style/container";
import Card from "./card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/getDataSlice";
import Loading from "../ui/Loading";

const Gallery = () => {
  const [imgData, setImgData] = useState([]);
  const { imageData, loading } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
    setImgHandler(imageData);
  }, []);

  const setImgHandler = (data) => {
    setImgData(data);
  };
  return (
    <>
      <Navbar searchFunc={setImgHandler} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {imgData.length ? (
            <GalleryCont>
              {imgData.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </GalleryCont>
          ) : (
            <>
              <IndividualImage>
                <h1>OOOPS SORRY ! 🙄 NOT FOUND</h1>
              </IndividualImage>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Gallery;
