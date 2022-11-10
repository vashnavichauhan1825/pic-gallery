import { useSelector } from "react-redux";
import { ImageCard, ImageTextBox } from "../../style/container";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { toBlob } from "html-to-image";

const Card = (props) => {
  const downloadImage = (url, name) => {
    saveAs(`${url}`, `${name}.jpg`);
  };
  const imageRef = useRef(null);
  const handleShare = async (name) => {
    const newFile = await toBlob(imageRef.current);
    const data = {
      files: [
        new File([newFile], `${name}.jpg`, {
          type: newFile.type,
        }),
      ],
      title: `${name}`,
      text: `${name}`,
    };

    try {
      if (!navigator.canShare(data)) {
        console.error("Can't share");
      }
      await navigator.share(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <ImageCard>
        <Link to={`/pic/${props.id}`}>
          <img src={props.urls.small} ref={imageRef} />
        </Link>
        <ImageTextBox>
          <span>
            <Link to={`/pic/${props.id}`}>
              <h2>{props.user.name}</h2>
            </Link>
            <span>
              <i class="fa fa-heart" aria-hidden="true"></i>
              {props.likes}
            </span>
          </span>

          <div>
            <i
              onClick={() => downloadImage(props.urls.small, props.user.name)}
              className="fa fa-download"
              aria-hidden="true"
            ></i>
            <i
              onClick={() => handleShare(props.user.name)}
              class="fa fa-share"
              aria-hidden="true"
            ></i>
          </div>
        </ImageTextBox>
      </ImageCard>
    </>
  );
};

export default Card;
