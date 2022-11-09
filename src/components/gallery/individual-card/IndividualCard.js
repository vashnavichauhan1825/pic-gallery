import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IndividualImage } from "../../style/container";
import Navbar from "../Navbar";

const IndividualCard = () => {
  const { picId } = useParams();

  const imageArr = useSelector((state) => state.gallery.imageData);
  const value = imageArr.filter((item) => item.id === picId);
  console.log(value);
  return (
    <>
      <Navbar />
      {imageArr
        .filter((item) => item.id === picId)
        .map((image) => {
          return (
            <IndividualImage>
              <img src={image.urls.regular} />
            </IndividualImage>
          );
        })}
    </>
  );
};

export default IndividualCard;
