import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailCont, IndividualImage } from "../../style/container";
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
              <h1>{image.user.name}</h1>
              <img src={image.urls.regular} />
              <div>
                <DetailCont>
                  <span>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    {image.likes}
                  </span>
                  <span>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    {image.location.name}
                  </span>
                </DetailCont>

                <p>{image.user.bio}</p>
              </div>
            </IndividualImage>
          );
        })}
    </>
  );
};

export default IndividualCard;
