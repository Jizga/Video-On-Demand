import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [data, setData] = useState([]);
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [cardSelected, setCardSelected] = useState({});
  const { image, mediaUrl } = cardSelected;

  const playVideo = (card) => {
    setIsVideoPlayed(true);
    setCardSelected(card);
  };


  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://test-data-interviews.s3.eu-west-1.amazonaws.com/accedoTest.json"
        );
        response = await response.json();
        setData(response);
      } catch (e) {
        console.error(`Error from database -- ${e}`);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* To replace the Carousel by the video player */}
      {isVideoPlayed ? (
        <VideoPlayer video={mediaUrl} image={image} />
      ) : (
        <div className={styles.carousel}>
          {data.length
            ? data.map((dataElement) => (
                <Card
                  key={dataElement.id}
                  element={dataElement}
                  playVideo={() => playVideo(dataElement)}
                />
              ))
            : "Loading..."}
        </div>
      )}
    </>
  );
}
