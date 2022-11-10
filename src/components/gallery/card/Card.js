import { useSelector } from "react-redux";
import { ImageCard, ImageTextBox } from "../../style/container";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { toBlob } from "html-to-image";

const Card = (props) => {
  const checkWiring = useSelector((state) => state.gallery.dummyValue);
  const downloadImage = (url) => {
    saveAs(`${url}`, "image.jpg"); // Put your image url here.
  };
  const imageRef = useRef(null);

  const handleShare = async () => {
    const newFile = await toBlob(imageRef.current);
    const data = {
      files: [
        new File([newFile], "nuzlocke.png", {
          type: newFile.type,
        }),
      ],
      title: "Nuzlocke",
      text: "Nuzlocke",
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
              onClick={() => downloadImage(props.urls.small)}
              className="fa fa-download"
              aria-hidden="true"
            ></i>
            <i onClick={handleShare} class="fa fa-share" aria-hidden="true"></i>
          </div>
        </ImageTextBox>
      </ImageCard>
    </>
  );
};

export default Card;
