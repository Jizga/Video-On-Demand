import React, { useEffect, useState } from "react";
import styles from "./Video.module.css";

const FORMATS_VIDEO = ["mp4", "ogv", "avi"];
export default function Video({ video, image }) {
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
    <video className={styles.video} autoPlay controls poster={image} loop>
      {videoUrls.map((url, indx) => {
        const lastWord = url.split(".").pop();
        return <source key={indx} src={url} type={`video/${lastWord}`}></source>;
      })}
    </video>
  );
}
