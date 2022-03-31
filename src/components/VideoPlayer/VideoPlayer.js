import React, { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./VideoPlayer.module.css";
import { Context } from "../../context/context";

const FORMATS_VIDEO = ["mp4", "ogv", "avi"];
export default function VideoPlayer({ video, image }) {
  const [videoUrls, setVideUrls] = useState([]);
  const fullScreenVideoRef = useRef(null);
  const { setIsVideoPlayed } = useContext(Context);

  useEffect(() => {
    const getAllPosibilitiesVideoUrls = () => {
      if (video.endsWith("mp4")) {
        /* To change the path video to play it in all browsers */
        const formatIndex = video.indexOf("mp4");
        const videoUrlWithoutFormat = video.slice(0, formatIndex);
        const newVideoUrls = FORMATS_VIDEO.map(
          (format) => `${videoUrlWithoutFormat}${format}`
        );
        setVideUrls(newVideoUrls);
      }
    };

    const fullScreenVideoPlayer = () => {
      const videoFullScreen = fullScreenVideoRef.current;
      if (videoFullScreen.requestFullscreen) {
        videoFullScreen.requestFullscreen();
      }
    };

    getAllPosibilitiesVideoUrls();
    fullScreenVideoPlayer();
  }, []);

  return (
    <video
      className={styles.video}
      autoPlay
      controls
      poster={image}
      ref={fullScreenVideoRef}
      onEnded={() => setIsVideoPlayed(false)}
    >
      {/* To play the video in all browsers */}
      {videoUrls.map((url, indx) => {
        const lastWord = url.split(".").pop();
        return (
          <source key={indx} src={url} type={`video/${lastWord}`}></source>
        );
      })}
    </video>
  );
}

VideoPlayer.propTypes = {
  video: PropTypes.string,
  image: PropTypes.string,
};
