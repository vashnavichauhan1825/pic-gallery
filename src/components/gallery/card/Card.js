import React from "react";
import { ImageCard, ImageTextBox } from "../../style/container";
import { saveAs } from "file-saver";

const Card = (props) => {
  const downloadImage = (url) => {
    saveAs(`${url}`, "image.jpg"); // Put your image url here.
  };
  return (
    <ImageCard>
      <img src={props.urls.small} />
      <ImageTextBox>
        <span>
          <h2>{props.user.name}</h2>
          <small>{props.user.bio}</small>
        </span>

        <div>
          <i
            onClick={() => downloadImage(props.urls.small)}
            className="fa fa-download"
            aria-hidden="true"
          ></i>
          <i class="fa fa-share" aria-hidden="true"></i>
        </div>
      </ImageTextBox>
    </ImageCard>
  );
};

export default Card;
