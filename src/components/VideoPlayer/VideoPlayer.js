import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./VideoPlayer.module.css";

const FORMATS_VIDEO = ["mp4", "ogv", "avi"];
export default function VideoPlayer({ video, image }) {
  const [videoUrls, setVideUrls] = useState([]);

  useEffect(() => {
    if (video.endsWith("mp4")) {
      const formatIndex = video.indexOf("mp4");
      const videoUrlWithoutFormat = video.slice(0, formatIndex);
      const newVideoUrl = FORMATS_VIDEO.map(
        (format) => `${videoUrlWithoutFormat}${format}`
      );
      setVideUrls(newVideoUrl);
    }
  }, []);

  return (
    <video id='videoPlayer' className={styles.video} autoPlay controls poster={image} loop>
      {videoUrls.map((url, indx) => {
        const lastWord = url.split(".").pop();
        return <source key={indx} src={url} type={`video/${lastWord}`}></source>;
      })}
    </video>
  );
}

VideoPlayer.propTypes = {
  video: PropTypes.string,
  image: PropTypes.string
};
