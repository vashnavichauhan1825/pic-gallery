import { useEffect, useState, useRef } from "react";

import Navbar from "./Navbar";
import { GalleryCont, ImageCard, IndividualImage } from "../style/container";
import Card from "./card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/getDataSlice";
import Loading from "../ui/Loading";

const Gallery = () => {
  const { imageData, loading } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          {imageData.length ? (
            <GalleryCont>
              {imageData.map((item) => (
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
